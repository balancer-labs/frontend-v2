import EventEmitter from 'events';
import { isArray } from 'lodash';
import { QueryKey, QueryOptions } from 'react-query';
import { computed, reactive, Ref, ref, watch } from 'vue';
import { useQueries } from 'vue-query';

export function promisesEmitter(promises: Promise<any>[] | Promise<any>) {
  const emitter = new EventEmitter();
  if (isArray(promises)) {
    promises.map(promise =>
      promise.then(value => {
        emitter.emit('resolved', value);
      })
    );
    return emitter;
  }
  promises.then(value => {
    emitter.emit('resolved', value);
  });
  return emitter;
}

type Promises = Record<
  string,
  {
    queryFn: (...args: any[]) => Promise<any> | Promise<any>[];
    dependencies?: Record<string, Ref>;
    init?: boolean;
    enabled?: Ref<boolean>;
    waitFor?: string[];
    streamResponses?: boolean;
    independent?: boolean;
  }
>;

export default function useQueryStreams(
  id: string,
  promises: Promises,
  options?: QueryOptions
) {
  const result = ref<any>();

  const successStates = ref(
    Object.fromEntries(
      Object.keys(promises).map(promiseKey => [promiseKey, false])
    )
  );

  const internalData = ref(
    Object.fromEntries(
      Object.keys(promises).map(promiseKey => [promiseKey, undefined])
    )
  );

  const queries: {
    queryFn: (...args: any[]) => Promise<any>;
    queryKey: Ref<QueryKey>;
  }[] = [];

  Object.keys(promises).forEach(promiseKey => {
    const query = promises[promiseKey];
    const template: any = {
      queryFn: async () => {
        if (!query.streamResponses) {
          return query.queryFn(result, internalData);
        }
        const emitter = promisesEmitter(
          await query.queryFn(result, internalData)
        );
        emitter.on('resolved', value => {
          result.value = value;
        });
      },
      queryKey: [id, promiseKey, query.dependencies || {}] as any,
      enabled: computed(
        () =>
          (query.enabled?.value ?? true) &&
          (promises[promiseKey].waitFor || []).every(
            otherQueryId => successStates.value[otherQueryId] === true
          )
      ),
      refetchOnWindowFocus: false
    };
    template.onSuccess = response => {
      if (!query.streamResponses && !query.independent) {
        result.value = response;
      }
      successStates.value[promiseKey] = true;
      internalData.value[promiseKey] = response;
    };
    queries.push(reactive(template));
  });
  const responses = useQueries(queries as any);
  const dataStates = computed(() => {
    const states: {
      [key: keyof typeof promises]: 'idle' | 'error' | 'loading' | 'success';
    } = {};
    Object.keys(promises).forEach((promiseKey, i) => {
      states[promiseKey] = responses[i].status;
    });
    return states;
  });

  const data = computed(() => {
    const data: {
      [key: keyof typeof promises]: any;
    } = {};
    Object.keys(promises).forEach((promiseKey, i) => {
      data[promiseKey] = responses[i].data;
    });
    return data;
  });
  const isComplete = computed(() =>
    Object.values(dataStates.value).every(state => state === 'success')
  );

  return {
    dataStates,
    isComplete,
    data,
    result
  };
}

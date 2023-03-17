import { isString } from 'lodash';

export function silenceConsoleLog(
  vi,
  silenceRulesCallback: (string) => boolean
) {
  const originalConsoleLog = console.log;
  return vi
    .spyOn(console, 'log')
    .mockImplementation((message, optionalParams) => {
      // Silence Fetching logs
      if (isString(message) && silenceRulesCallback(message)) return;

      originalConsoleLog(message, optionalParams);
    });
}

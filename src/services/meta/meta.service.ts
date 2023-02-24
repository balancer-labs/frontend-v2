import { Pool } from '@balancer-labs/sdk';
import { RouteLocationNormalized } from 'vue-router';
import { configService } from '../config/config.service';
import { OG_META_DATA, ROUTE_META_DATA } from './meta.constants';

interface IMetaService {
  setMeta(route: RouteLocationNormalized | string): void;
  setOgImage(poolId: string): void;
}

class MetaService implements IMetaService {
  constructor(private readonly config = configService) {}

  public setMeta(route: RouteLocationNormalized, pool?: Pool): void {
    if (!route.name || !ROUTE_META_DATA[route.name]) {
      this.setDefaultMeta();
      return;
    }

    const descriptionMeta = document.querySelector('meta[name=description]');
    const keywordsMeta = document.querySelector('meta[name=keywords]');

    const { metaKeywords } = ROUTE_META_DATA[route.name];
    let { metaTitle, metaDescription } = ROUTE_META_DATA[route.name];

    // Replace pool specific meta data
    if (route.name === 'pool' && pool) {
      metaTitle = metaTitle.replace('[pool_symbol]', pool.symbol || 'Pool');
      metaDescription = metaDescription
        .replace('[pool_type]', pool.poolType)
        .replace('[pool_name]', pool.name);
    }

    if (metaTitle) {
      document.title = metaTitle.replace(
        '[network_name]',
        this.config.network.name
      );
    }

    if (metaDescription) {
      descriptionMeta?.setAttribute('content', metaDescription);
    }

    if (metaKeywords) {
      keywordsMeta?.setAttribute('content', metaKeywords);
    }
  }

  public setOgImage(poolId: string): void {
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    const metaData = OG_META_DATA[poolId];

    if (!ogImageTag || !metaData) {
      return;
    }

    ogImageTag.setAttribute('content', metaData.imageUrl);
  }

  private setDefaultMeta(): void {
    const descriptionMeta = document.querySelector('meta[name=description]');

    document.title = 'Balancer';
    descriptionMeta?.setAttribute(
      'content',
      'A UI that supports core Balancer protocol functionality. Explore & create pools, manage liquidity, swap tokens, get veBAL and claim incentives.'
    );
  }
}

const metaService = new MetaService();
export default metaService;

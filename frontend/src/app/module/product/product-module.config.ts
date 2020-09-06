import { ModuleConfig } from '../../shared/interface/module-config.interface';

const path: string = 'product';

export const PRODUCT_CONFIG: ModuleConfig = {
  nameSingular: 'Produto',
  namePlural: 'Produtos',
  path,
  pathApi: '/products',
  pathFront: `/${path}`
};

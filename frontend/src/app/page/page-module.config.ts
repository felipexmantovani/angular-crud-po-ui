import { ModuleConfig } from '../shared/interface/module-config.interface';

const path: string = 'page';

export const PAGE_CONFIG: ModuleConfig = {
  nameSingular: 'Página',
  namePlural: 'Páginas',
  path: path,
  pathFront: `/${path}`
};

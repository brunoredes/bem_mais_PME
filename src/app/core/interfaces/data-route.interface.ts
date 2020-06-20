import { IMenu } from './menu.interface';

export interface IDataRoute {
  menuConfig: Array<IMenu>;
  roleGuard: number;
  title: string;
}

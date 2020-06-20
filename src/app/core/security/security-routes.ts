import { Route } from '@angular/router';
import { AgregadorMenuConfig } from './guards/configs/agregador-menu.config';
import { ComercialMenuConfig } from './guards/configs/comercial-menu.config';
import { CorretorMenuConfig } from './guards/configs/corretor-menu.config';
import { GerenteMenuConfig } from './guards/configs/gerente-menu.config';
import { MasterDealerMenuConfig } from './guards/configs/master-dealer-menu.config';
import { VendedorMenuConfig } from './guards/configs/vendedor-menu.config';
import { AuthRoleGuard } from '../security/guards/auth-role.guard';

export const privateRoutes: Array<Route> = [
  {
    path: 'vendedor',
    loadChildren: () =>
      import('../../pages/vendedor/vendedor.module').then(
        m => m.DashboardModule
      ),
    data: {
      menuConfig: VendedorMenuConfig,
      roleGuard: 1
    },
    canLoad: [AuthRoleGuard]
  },
  {
    path: 'comercial',
    loadChildren: () =>
      import('../../pages/comercial/comercial.module').then(
        m => m.ComercialModule
      ),
    data: {
      menuConfig: ComercialMenuConfig,
      roleGuard: 2
    },
    canLoad: [AuthRoleGuard]
  },
  {
    path: 'agregador',
    loadChildren: () =>
      import('../../pages/agregador/agregador.module').then(
        m => m.AgregadorModule
      ),
    data: {
      menuConfig: AgregadorMenuConfig,
      roleGuard: 3
    },
    canLoad: [AuthRoleGuard]
  },
  {
    path: 'corretor',
    loadChildren: () =>
      import('../../pages/corretor/corretor.module').then(
        m => m.CorretorModule
      ),
    data: {
      menuConfig: CorretorMenuConfig,
      roleGuard: 4
    },
    canLoad: [AuthRoleGuard]
  },
  {
    path: 'gerentedeloja',
    loadChildren: () =>
      import('../../pages/gerente/gerente.module').then(m => m.GerenteModule),
    data: {
      menuConfig: GerenteMenuConfig,
      roleGuard: 5
    },
    canLoad: [AuthRoleGuard]
  },
  {
    path: 'masterdealer',
    loadChildren: () =>
      import('../../pages/master-dealer/master-dealer.module').then(
        m => m.MasterDealerModule
      ),
    data: {
      menuConfig: MasterDealerMenuConfig,
      roleGuard: 6
    },
    canLoad: [AuthRoleGuard]
  }
];

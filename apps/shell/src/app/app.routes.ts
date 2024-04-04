import { Route } from '@angular/router';
import { DashboardComponent } from '@demo/dashboard';

export const appRoutes: Route[] = [
  {
    path: 'breweries',
    loadChildren: () => import('breweries/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: DashboardComponent,
  },
];

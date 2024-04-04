import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'micro',
        component: RemoteEntryComponent,
      },
      {
        path: 'brewpub',
        component: RemoteEntryComponent,
      },
      {
        path: 'large',
        component: RemoteEntryComponent,
      },
      {
        path: 'closed',
        component: RemoteEntryComponent,
      },
      {
        path: 'us',
        component: RemoteEntryComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
      },
    ]
  },
];

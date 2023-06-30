import { Route } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { endsWith } from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    matcher: endsWith(''),
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

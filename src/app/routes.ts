import { RouterConfig } from '@angular/router';
import { Notes, Main, About } from './containers';

export const routes: RouterConfig = [
  // redirect
  { path: '**', redirectTo: '' },
  // default
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        component: Notes
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
]

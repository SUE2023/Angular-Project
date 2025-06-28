import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'task-list',
    loadComponent: () => import('./task-list/task-list').then((m) => m.TaskList),
  },
];

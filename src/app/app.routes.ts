import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    loadComponent: () =>
      import('./modules/users/components/user-list/user-list.component').then(m => m.UserListComponent)
  },
  {
    path: 'repositories',
    loadComponent: () =>
      import('./modules/repositories/components/repository-list/repository-list.component').then(m => m.RepositoryListComponent)
  },
  {
    path: 'repositories/:id',
    loadComponent: () =>
      import('./modules/repositories/components/repository-detail/repository-detail.component').then(m => m.RepositoryDetailComponent)
  }
];

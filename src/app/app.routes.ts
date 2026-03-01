import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/Home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'become-partner',
    loadComponent: () =>
      import('./pages/Become-partner/become-partner.component')
        .then(m => m.BecomePartnerComponent)
  }
];
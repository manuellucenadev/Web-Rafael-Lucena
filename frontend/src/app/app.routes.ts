import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./features/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'galeria/:id',
    loadComponent: () => import('./features/obra-detalle/obra-detalle.component').then(m => m.ObraDetalleComponent)
  },
  {
    path: 'exposiciones',
    loadComponent: () => import('./features/exposiciones/exposiciones.component').then(m => m.ExposicionesComponent)
  },
  {
    path: 'exposiciones/:id',
    loadComponent: () => import('./features/exposicion-detalle/exposicion-detalle.component').then(m => m.ExposicionDetalleComponent)
  },
  {
    path: 'biografia',
    loadComponent: () => import('./features/biografia/biografia.component').then(m => m.BiografiaComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: 'prensa',
    loadComponent: () => import('./features/textos-prensa/textos-prensa.component').then(m => m.TextosPrensaComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

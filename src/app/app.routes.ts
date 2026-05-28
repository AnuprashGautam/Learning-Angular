import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductsContainerComponent } from './features/products/pages/products-container.component';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,

    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },

      {
        path: 'products',
        component: ProductsContainerComponent
      }
    ]
  }

];
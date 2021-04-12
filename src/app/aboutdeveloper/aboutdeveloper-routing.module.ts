import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutdeveloperPage } from './aboutdeveloper.page';

const routes: Routes = [
  {
    path: '',
    component: AboutdeveloperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutdeveloperPageRoutingModule {}

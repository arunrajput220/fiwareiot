import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatavisPage } from './datavis.page';

const routes: Routes = [
  {
    path: '',
    component: DatavisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatavisPageRoutingModule {}

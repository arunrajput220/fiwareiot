import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatavisualizePage } from './datavisualize.page';

const routes: Routes = [
  {
    path: '',
    component: DatavisualizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatavisualizePageRoutingModule {}

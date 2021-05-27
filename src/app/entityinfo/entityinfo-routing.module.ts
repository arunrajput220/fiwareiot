import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityinfoPage } from './entityinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EntityinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityinfoPageRoutingModule {}

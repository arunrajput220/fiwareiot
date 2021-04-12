import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitymanagerPage } from './entitymanager.page';

const routes: Routes = [
  {
    path: '',
    component: EntitymanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitymanagerPageRoutingModule {}

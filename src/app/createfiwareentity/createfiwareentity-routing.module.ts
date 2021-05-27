import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatefiwareentityPage } from './createfiwareentity.page';

const routes: Routes = [
  {
    path: '',
    component: CreatefiwareentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatefiwareentityPageRoutingModule {}

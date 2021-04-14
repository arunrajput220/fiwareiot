import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdmPage } from './idm.page';

const routes: Routes = [
  {
    path: '',
    component: IdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdmPageRoutingModule {}

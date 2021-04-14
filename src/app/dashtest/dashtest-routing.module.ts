import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashtestPage } from './dashtest.page';

const routes: Routes = [
  {
    path: '',
    component: DashtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashtestPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WirecloudPage } from './wirecloud.page';

const routes: Routes = [
  {
    path: '',
    component: WirecloudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WirecloudPageRoutingModule {}

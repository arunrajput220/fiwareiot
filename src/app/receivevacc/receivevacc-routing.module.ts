import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivevaccPage } from './receivevacc.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivevaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivevaccPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlpanelPage } from './controlpanel.page';

const routes: Routes = [
  {
    path: '',
    component: ControlpanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlpanelPageRoutingModule {}

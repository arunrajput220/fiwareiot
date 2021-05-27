import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataloggerPage } from './datalogger.page';

const routes: Routes = [
  {
    path: '',
    component: DataloggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataloggerPageRoutingModule {}

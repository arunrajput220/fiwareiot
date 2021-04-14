import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorionentityPage } from './corionentity.page';

const routes: Routes = [
  {
    path: '',
    component: CorionentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorionentityPageRoutingModule {}

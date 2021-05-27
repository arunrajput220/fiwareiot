import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyvaccdashPage } from './myvaccdash.page';

const routes: Routes = [
  {
    path: '',
    component: MyvaccdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyvaccdashPageRoutingModule {}

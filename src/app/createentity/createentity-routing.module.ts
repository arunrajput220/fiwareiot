import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateentityPage } from './createentity.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreateentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule],
})
export class CreateentityPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinventoryPage } from './vaccinventory.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinventoryPageRoutingModule {}

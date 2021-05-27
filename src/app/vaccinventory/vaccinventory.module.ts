import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinventoryPageRoutingModule } from './vaccinventory-routing.module';

import { VaccinventoryPage } from './vaccinventory.page';

import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinventoryPageRoutingModule,
 NgApexchartsModule

  ],
  declarations: [VaccinventoryPage]
})
export class VaccinventoryPageModule {}

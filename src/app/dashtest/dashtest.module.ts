import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashtestPageRoutingModule } from './dashtest-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashtestPage } from './dashtest.page';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashtestPageRoutingModule,
    NgxGaugeModule,
    NgApexchartsModule
  ],
  declarations: [DashtestPage]
})
export class DashtestPageModule {}

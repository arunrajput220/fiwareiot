import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartistModule} from 'ng-chartist';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ChartistModule,
    NgxGaugeModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}

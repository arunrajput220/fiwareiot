import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatavisualizePageRoutingModule } from './datavisualize-routing.module';

import { DatavisualizePage } from './datavisualize.page';

import {DashboardPage} from '../dashboard/dashboard.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatavisualizePageRoutingModule,
  ],
  declarations: [DatavisualizePage,]
})
export class DatavisualizePageModule {}

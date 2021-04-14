import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashtestPageRoutingModule } from './dashtest-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashtestPage } from './dashtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashtestPageRoutingModule,
    NgxGaugeModule
  ],
  declarations: [DashtestPage]
})
export class DashtestPageModule {}

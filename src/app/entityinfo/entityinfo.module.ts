import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntityinfoPageRoutingModule } from './entityinfo-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { EntityinfoPage } from './entityinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntityinfoPageRoutingModule,
    NgxGaugeModule
  ],
  declarations: [EntityinfoPage]
})
export class EntityinfoPageModule {}

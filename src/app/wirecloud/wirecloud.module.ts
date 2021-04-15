import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WirecloudPageRoutingModule } from './wirecloud-routing.module';

import { WirecloudPage } from './wirecloud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WirecloudPageRoutingModule
  ],
  declarations: [WirecloudPage]
})
export class WirecloudPageModule {}

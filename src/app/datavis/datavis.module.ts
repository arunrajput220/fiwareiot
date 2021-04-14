import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatavisPageRoutingModule } from './datavis-routing.module';

import { DatavisPage } from './datavis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatavisPageRoutingModule
  ],
  declarations: [DatavisPage]
})
export class DatavisPageModule {}

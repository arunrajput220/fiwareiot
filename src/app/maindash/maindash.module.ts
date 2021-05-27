import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaindashPageRoutingModule } from './maindash-routing.module';

import { MaindashPage } from './maindash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaindashPageRoutingModule
  ],
  declarations: [MaindashPage]
})
export class MaindashPageModule {}

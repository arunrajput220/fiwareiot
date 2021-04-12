import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateentityPageRoutingModule } from './createentity-routing.module';

import { CreateentityPage } from './createentity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateentityPageRoutingModule
  ],
  declarations: [CreateentityPage]
})
export class CreateentityPageModule {}

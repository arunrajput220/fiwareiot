import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CorionentityPageRoutingModule } from './corionentity-routing.module';

import { CorionentityPage } from './corionentity.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CorionentityPageRoutingModule,
    HttpClientModule,
   
  ],
  declarations: [CorionentityPage],
 
})
export class CorionentityPageModule {}

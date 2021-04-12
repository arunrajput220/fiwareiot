import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutdeveloperPageRoutingModule } from './aboutdeveloper-routing.module';

import { AboutdeveloperPage } from './aboutdeveloper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutdeveloperPageRoutingModule
  ],
  declarations: [AboutdeveloperPage]
})
export class AboutdeveloperPageModule {}

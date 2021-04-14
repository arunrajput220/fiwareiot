import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdmPageRoutingModule } from './idm-routing.module';

import { IdmPage } from './idm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdmPageRoutingModule
  ],
  declarations: [IdmPage]
})
export class IdmPageModule {}

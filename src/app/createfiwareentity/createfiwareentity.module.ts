import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatefiwareentityPageRoutingModule } from './createfiwareentity-routing.module';

import { CreatefiwareentityPage } from './createfiwareentity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatefiwareentityPageRoutingModule
  ],
  declarations: [CreatefiwareentityPage]
})
export class CreatefiwareentityPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitymanagerPageRoutingModule } from './entitymanager-routing.module';

import { EntitymanagerPage } from './entitymanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitymanagerPageRoutingModule
  ],
  declarations: [EntitymanagerPage]
})
export class EntitymanagerPageModule {}

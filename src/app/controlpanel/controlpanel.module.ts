import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlpanelPageRoutingModule } from './controlpanel-routing.module';

import { ControlpanelPage } from './controlpanel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlpanelPageRoutingModule
  ],
  declarations: [ControlpanelPage]
})
export class ControlpanelPageModule {}

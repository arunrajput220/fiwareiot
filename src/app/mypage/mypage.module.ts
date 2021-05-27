import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypagePageRoutingModule } from './mypage-routing.module';

import { MypagePage } from './mypage.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule} from '@angular/material/select'
import {MatOptionModule} from '@angular/material/core'
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypagePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,

    MatIconModule
  ],
  declarations: [MypagePage,]
})
export class MypagePageModule {}

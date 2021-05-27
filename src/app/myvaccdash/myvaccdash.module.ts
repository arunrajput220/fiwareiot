import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyvaccdashPageRoutingModule } from './myvaccdash-routing.module';

import { MyvaccdashPage } from './myvaccdash.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatInputModule} from '@angular/material/input';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select'
import {MatOptionModule} from '@angular/material/core'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyvaccdashPageRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgApexchartsModule,
    MatIconModule,
    MatMenuModule,
MatButtonModule,
MatSelectModule,
MatOptionModule

  //  MatPaginator
    
  ],
  declarations: [MyvaccdashPage,]
})
export class MyvaccdashPageModule {}

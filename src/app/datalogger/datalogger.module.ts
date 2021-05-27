import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataloggerPageRoutingModule } from './datalogger-routing.module';

import { DataloggerPage } from './datalogger.page';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'

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
    DataloggerPageRoutingModule,
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

  ],
  declarations: [DataloggerPage]
})
export class DataloggerPageModule {}

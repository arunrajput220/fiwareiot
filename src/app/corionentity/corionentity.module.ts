import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorionentityPageRoutingModule } from './corionentity-routing.module';

import { CorionentityPage } from './corionentity.page';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule} from '@angular/material/select'
import {MatOptionModule} from '@angular/material/core'
import {MatIconModule} from '@angular/material/icon'

import {MatPaginator} from '@angular/material/paginator';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CorionentityPageRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule
   
  ],
  declarations: [CorionentityPage],
 
})
export class CorionentityPageModule {}

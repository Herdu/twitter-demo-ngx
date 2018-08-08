import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [
    MatMenuModule,
    MatToolbarModule
  ]
})
export class UtilsModule { }

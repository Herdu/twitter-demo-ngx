import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

const AngularMaterialModules = [
  MatMenuModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: [ ...[
    CommonModule,
    /* place any other elements here */
  ], ...AngularMaterialModules],
  declarations: [],
  exports: [ ...[
    /* place any other elements here */
  ], ...AngularMaterialModules]
})
export class SharedModule { }

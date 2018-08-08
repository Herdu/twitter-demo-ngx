import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';

const AngularMaterialModules = [
  MatMenuModule,
  MatToolbarModule,
  MatPaginatorModule
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

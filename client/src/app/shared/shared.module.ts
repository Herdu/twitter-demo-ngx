import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatButtonToggleModule, MatInputModule} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { FormErrorComponent } from './ui/form-error/form-error.component';

const AngularMaterialModules = [
  MatMenuModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [ ...[
    CommonModule,
    /* place any other elements here */
  ], ...AngularMaterialModules],
  declarations: [FormErrorComponent],
  exports: [ ...[
    /* place any other elements here */
  ], ...AngularMaterialModules]
})
export class SharedModule { }

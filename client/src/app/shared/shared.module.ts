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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './ui/loader/loader.component';
import { SafePipe } from './pipe/safe.pipe';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PaginationComponent } from './ui/pagination/pagination.component';
import { TwitterPipe } from './pipe/twitter.pipe';

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
  MatButtonToggleModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [ ...[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    /* place any other elements here */
  ], ...AngularMaterialModules],
  declarations: [LoaderComponent, SafePipe, ToolbarComponent, PaginationComponent, TwitterPipe],
  exports: [ ...[
    LoaderComponent,
    SafePipe,
    ToolbarComponent,
    PaginationComponent,
    TwitterPipe
  ], ...AngularMaterialModules]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


const twitterRoutes: Routes = [
  { path: '', component: ListComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(twitterRoutes)
  ],
  declarations: [ListComponent]
})
export class TwitterModule { }

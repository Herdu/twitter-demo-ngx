import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TweetComponent } from './list/tweet/tweet.component';
import {SharedModule} from "../shared/shared.module";
import {TwitterService} from "./service/twitter.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TwitterUserComponent } from './list/twitter-user/twitter-user.component';
import { HomeComponent } from './home/home.component';
import { BrowserComponent } from './home/browser/browser.component';

const twitterRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'twitter', component: ListComponent , pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(twitterRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ListComponent, TweetComponent, TwitterUserComponent, HomeComponent, BrowserComponent],
  providers: [TwitterService]
})
export class TwitterModule { }

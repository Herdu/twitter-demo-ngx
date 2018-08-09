import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TweetComponent } from './list/tweet/tweet.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {TwitterService} from "./service/twitter.service";
import { SearchComponent } from './list/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TwitterUserComponent } from './list/twitter-user/twitter-user.component';

const twitterRoutes: Routes = [
  { path: '', component: ListComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(twitterRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ListComponent, TweetComponent, SearchComponent, TwitterUserComponent],
  providers: [TwitterService]
})
export class TwitterModule { }

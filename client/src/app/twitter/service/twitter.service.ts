import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {ApiService} from "../../shared/service/api.service";
import {TwitterModule} from "../twitter.module";
import {Tweet, TweetUser} from "../interface/Tweet";
import { map } from 'rxjs/operators';

@Injectable()
export class TwitterService {
  tweetUser: TweetUser = null;
  tweets: Array<Tweet> = [];
  lastChannel: string = null;


  constructor(private api: ApiService) {
  }

  public getTweets(params = {channel: 'POTUS'}): Observable< Array<Tweet> > {
    if(params.channel === this.lastChannel) {
      //tweets already downloaded
      return Observable.create(observer => {
        observer.next(this.tweets);
        observer.complete();
      });
    } else {
      //new channel name
      return Observable.create(observer => {
        this.api.get('tweets', params).pipe(map(data=>(data as Array<Tweet>))).subscribe(resp=> {
          this.tweets = resp;
          if(this.tweets.length) {
            this.tweetUser = this.tweets[0].user;
          }
          observer.next(this.tweets);
          observer.complete();
        }, err=> {
          observer.next([]);
          observer.complete();
        });
      });
    }
  }
}

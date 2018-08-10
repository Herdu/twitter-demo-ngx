import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {ApiService} from "../../shared/service/api.service";
import {Tweet, TweetUser} from "../interface/Tweet";
import { map } from 'rxjs/operators';

@Injectable()
export class TwitterService {
  tweetUser: TweetUser = null;
  tweets: Array<Tweet> = [];
  lastChannel: string = null;


  constructor(private api: ApiService) {
  }

  filter(list: Array<Tweet>, params): Array<Tweet> {
    let filteredList = list;

    //filter list by key words
    if(params.filter) {
      const filterWords = params.filter.split(' ').filter(word=>word.length);
      filteredList = filteredList.filter((tweet) => {
        for(let word of filterWords) {
          if(tweet.full_text.toLowerCase().includes(word.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }


    //paginations
    if(params.page && params.pageSize) {
      filteredList = filteredList.slice(params.pageSize*(params.page-1), params.pageSize*(params.page));
    }
    return filteredList;
  }

  public getTweets(params): Observable< Array<Tweet> > {
    if(params.channel === this.lastChannel) {
      //tweets already downloaded
      return Observable.create(observer => {
        observer.next(this.filter(this.tweets, params));
        observer.complete();
      });
    } else {
      this.tweetUser = null;
      return Observable.create(observer => {
        this.api.get('tweets', params).pipe(map(data=>(data as Array<Tweet>))).subscribe(resp=> {
          this.tweets = resp;
          if(this.tweets.length) {
            this.tweetUser = this.tweets[0].user;
          }
          observer.next(this.filter(this.tweets, params));
          observer.complete();
        }, err=> {
          observer.next([]);
          observer.complete();
        });
      });
    }
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {ApiService} from "../../shared/service/api.service";
import {TwitterModule} from "../twitter.module";
import {Tweet} from "../interface/Tweet";

@Injectable()
export class TwitterService {
  constructor(private api: ApiService) {
  }

  public getTweets(params = {q: '@POTUS'}): Observable< Array<Tweet> > {
    return this.api.get('tweets', params);
  }
}

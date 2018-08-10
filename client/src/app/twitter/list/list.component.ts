import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../service/twitter.service";
import {Tweet, TweetUser} from "../interface/Tweet";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  basePath = "/twitter";

  tweets: Array<Tweet> = [];
  form: FormGroup;
  twitterUser: TweetUser;
  pageSizeOptions = [5,10,25,100];
  totalNumberOfTweets: number;
  loaded = true;

  constructor(private twitterService: TwitterService, private route: ActivatedRoute, private router: Router) {

    this.form = new FormGroup({
      channel: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$")])),
      filter: new FormControl(),
      page: new FormControl(1, Validators.compose([Validators.min(1), Validators.required])),
      pageSize: new FormControl(10, Validators.compose([Validators.min(5), Validators.max(100), Validators.required]))
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      this.form.patchValue(params);
      this.loadData();
    });
  }

  pageChanged(event) {
    const oldPageSize = this.form.get('pageSize').value;
    if(event.pageSize !== oldPageSize) {
      this.form.get('pageSize').patchValue(event.pageSize);
      this.form.get('page').patchValue(1);
    } else {
      this.form.get('page').patchValue(event.pageIndex);
    }

    this.loadData();
  }


  loadData() {
    if(this.form.valid) {
      this.loaded = false;
      this.twitterService.getTweets(this.form.value).subscribe(resp=> {
          this.tweets = resp;
          this.twitterUser = this.twitterService.tweetUser;
          this.totalNumberOfTweets = this.twitterService.tweets.length;
        }, err=>{},
        ()=>{
          this.loaded = true;
        });
    }

  }

  search(event) {
    if(this.form.valid) {
      this.router.navigate([this.basePath], {queryParams: this.form.value});
    }
  }
}

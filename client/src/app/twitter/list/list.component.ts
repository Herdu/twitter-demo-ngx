import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../service/twitter.service";
import {Tweet, TweetUser} from "../interface/Tweet";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  length = 1000;
  pageSize = 10;
  tweets: Array<Tweet> = [];
  form: FormGroup;
  twitterUser: TweetUser;

  constructor(private twitterService: TwitterService) {
    this.form = new FormGroup({
      channel: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])),
      filter: new FormControl(),
      page: new FormControl(1, Validators.compose([Validators.min(1), Validators.required]))
    });
  }

  ngOnInit() {
    this.loadData();
  }

  pageChanged(event) {
  }


  loadData() {
    this.twitterService.getTweets().subscribe(resp=> {
      this.tweets = resp;
      this.twitterUser = this.twitterService.tweetUser;
    })
  }

  search(event) {
    if(this.form.valid) {

    }
    this.loadData();
  }
}

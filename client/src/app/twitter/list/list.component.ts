import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../service/twitter.service";
import {Tweet} from "../interface/Tweet";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  length = 1000;
  pageSize = 10;

  tweets: Array<Tweet> = [];

  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    this.loadData();
  }

  pageChanged(event) {
  }


  loadData() {
    this.twitterService.getTweets().subscribe(resp=> {
      this.tweets = ((<any>resp).statuses as Array<Tweet>);
      console.log(resp);
      console.log(this.tweets);
    })
  }
}

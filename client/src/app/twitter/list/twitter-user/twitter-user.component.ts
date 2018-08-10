import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TweetUser} from "../../interface/Tweet";

@Component({
  selector: 'app-twitter-user',
  templateUrl: './twitter-user.component.html',
  styleUrls: ['./twitter-user.component.scss']
})
export class TwitterUserComponent implements OnInit, OnChanges {
  @Input('user') user: TweetUser;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Tweet} from "../../interface/Tweet";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input('tweet') tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }
}

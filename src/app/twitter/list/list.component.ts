import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  length = 1000;
  pageSize = 10;
  pageSizeOptions = [];

  constructor() { }

  ngOnInit() {
  }

  pageChanged(event) {
  }

}

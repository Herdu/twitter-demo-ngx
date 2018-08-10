import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input('pageSize') pageSize: number;
  @Input('length') length: number;
  @Input('options') options: any;
  @Output('page') output = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  page(event) {
    this.output.emit(event);
  }
}

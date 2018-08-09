import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input('form') form: FormGroup;
  @Output('search') search = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.search.emit(true);
  }
}

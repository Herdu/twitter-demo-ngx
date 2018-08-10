import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input('title') title: string = 'Twitter API demo';
  @Input('form') form: FormGroup;
  @Output('search') search = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.search.emit(true);
  }

}

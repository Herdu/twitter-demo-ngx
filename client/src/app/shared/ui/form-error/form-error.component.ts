import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input('control') control: FormControl;

  constructor() { }

  ngOnInit() {
  }

}

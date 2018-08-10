import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      channel: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$")])),
    });
  }

  ngOnInit() {
  }


  submit() {
    if(this.form.valid) {
      this.router.navigate(['/twitter'], {queryParams: this.form.value});
    }
  }
}

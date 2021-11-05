import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
    });
  }

  validatePhone() {
    return of(true).pipe(delay(1000))
  }

  submit() {
    console.log(this.formGroup.value);
  }
}

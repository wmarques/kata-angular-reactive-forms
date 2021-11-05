import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {delay, map} from "rxjs/operators";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";

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
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/),], [this.phoneUniqueValidator]],
    });
  }

  get emailForm() {
    return this.formGroup.get('email');
  }

  submit() {
    console.log(this.formGroup.value);
  }

  phoneUniqueValidator(control) {
    return of(false).pipe(
      delay(500),
      map(isPhoneUnique => {
        return isPhoneUnique ? null : {notUnique: true}
      })
    );
  }
}




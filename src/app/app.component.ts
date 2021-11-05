import {Component} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  validatePhone() {
    return of(true).pipe(delay(1000))
  }
}

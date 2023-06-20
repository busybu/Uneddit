import { Component, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}

export class LoginPageComponent {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.today = formatDate(Date.now(), 'yyyy-MM-dd', this.locale);
  }
  hide = true;
  today;
}

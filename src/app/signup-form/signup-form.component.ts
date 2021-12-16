import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form1 = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        //UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl('', Validators.required)
    })    
  });

  get username() {
    return this.form1.get('account.username');
  }

  login() {
    this.form1.setErrors({
      invalidLogin: true
    });
  }
}

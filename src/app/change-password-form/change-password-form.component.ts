import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
form1: FormGroup;

  constructor(fb : FormBuilder) { 
    this.form1 = fb.group({
      oldpassword: fb.control('', 
      [ Validators.required
        //Validators.pattern('1234')
      ],
       PasswordValidators.validOldPassword
      ),
      newpassword: fb.control('', 
      [ Validators.required
        //Validators.minLength(3)
      ]),
      confirmpassword: fb.control('', 
      [ Validators.required
        //Validators.minLength(3)
      ]) 
    }, {
      validator : PasswordValidators.passwordShouldMatch
    });
  }

  ngOnInit(): void {
  }
  get getOldPassword() { return this.form1.get('oldpassword'); }
  get getNewPassword() { return this.form1.get('newpassword'); }
  get getConfirmPassword() { return this.form1.get('confirmpassword'); }

  ChangePwd()
  {
    console.log('submit');
    // this.form1.setErrors({
    //   invalidLogin: true
    // });
  }
  
}

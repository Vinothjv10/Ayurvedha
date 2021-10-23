import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "phonenumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    });
  }

  submitData()
  {
      console.log(this.registerForm.value);
      this.registerForm.reset();
       

  }
  get name() { return this.registerForm.get('name');}
  get phonenumber() { return this.registerForm.get('phonenumber'); }
  get password() { return this.registerForm.get('password'); }
  get email() { return this.registerForm.get('email'); }

}

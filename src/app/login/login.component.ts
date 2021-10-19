import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public showPassword: boolean = false;
   public showPasswordOnPress: boolean = false;
   
  constructor() { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      
    });
  }
  submitData()
  {
      console.log(this.registerForm.value);
      this.registerForm.reset();

       alert(` Successfully Logged `);
       

  }
    get password() { return this.registerForm.get('password'); }
    get email() { return this.registerForm.get('email'); }
  
}
 

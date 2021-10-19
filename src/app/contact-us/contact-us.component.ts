import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  registerForm: any;


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "phonenumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "message": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      
    });
  }
  submitData()
   {
       console.log(this.registerForm.value);
       this.registerForm.reset();

   }
    
    get name() { return this.registerForm.get('name');}
    get message() { return this.registerForm.get('message'); }
    get email() { return this.registerForm.get('email'); }
    get phonenumber() { return this.registerForm.get('phonenumber'); }
    get help() { return this.registerForm.get('help') }

  
}

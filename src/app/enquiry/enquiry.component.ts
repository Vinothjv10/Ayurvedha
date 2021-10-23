import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor() { }

  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
     
      "sub": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "message": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),

      
    });
  }
  submitData()
  {
      this.registerForm.reset();
  }
  get sub() { return this.registerForm.get('sub'); }
  get message() { return this.registerForm.get('message'); }

}

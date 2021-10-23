import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path:'login',component: LoginComponent },
  { path:'contactus',component: ContactUsComponent },
  { path: 'signup',component: SignupComponent},
  { path: 'enquiry',component: EnquiryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

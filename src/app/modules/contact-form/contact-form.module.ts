import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from 'src/app/components/shared/contact-form/contact-form.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ContactService } from 'src/app/services/contact/contact.service';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     FormsModule,
     ReactiveFormsModule
  ],
  exports:[ ContactFormComponent],
  providers:[ContactService]
})
export class ContactFormModule {


  private apiUrl:string="";
  private cs: ContactService = new ContactService();

  sendData(apiUrl="https://notfound",data:any){
    this.cs.sendData(this.apiUrl,data);
  }

 }

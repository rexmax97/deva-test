import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from 'src/app/components/shared/contact-form/contact-form.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



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
  providers:[]
})
export class ContactFormModule {



  sendData(apiUrl:string, data:any){

  }

 }

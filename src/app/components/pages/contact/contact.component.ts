import { Component, ElementRef, EventEmitter, Input, isDevMode, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //Titulo de contacto
  contactTitle="Contacto";
  constructor() { }

  ngOnInit(): void {

  }

  subcribeValidForm(isValid:any){
   if(isValid){
     console.log("Es valida la forma", true)
   }
  }

  subscribeSendValidForm(data:any){
   console.log("El usuario posteo el formulario", data);
  }

}

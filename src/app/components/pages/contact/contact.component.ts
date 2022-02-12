import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

}

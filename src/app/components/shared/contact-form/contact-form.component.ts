import { Component, EventEmitter, Input, isDevMode, OnInit, Output } from '@angular/core';
import { Form, FormGroupDirective, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn }  from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  @Input() maxLengthMessage: number=50;
  @Output() isValid: EventEmitter<any> = new EventEmitter();
  @Output() sendValidForm: EventEmitter<any> = new EventEmitter();

  contactForm:FormGroup;
  matcher: MyErrorStateMatcher;

  constructor(private fb:FormBuilder,) {
    this.contactForm = this.fb.group({
      name: ['',[Validators.minLength(1),Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.pattern('[+]+[0-9*]{10}'),Validators.required]],
      message: ['', [Validators.maxLength(this.maxLengthMessage), ]]
    });

    this.matcher = new MyErrorStateMatcher();
    this.contactForm.valueChanges.subscribe((values) => {
      if(isDevMode())console.log('Change on value: ', values);
    })
  }


  ngOnInit(): void {

  }

  get name(){
  return this.contactForm.get('name');
  }
  get email(){
  return this.contactForm.get('email');
  }
  get phone(){
  return this.contactForm.get('phone');
  }
  get message(){
  return this.contactForm.get('message');
  }

}


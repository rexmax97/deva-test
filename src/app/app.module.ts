import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Ruteo
import { AppRoutingModule } from './app-routing.module';

//Vistas
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
//Componentes compartidos
import { HeaderComponent } from './components/shared/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatListModule} from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
//Propios
import { ContactFormModule } from './modules/contact-form/contact-form.module';


//Utilerias
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Internacionalizacion
import { getSpanishPaginatorIntl } from './intl/spanish-paginator-intl';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ContactFormModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }

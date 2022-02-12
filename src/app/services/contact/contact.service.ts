import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from 'src/app/interfaces/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http!: HttpClient;
  constructor() { }


  sendData(apiUrl='https://notfound', data:any){

     return this.http.post(apiUrl, data)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      )
  }
}

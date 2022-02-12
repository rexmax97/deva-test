import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../../interfaces/movie';
/* const OPTIONS = {
  reportProgress: true,
  headers: new HttpHeaders({  'Access-Control-Allow-Origin':'*',
  'Content-Type': 'application/json' }),
}; */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http:HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json').pipe(tap(data=>{
      return data;
     }),
     catchError((err: HttpErrorResponse) => {
       return throwError(err);
     }))
  }
}



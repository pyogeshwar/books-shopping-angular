import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http: HttpClient;
  private BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getBooks(value: string): Observable<Book> {
    return this.http
      .get<Book>(this.BASE_URL + value)
      .pipe(
        tap((data) => console.log('data')),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }
}


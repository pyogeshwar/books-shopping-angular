import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<Book>(this.BASE_URL + value);
  }
}

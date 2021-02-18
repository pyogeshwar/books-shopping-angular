import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksFacade } from './store/facades/books.facades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular10sample';
  cartItemsCount$: Observable<number>;

  constructor(
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.cartItemsCount$ = this.booksFacade.cartItemsCount$;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';
import { Observable } from 'rxjs';
import { BooksFacade } from 'src/app/store/facades/books.facades';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'mycart.component.html',
})
export class MyCartComponent implements OnInit {
  cartBooks$: Observable<BookDetails[]>;
  isDelete: boolean;

  constructor(
    public dataService: DataService,
    private booksFacade: BooksFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this.cartBooks$ = this.booksFacade.cartBooks$;
  }

  proceedToBuy(books: BookDetails[]): void {
    this.booksFacade.finalItemList(books);
    this.router.navigate(['billing']);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromBook from 'src/app/store/reducers/reducer';
import { BooksFacade } from 'src/app/store/facades/books.facades';

@Component({
  templateUrl: 'book.component.html',
})
export class BookComponent implements OnInit {
  books$: Observable<BookDetails[]>;
  selectedBookId;
  selectedBook: BookDetails;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,

    private store: Store<fromBook.State>,
    private booksFacade: BooksFacade
  ) {}
  ngOnInit(): void {
    this.viewBook();
  }

  viewBook(): void {
    this.books$ = this.booksFacade.books$;
    this.selectedBookId = this.route.snapshot.paramMap.get('id');
    this.books$.forEach((books) => {
      this.selectedBook = books.find((book: BookDetails) => {
        return book.id === this.selectedBookId;
      });
    });
    // this.books$.forEach((books) => {
    //   books.forEach((book) => {
    //     if (book.id === this.selectedBookId) {
    //       this.selectedBook = Object.assign({}, book);
    //     }
    //   });
    // });
  }
  addBookToCart(book: BookDetails): void {
    this.booksFacade.addToCart(book);
  }
  buyNow(book: BookDetails): void {
    this.booksFacade.finalItemList([book]);
    this.router.navigate(['billing']);
  }
}

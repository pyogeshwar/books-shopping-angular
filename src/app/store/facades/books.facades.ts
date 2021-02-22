import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromBook from '../reducers/reducer';

import * as BookActions from '../actions/actions';

import * as booksSelector from '../selectors/books.selectors';
import { BookDetails } from '../../book.model';
import { User } from 'src/app/user';

@Injectable()
export class BooksFacade {
  books$ = this.store.pipe(select(fromBook.getBooks)) as Observable<
    BookDetails[]
  >;
  cartBooks$ = this.store.pipe(select(fromBook.getCartItems)) as Observable<
    BookDetails[]
  >;
  orderedBooks$ = this.store.pipe(
    select(fromBook.getOrderedItems)
  ) as Observable<BookDetails[]>;

  cartItemsCount$ = this.store.pipe(
    select(fromBook.getCartItemsCount)
  ) as Observable<number>;

  finalItemList$ = this.store.pipe(
    select(fromBook.getfinalItemList)
  ) as Observable<BookDetails[]>;

  userInfo$ = this.store.pipe(select(fromBook.getUserInfo)) as Observable<User>;

  constructor(private store: Store<fromBook.BooksState>) {}
  loadBooks(searchValue: string): void {
    this.store.dispatch(BookActions.Load({ payload: searchValue }));
  }
  addToCart(book: BookDetails): void {
    this.store.dispatch(BookActions.AddToCart({ payload: book }));
  }
  orderedItems(books: BookDetails[]): void {
    this.store.dispatch(BookActions.orderedItems({ payload: books }));
  }
  deleteFromCart(payload: BookDetails): void {
    this.store.dispatch(BookActions.DeleteCartItem({ payload }));
  }

  finalItemList(books: BookDetails[]): void {
    this.store.dispatch(BookActions.AddToFinalList({ payload: books }));
  }

  userInfo(user: User): void {
    this.store.dispatch(BookActions.UserInfo({ payload: user }));
  }
}

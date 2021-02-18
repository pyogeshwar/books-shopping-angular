import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as Booksreducer from '../reducers/reducer';

export interface BooksState {
  books: Booksreducer.BooksState;
}

export const selectFeature = createFeatureSelector<Booksreducer.BooksState>(
  'books'
);

export const getBooks = createSelector(selectFeature, Booksreducer.getBooks);
export const getCartItems = createSelector(
  selectFeature,
  Booksreducer.getCartItems
);
export const getOrderedItems = createSelector(
  selectFeature,
  Booksreducer.getOrderedItems
);
export const getCartItemsCount = createSelector(
  selectFeature,
  Booksreducer.getCartItemsCount
);
export const getUserInfo = createSelector(
  selectFeature,
  Booksreducer.getUserInfo
);

export const booksSelector = {
  getBooks,
  getCartItems,
  getOrderedItems,
  getCartItemsCount,
  getUserInfo,
};

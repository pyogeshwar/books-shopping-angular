import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { Book, BookDetails } from '../../book.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as booksAction from '../actions/actions';

export interface BooksState extends EntityState<Book> {
  cartItems: [];
  orders: [];
  userInfo: [];
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({});

export const initialState: BooksState = bookAdapter.getInitialState({
  list: [],
  cartItems: [],
  orderedList: [],
  orders: [],
  userInfo: [],
});

export interface BooksState {
  list: BookDetails[];
  cartItems: [];
  orderedList: BookDetails[];
  orders: [];
  userInfo: [];
}

export const booksAdapter = createEntityAdapter<BooksState>();

export interface State extends EntityState<BooksState> {}

const getBookFeatureState = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.list
);

export const getCartItemsCount = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.cartItems.length
);

export const getfinalItemList = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.orderedList
);

export const getCartItems = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.cartItems
);

export const getOrderedItems = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.orders
);

export const getUserInfo = createSelector(
  getBookFeatureState,
  (state: BooksState) => state.userInfo
);

const reducer = createReducer(
  initialState,
  on(booksAction.LoadSuccess, (state, { payload }) => {
    return Object.assign({
      ...state,
      list: payload,
    });
  }),

  on(booksAction.LoadFail, (state) => {
    return Object.assign({
      ...state,
      list: {},
    });
  }),

  on(booksAction.AddToCart, (state, payload) => {
    return Object.assign({
      ...state,
      cartItems: [...state.cartItems, payload.payload],
    });
  }),

  on(booksAction.DeleteCartItem, (state, { payload }) => {
    return Object.assign({
      ...state,
      cartItems: state.cartItems.filter(
        (item: BookDetails) => payload.id !== item.id
      ),
    });
  }),

  on(booksAction.orderedItems, (state, { payload }) => {
    // const newData = payload.map((item) => Object.assign({}, item));
    return Object.assign({
      ...state,
      orders: payload,
    });
  }),

  on(booksAction.AddToFinalList, (state, payload) => {
    return Object.assign({
      ...state,
      orderedList: payload.payload,
    });
  }),
  on(booksAction.UserInfo, (state, payload) => {
    return Object.assign({
      ...state,
      userInfo: [...state.userInfo, payload.payload],
    });
  })
);

export function booksReducer(state: BooksState, action: Action): State {
  return reducer(state, action);
}

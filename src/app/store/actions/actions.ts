import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/user';
import { Book, BookDetails } from '../../book.model';

export const Load = createAction(
  '[Book] Load Book',
  props<{ payload: string }>()
);
export const LoadSuccess = createAction(
  '[Book] Load Book Success',
  props<{ payload: Book }>()
);
export const LoadFail = createAction(
  '[Book] Load Book Failure',
  props<{ payload: string }>()
);

export const AddToCart = createAction(
  '[Cart] Add To Cart',
  props<{ payload: BookDetails }>()
);
export const AddToBuyList = createAction(
  '[Purchase List] Add To buyList',
  props<{ payload: BookDetails[] }>()
);

export const DeleteCartItem = createAction(
  '[Cart] Delete Book From Cart',
  props<{ payload: BookDetails }>()
);
export const orderedItems = createAction(
  '[Collections] Add To orders',
  props<{ payload: BookDetails[]; }>()
);
export const userInfo = createAction(
  '[Collections] user Information',
  props<{ payload: User; }>()
);

import * as bookActions from '../actions/actions';
import * as booksReducer from '../../store/reducers/reducer';
import { Book } from 'src/app/book.model';

describe('BooksReducer', () => {
  describe('[Book] Load Book', () => {
    it('should return the  books', () => {
      const searchTerm: any = 'Bharat';
      const { initialState } = booksReducer;
      const action = bookActions.Load(searchTerm);
      const state = booksReducer.booksReducer(initialState, action);
      expect(state).toBe(initialState);
      expect(state.list).toEqual([]);
    });
    // it('should return the  books', () => {
    //   const { initialState } = booksReducer;
    //   const action = bookActions.AddToCart({ BooDetails: {} });
    //   const state = booksReducer.booksReducer(initialState, action);
    //   expect(state).toBe(initialState);
    //   expect(state.cartItems).toEqual([]);
    // });
  });
});

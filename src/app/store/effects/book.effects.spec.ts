import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { DataService } from '../../services/data.service';
import { BooksEffects } from './book.effects';
import * as bookActions from '../actions/actions';

describe('BooksEffects', () => {
  let bookEffects;
  let actions: ReplaySubject<any>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          DataService,
          provideMockStore({}),
          BooksEffects,
          provideMockActions(() => actions),
        ],
      }).compileComponents();
      bookEffects = TestBed.inject(BooksEffects);
    })
  );

  it('should call and get all books', inject(
    [DataService],
    (service: DataService) => {
      actions = new ReplaySubject(1);
      const spy = spyOn(service, 'getBooks');
      const loadAction = {
        type: bookActions.Load,
        payload: {
          payload: 'books',
        },
      };
      actions.next(loadAction);

      bookEffects.loadBooks$.subscribe(
        (resp) => {
          expect(bookActions.LoadSuccess).toHaveBeenCalledWith(resp);
          expect(spy).toHaveBeenCalledWith('books');
        },
        (err) => {
          expect(bookActions.LoadFail).toHaveBeenCalledWith(err);
        }
      );
    }
  ));
});

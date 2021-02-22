import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as bookActions from '../actions/actions';

@Injectable()
export class BooksEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.Load),
      mergeMap((action$) =>
        this.dataService.getBooks(action$.payload).pipe(
          map((books) => ({
            type: '[Book] Load Book Success',
            payload: books.items,
          })),
          catchError((err) =>
            of({ type: '[Book] Load Book Failure', payload: err })
          )
        )
      )
    )
  );
}

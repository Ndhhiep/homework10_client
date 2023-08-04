import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as DataActions from './data.actions';
import { ApiService } from '../services/api.service';
import { Article } from '../models/article.model';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.get),
      exhaustMap(() =>
        this.apiService.getData().pipe(
          map((articles) => {
            return DataActions.getSuccess({ articlelist: articles });
          }),
          catchError((error) => of(DataActions.getFailure({ error })))
        )
      )
    )
  );
}

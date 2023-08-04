import { createAction, props } from '@ngrx/store';
import { Article } from '../models/article.model';
import { Data } from '@angular/router';

export const get = createAction('[Article] Get');
export const getSuccess = createAction(
  '[Article] Get Success',
  props<{ articlelist: Article[] }>()
);
export const getFailure = createAction(
  '[Article] Get Failure',
  props<{ error: any }>()
);

// export const get = createAction('[data] get data');
// export const getSuccess = createAction(
//     '[data] get data success',
//      props<{dataList: Data[]}>()
//     );
// export const getFailure = createAction(
//     '[data] get data failure',
//     props<{error: any}>()
// );


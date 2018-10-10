import { call, put } from 'redux-saga/effects';
import ApiCategories from '../api/categories';
import { getCategories } from '../mock/categories';

export function* _getCategories() {
  const categories = yield call(ApiCategories.getCategories);
  yield put({ type: 'GET_CATEGORIES_SUCCESS', categories: categories });
}
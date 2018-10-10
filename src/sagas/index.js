import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { _getCategories } from './categories'

export function* sagas() {
    yield [
      fork(takeLatest, 'GET_CATEGORIES', _getCategories),
    ]
  }
  
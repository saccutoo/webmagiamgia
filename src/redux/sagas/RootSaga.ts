import { all, fork } from 'redux-saga/effects';
import TestSaga from './TestSaga';

export function * rootSaga() {
    yield all([fork(TestSaga)]);
  }

export default rootSaga
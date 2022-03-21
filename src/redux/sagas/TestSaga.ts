import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { URL_PATHS } from '../../config/Api.Url'
import TestService from '../../service/Test.Service'
import { GET_TEST, UPDATE_ALL_TEST } from '../Types'
import { post,fetch,deletes } from "../../helper/axios/Api.Helper";
import { IListTest, ITest } from "../../interface/Test";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getTest() {
   try {
      const result : IListTest =  yield call(TestService().getInstance().getTest());
      yield put({type: UPDATE_ALL_TEST, payload: result.datas});
   } catch (e) {
      yield put({type: UPDATE_ALL_TEST, payload: []});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function * TestSaga() {
  yield all([takeLatest(UPDATE_ALL_TEST, getTest)]);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function * testSaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default TestSaga;
import { FETCH_USER_REQUEST } from '../constants';
import axios from 'axios'
import {takeEvery, call, put} from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* fetchUserRequest() {
  try {
    yield call(delay, 2000)
    const user = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
    yield put({type: "FETCH_USER_SUCCESSED", user: user})
  } catch (e) {
    yield put({type: "FETCH_USER_FAILUER", error: e.message})
    console.dir(e.message);
  }
}

export function* watchFetchUser() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserRequest)
}

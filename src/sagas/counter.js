import { INCREMENT_ASYNC } from '../constants';
import {takeEvery, put, call} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {increment} from '../actions/counter';

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
  yield call(delay, 2000)
  yield put(increment())
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
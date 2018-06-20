import {all} from 'redux-saga/effects';

import { watchIncrementAsync } from './counter';
import {watchFetchUser} from './user';
import * as userSage from './user';

console.log(userSage)

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFetchUser()
  ])
}
import { all, call, delay, fork, put } from 'redux-saga/effects';

function* auth() {
  yield delay(1000);

  console.info('auth is ok!');

  return true;
}

function* loadUsers(): Generator {
  const request = yield call(fetch, 'https://swapi.dev/api/people/1');
  const data = yield call([request, request.json]);

  console.log('user =>', data);

  yield put({ type: 'USER_LOADED', payload: data });
}

export default function* loadBasicData() {
  yield all([fork(auth), fork(loadUsers)]);
}

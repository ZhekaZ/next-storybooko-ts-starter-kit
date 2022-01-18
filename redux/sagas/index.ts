import { actionChannel, all, call, spawn, take } from 'redux-saga/effects';

import blogLoaderSaga from './blogLoader';
import loadBasicData from './initialSagas';

export function* fetchPlanets(signal): Generator {
  // worker
  console.log('LOAD_SOME_DATA starts');

  const resp = yield call(fetch, 'https://swapi.dev/api/planets', { signal });
  const data = yield call([resp, resp.json]);

  console.log('LOAD_SOME_DATA completed', data);
}

export function* loadOnAction(): Generator {
  // call next after previous end
  const channel = yield actionChannel('LOAD_SOME_DATA');

  while (true) {
    yield take(channel);

    yield call(fetchPlanets);

    console.log('LOG');
  }
}

export default function* rootSaga() {
  const sagas = [loadBasicData, blogLoaderSaga, loadOnAction];

  const retrySagas = sagas.map((saga) => {
    return spawn(function* () {
      // good way
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}

// import { LOCATION_CHANGE } from 'connected-react-router';
import { apply, call, fork, put, take, takeEvery } from 'redux-saga/effects';

function* loadBlogData(): Generator {
  const request = yield call(fetch, 'https://swapi.dev/api/planets');
  const data = yield apply(request, request.json);

  console.log('blog data =>', data.results);
  yield put({ type: 'BLOG_LOADED', payload: data.results });
}

export default function* blogLoaderSaga() {
  // while (true) {
  // const action = yield take(LOCATION_CHANGE);

  // if (action.payload.location.pathname.endsWith('blog')) {
  //   yield fork(loadBlogData);
  // }
  // }
  yield takeEvery('LOAD_BLOG_DATA', loadBlogData);
}

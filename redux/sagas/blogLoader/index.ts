// import { LOCATION_CHANGE } from 'connected-react-router';
import { apply, call, put, takeEvery } from 'typed-redux-saga';

function* loadBlogData(): Generator {
  const request: any = yield call(fetch, 'https://swapi.dev/api/planets');
  const data: any = yield apply(request, request.json, []);

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

import withReduxSaga from 'next-redux-saga';
import { AppProps } from 'next/app';
import { FC } from 'react';

import wrapper from '../store/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(withReduxSaga(WrappedApp));

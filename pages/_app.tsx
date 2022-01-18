import wrapper from '@redux/store';
import withReduxSaga from 'next-redux-saga';
import { AppProps } from 'next/app';

import { FC } from 'react';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(withReduxSaga(WrappedApp));

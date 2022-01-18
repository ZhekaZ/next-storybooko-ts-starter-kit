import Router from 'next/router';
import React from 'react';
import { connect } from 'react-redux';

function BlogPage(props) {
  console.log(props);

  return (
    <>
      <h1>Blog page</h1>
      <button onClick={() => Router.push('/')}>go back</button>
    </>
  );
}

BlogPage.getInitialProps = async ({ store }) => {
  store.dispatch({ type: 'SOME_ASYNC_ACTION_REQUEST' });
  return { staticData: 'Hello world!' };
};

export default connect((state) => state)(BlogPage);

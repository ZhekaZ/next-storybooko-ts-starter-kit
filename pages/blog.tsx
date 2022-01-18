import Router from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import { blogSelector } from '../store/selectors';

function BlogPage() {
  const blogData = useSelector(blogSelector);

  console.log(blogData);

  return (
    <>
      <h1>Blog page</h1>
      <button onClick={() => Router.push('/')}>go back</button>
    </>
  );
}

// BlogPage.getInitialProps = async () => {
//   store.dispatch({ type: 'SOME_ASYNC_ACTION_REQUEST' });
//   return { staticData: 'Hello world!' };
// };

export default BlogPage;

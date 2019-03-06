import React from 'react';
import { Link } from 'gatsby';

import MainContainer from '../components/Layout/MainContainer';
import Hero from '../components/Hero';
import Layout from '../layouts/Layout';

const NotFoundPage: React.SFC = (): JSX.Element => (
  <Layout>
    <div>
      <Hero>
        <h1>Yes! You&apos;ve found it!</h1>
        <p>The one page not working properly, and you&apos;ve found it!</p>
      </Hero>
      <MainContainer style={{ textAlign: 'center' }}>
        <h2>What did I win you ask?</h2>
        <p>
          Nothing...you&apos;ve won nothing{' '}
          <span role="img" aria-label="sad face">
            😞
          </span>
        </p>
        <p>
          <Link to="/">Go back to homepage</Link> and start again.
        </p>
      </MainContainer>
    </div>
  </Layout>
);

export default NotFoundPage;

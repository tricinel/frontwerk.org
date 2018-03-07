import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import styled from 'styled-components';

import Hero from '../components/Hero';
import MainContainer from '../components/Layout/MainContainer';
import Grid from '../components/Layout/Grid';
import { InlineList } from '../components/Layout/List';
import Button from '../components/Button';
import CodeView from '../components/CodeView';
import Footer from '../components/Footer';

import jestExample from '../content/examples/jest';
import eslintExample from '../content/examples/eslint';
import prettierExample from '../content/examples/prettier';
import stylelintExample from '../content/examples/stylelint';
import babelExample from '../content/examples/babel';
import webpackExample from '../content/examples/webpack';

import { breakpoints } from '../layouts/theme';

import logo from '../assets/logo-on-dark.png';

const Box = styled.div`
  padding: 10px 0;

  @media screen and (min-width: ${breakpoints.sm}px) {
    padding: 20px 0;
  }
`;

const CodeBox = Box.extend`
  @media screen and (min-width: ${breakpoints.sm}px) {
    margin-top: 20px;
  }
`;

const gridRowTemplate = '1fr minmax(440px, 1fr)';

const ExampleGrid = ({ children }) => (
  <Grid template="1fr" templatemd={gridRowTemplate} gap={30}>
    {children}
  </Grid>
);

const IndexPage = () => (
  <div>
    <Hero large>
      <img src={logo} alt="Frontwerk" />
      <h1>Frontwerk</h1>
      <h2>A CLI toolbox for common scripts for frontend projects</h2>
      <InlineList>
        <li style={{ textAlign: 'center', marginBottom: 10 }}>
          <Button
            type="primary"
            onClick={() => navigateTo('/docs/quick-start')}
          >
            Get started
          </Button>
        </li>
        <li style={{ textAlign: 'center', marginBottom: 10 }}>
          <Button type="secondary" onClick={() => navigateTo('/docs/')}>
            Documentation
          </Button>
        </li>
      </InlineList>
    </Hero>
    <MainContainer size={1170}>
      <Grid template="1fr" templatemd="1fr 1fr 1fr" gap={30}>
        <Box>
          <h3>Modern Frontend Toolset</h3>
          <p>
            Frontwerk is a zero configuration toolset aimed at helping frontend
            developers. It abstracts a set of underlying tools and their
            configurations in order to improve both the developer experience and
            the time it takes to get started and maintain a Javascript project.
          </p>
        </Box>
        <Box>
          <h3>Extensible</h3>
          <p>
            Frontwerk has been designed from the ground up to be easy to extend
            its tools configurations or even completely replace them without
            having to give up the benefits of the toolset itself.
          </p>
        </Box>
        <Box>
          <h3>Learn Once, Use Everywhere</h3>
          <p>
            Frontwerk&apos;s goal is to help developers painlessly achieve
            consistency across projects and across teams. You will be able to
            start writing actual code in no time at all and not worry about what
            tool to use to test it, what lint rules to follow and what
            configuration your build should use.
          </p>
        </Box>
      </Grid>
    </MainContainer>

    <Hero>
      <h4>What&apos;s included</h4>
    </Hero>

    <MainContainer size={1170}>
      <Grid template="1fr" gap={10}>
        <ExampleGrid>
          <Box>
            <h5>Test Javascript with Jest</h5>
            <p>
              Frontwerk uses <strong>Jest</strong> under the hood as the testing
              framework. You get all the power of Jest without any of the
              headache of setting it up and configuring it.
            </p>
            <p>
              <Link to="/docs/test">Testing with Jest</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={jestExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
        <ExampleGrid>
          <Box>
            <h5>Lint Javascript with ESLint</h5>
            <p>
              Frontwerk will enfore code styles and standards via{' '}
              <strong>ESLint</strong>, coupled with widely used and accepted
              presets, such as AirBnB&apos;s styleguide, Prettier and
              accessibility.
            </p>
            <p>
              <Link to="/docs/lint">Linting with ESLint</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={eslintExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
        <ExampleGrid>
          <Box>
            <h5>Format your code with Prettier</h5>
            <p>
              In addition to code linting, Frontwerk prefers{' '}
              <strong>Prettier</strong> as an opinionated code formatter.
              Because we write code for humans and not for machines, Prettier
              takes care of how your code looks.
            </p>
            <p>
              <Link to="/docs/format">Formatting with Prettier</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={prettierExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
        <ExampleGrid>
          <Box>
            <h5>Lint your CSS with Stylelint</h5>
            <p>
              No matter if you write CSS or if you use a preprocessor like SCSS
              to write your CSS, Frontwerk has you covered.{' '}
              <strong>Stylelint</strong> will check your CSS against the
              standards, report and help you fix any errors.
            </p>
            <p>
              <Link to="/docs/stylelint">Linting CSS with Stylelint</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={stylelintExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
        <ExampleGrid>
          <Box>
            <h5>Compile Javascript with Babel</h5>
            <p>
              In today&apos;s modern browsers, we should aim to write modern
              Javascript. That means ES6, but it also means some browser might
              not support all features. This is where <strong>BabelJS</strong>{' '}
              comes in. Frontwerk will use BabelJS to compile your Javascript
              code to run in all browsers.
            </p>
            <p>
              <Link to="/docs/babel">Compiling JS with BabelJS</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={babelExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
        <ExampleGrid>
          <Box>
            <h5>Bundle your app with Webpack or Rollup</h5>
            <p>
              Whether you&apos;re writing a single page application or an
              utility library, Frontwerk has you covered. It prefers{' '}
              <strong>Webpack</strong> for SPAs and <strong>RollupJS</strong>{' '}
              for libraries and provides default configurations for both these
              bundlers.
            </p>
            <p>
              <Link to="/docs/build">Bundling with Webpack or RollupJS</Link>
            </p>
          </Box>
          <CodeBox>
            <CodeView code={webpackExample} language="bash" />
          </CodeBox>
        </ExampleGrid>
      </Grid>
    </MainContainer>

    <Hero>
      <h6>It only takes 5 minutes to start.</h6>
      <Button type="primary" onClick={() => navigateTo('/docs/quick-start')}>
        Get started
      </Button>
    </Hero>

    <MainContainer>
      <Footer>
        <p>
          Made with ❤ by <a href="http://bogdanlazar.com">@tricinel</a>.<br/>
          Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.
        </p>
      </Footer>
    </MainContainer>
  </div>
);

export default IndexPage;

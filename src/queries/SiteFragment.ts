import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  fragment SiteFragment on Site {
    siteMetadata {
      title
      description
      appVersion
      githubUrl
    }
  }
`;

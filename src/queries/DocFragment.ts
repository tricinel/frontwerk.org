import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  fragment DocFragment on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      title
      sectionTitle
    }
  }
`;

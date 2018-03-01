// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  fragment DocFragment on MarkdownRemark {
    id
    frontmatter {
      path
      title
      sectionTitle
    }
  }
`;

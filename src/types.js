export type MarkdownNode = {
  fields: {
    slug: string
  },
  frontmatter: {
    title: string
  },
  html: string
};

export type Edge = {
  node: MarkdownNode
};

export type Metadata = {
  site: {
    title: string,
    siteUrl: string,
    description: string,
    appVersion: string,
    githubUrl: string
  },
  allDocTitles: {
    edges: Node
  }
};

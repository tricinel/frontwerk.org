export interface IMarkdownNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    sectionTitle: string;
    date: string;
  };
  html: string;
}

export interface IEdge {
  node: IMarkdownNode;
}

export interface IMetadata {
  title: string;
  siteUrl: string;
  description: string;
  appVersion: string;
  githubUrl: string;
}

export enum IButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

declare module 'gatsby-link' {
  import type { LocationDescriptor } from 'history';

  declare type Match = {
    params: { [key: string]: ?string },
    isExact: boolean,
    path: string,
    url: string
  };

  declare export type LocationShape = {
    pathname?: string,
    search?: string,
    hash?: string,
    state?: any
  };

  declare type GatsbyLinkProps = {
    to: string | LocationShape,
    activeClassName?: string,
    className?: string,
    activeStyle?: Object,
    style?: Object,
    isActive?: (match: Match, location: Location) => boolean,
    children?: React$Node,
    exact?: boolean,
    strict?: boolean,
    onClick?: (event: any) => void
  };

  declare export default class GatsbyLink extends React$Component<
    GatsbyLinkProps
  > {}

  declare export function navigateTo(to: LocationDescriptor): void;

  declare export function withPrefix(path: string): string;
}

const theme = {
  primary: '#10bc9b',
  secondary: '#34485e',
  accent: '#f7f9f9',
  accentDarker: '#e6f2f2',
  body: '#fffdf7',
  bodyColor: '#003049',
  banner: '#34485e',
  bannerColor: '#f2ffff',
  linkColor: '#10bc9b',
  linkHoverColor: '#34485e',
  sidebarBg: '#fff',
  gray: '#605c4e',
  lightGray: '#d0dbdb',
  transition: 'all .3s ease'
};

const buttons = {
  default: {
    bg: theme.secondary,
    border: theme.secondary,
    color: '#f2ffff'
  },
  primary: {
    bg: theme.primary,
    border: 'transparent',
    color: theme.accent
  },
  secondary: {
    bg: theme.secondary,
    border: '#00fddc',
    color: '#00fddc'
  }
};

const breakpoints = {
  xs: 641,
  sm: 769,
  md: 993,
  lg: 1500
};

const typography = {
  baseFontSize: '18px',
  baseLineHeight: 1.625,
  googleFonts: [
    {
      name: 'Signika Negative',
      styles: ['700']
    },
    {
      name: 'Lato',
      styles: ['400', '700']
    },
    {
      name: 'Source Code Pro',
      styles: ['400']
    }
  ],
  headerFontFamily: [
    'Signika Negative',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyFontFamily: [
    'Lato',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyColor: theme.bodyColor,
  headerWeight: 600,
  bodyWeight: 'normal',
  boldWeight: 600,
  blockMarginBottom: 1 / 2,
  overrideStyles: ({ rhythm }) => ({
    p: {
      marginBottom: 10,
      marginTop: 10
    },
    a: {
      color: theme.linkColor,
      textDecoration: 'none',
      transition: theme.transition
    },
    'a:hover,a:active': {
      color: theme.linkHoverColor
    },
    h1: {
      color: theme.primary,
      fontSize: '2.4rem',
      marginBottom: rhythm(1),
      marginTop: rhythm(1)
    },
    'h2,h3,h4,h5,h6': {
      borderBottom: `1px solid ${theme.lightGray}`,
      color: theme.secondary,
      fontSize: '1.4rem',
      marginBottom: rhythm(1),
      marginTop: rhythm(1),
      paddingBottom: rhythm(1 / 2)
    },
    blockquote: {
      borderLeft: `5px solid ${theme.primary}`,
      borderRadius: '4px',
      backgroundColor: theme.accentDarker,
      color: theme.gray,
      marginLeft: 0,
      marginBottom: '20px',
      marginRight: 0,
      marginTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '5px'
    },
    'p>code,li>code': {
      backgroundColor: theme.accent,
      color: theme.secondary,
      fontSize: '1rem',
      padding: '2px 4px'
    },
    code: {
      fontFamily: `'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`
    }
  })
};

export { typography, buttons, breakpoints };

export default theme;

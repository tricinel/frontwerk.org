const theme = {
  primary: '#e84855',
  accent: '#f0f3bd',
  body: '#fafafa',
  bodyColor: '#003049',
  banner: '#003049',
  bannerColor: '#f2ffff',
  linkColor: '#e84855',
  linkHoverColor: '#003049',
  sidebarBg: '#f5fbef',
  gray: '#605c4e',
  lightGray: '#d0dbdb',
  transition: 'all .3s ease'
};

const buttons = {
  default: {
    bg: '#003049',
    border: '#003049',
    color: '#f2ffff'
  },
  primary: {
    bg: '#e84855',
    border: 'transparent',
    color: '#f0f3bd'
  },
  secondary: {
    bg: '#003049',
    border: '#f0f3bd',
    color: '#f0f3bd'
  }
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
      fontSize: '2.4rem',
      marginBottom: rhythm(1),
      marginTop: rhythm(1)
    },
    'h2,h3,h4,h5,h6': {
      borderBottom: `1px solid ${theme.lightGray}`,
      fontSize: '1.4rem',
      marginBottom: rhythm(1),
      marginTop: rhythm(3),
      paddingBottom: rhythm(1 / 2)
    },
    blockquote: {
      borderLeft: `5px solid ${theme.primary}`,
      borderRadius: '4px',
      backgroundColor: '#e6f2f2',
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
      backgroundColor: '#fcfff7',
      color: '#805330',
      fontSize: '1rem',
      padding: '2px 4px'
    },
    code: {
      fontFamily: `'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`
    }
  })
};

export { typography, buttons };

export default theme;

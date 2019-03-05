import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';

const prism = (code: string, language: string = 'bash'): string =>
  highlight(code, languages[language]);

export default prism;

// https://stackoverflow.com/questions/72240576/next-js-wrong-path-to-fonts-on-export

const replace = require('replace-in-file');

const optionsHTML = {
  files: ['./out/*.html'], // , './out/_next/static/css/*.css'
  from: /\/_next\/static\//g, // prettier-ignore
  to: ['./_next/static/'],
};
const optionsCSS = {
  files: ['./out/_next/static/css/*.css'],
  from: /\/_next\/static\//g, // prettier-ignore
  to: ['../../../_next/static/'],
};

(async function () {
  try {
    const resultsHTML = await replace(optionsHTML);
    console.log('HTML Replacement results:', resultsHTML);
    const resultsCSS = await replace(optionsCSS);
    console.log('CSS Replacement results:', resultsCSS);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();

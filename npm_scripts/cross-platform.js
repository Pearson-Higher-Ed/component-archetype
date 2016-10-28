const fs = require('fs-extra');

fs.copySync('../node_modules/@pearson-components/npm-scripts/npm_scripts/*.js',
  '../npm_scripts', (err) => {
  if (err) return console.error(err)
});

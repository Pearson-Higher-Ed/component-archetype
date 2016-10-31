const fs = require('fs-extra');

try {
  fs.copySync('/Users/uhomomi/Public/real-component-archetype/component-archetype/node_modules/@pearson-components/npm-scripts/npm_scripts',
  './npm_scripts')
  console.log('success');
} catch (err) {
  console.error(err)
}

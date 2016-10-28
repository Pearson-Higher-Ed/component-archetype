const fs = require('fs-extra');

try {
  fs.copySync(__dirname, './npm_scripts')
  console.log('success');
} catch (err) {
  console.error(err)
}

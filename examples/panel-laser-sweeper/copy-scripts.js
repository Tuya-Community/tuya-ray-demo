const shell = require('shelljs');

if (!shell.test('-d', 'webview')) {
  shell.mkdir('-p', 'webview');
  console.log('【copy-scripts】: Directory created successfully.');
} else {
  console.log('【copy-scripts】: Directory already exists.');
}
shell.cp('-R', 'node_modules/@ray-js/robot-map-component/lib/webview/index.html', 'webview');

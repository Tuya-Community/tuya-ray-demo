const shell = require('shelljs');
console.log('copy script');
shell.cp('-R', 'node_modules/@ray-js/robot-map-component/lib/webview', 'src');
shell.cp('-R', 'node_modules/@ray-js/robot-map-component/lib/webview', 'dist/tuya');

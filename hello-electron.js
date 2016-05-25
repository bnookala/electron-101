const electron = require('electron');
let app = electron.app;

app.on('ready', () => {
  console.log('hello from electron!');
});

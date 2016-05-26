const electron = require('electron');

let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let ipcMain = electron.ipcMain;
let mainWindow;

const appLocation = `file://${__dirname}/hello-apps.html`;

app.on('ready', () => {
  mainWindow = new BrowserWindow({height: 600, width: 800});
  mainWindow.loadURL(appLocation);

  ipcMain.on('async-message', (event, arg) => {
    console.log(arg);
    event.sender.send('async-reply', 'ahoy hoy!');
  });
});

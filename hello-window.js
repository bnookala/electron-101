const electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({height: 600, width: 800});
  mainWindow.loadURL('https://www.buzzfeed.com/expresident/best-cat-pictures');

  mainWindow.on('closed', () => {
    console.log('bye');
  });

  mainWindow.webContents.on('did-finish-load', (event) => {
    mainWindow.webContents.executeJavaScript("console.log('hi from the electron main process')");
    mainWindow.webContents.executeJavaScript("alert('omg you are about to see the best cats!')");
  });

  //https://github.com/electron/electron/blob/master/docs/api/browser-window.md
  //https://github.com/electron/electron/blob/master/docs/api/web-contents.md
});

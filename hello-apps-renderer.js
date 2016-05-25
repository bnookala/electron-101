const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer

const focusedWindow = BrowserWindow.getFocusedWindow();

document.getElementById("small").addEventListener("click", (event) => {
    focusedWindow.setSize(400, 400, true);
});

document.getElementById("big").addEventListener("click", (event) => {
    focusedWindow.maximize();
});

document.getElementById("goaway").addEventListener("click", (event) => {
    focusedWindow.minimize();
});

document.getElementById("notification").addEventListener("click", (event) => {
    // html5 notifications integrate *natively!*
    new Notification("Wao look at me");
});

document.getElementById("talk").addEventListener("click", (event) => {
  ipcRenderer.send('async-message', 'hello?');
});

ipcRenderer.on('async-reply', (event, arg) => {
  alert(`main process says: ${arg}`)
});

document.getElementById("exit").addEventListener("click", (event) => {
    focusedWindow.close();
});

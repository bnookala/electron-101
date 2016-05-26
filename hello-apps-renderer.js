const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer

const focusedWindow = BrowserWindow.getFocusedWindow();

// wao node

const fs = require('fs');
console.log(fs.realpathSync('.'));
console.log(process.versions.node);

// neat little OS things

document.getElementById("small").addEventListener("click", (event) => {
    focusedWindow.setSize(400, 400, true);
});

document.getElementById("big").addEventListener("click", (event) => {
    focusedWindow.maximize();
});

document.getElementById("goaway").addEventListener("click", (event) => {
    focusedWindow.minimize();
});

document.getElementById("exit").addEventListener("click", (event) => {
    focusedWindow.close();
});

// more complicated OS things

document.getElementById("notification").addEventListener("click", (event) => {
    // html5 notifications integrate *natively!*
    new Notification("Wao look at me");
});

// ipc is cool because windows can talk to each other from different processes !

document.getElementById("talk").addEventListener("click", (event) => {
  ipcRenderer.send('async-message', 'hello?');
});

ipcRenderer.on('async-reply', (event, arg) => {
  alert(`main process says: ${arg}`)
});

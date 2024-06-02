const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow= null;

const createMainWindow = () => {

    mainWindow= new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "/mainPreload.js"),
            devTools: true
        },
        show: false,
    });

    mainWindow.loadFile(path.join(__dirname, '/UI/Pages/SignUp/SignUp.html'));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow= null;
    })
};

app.on('ready', () => {
    createMainWindow()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
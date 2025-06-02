import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    
    const url = process.env.ELECTRON_START_URL || `file://${path.join(__dirname, '../build/index.html')}`;
    win.maximize();
    win.loadURL(url);
}
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

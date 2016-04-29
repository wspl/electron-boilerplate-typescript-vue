import * as path from 'path';
import {BrowserWindow} from 'electron';

export class MainWindow {

    public window: Electron.BrowserWindow;

    constructor() {
        let options: Electron.BrowserWindowOptions = {
            height: 900,
            width: 1280
        };

        this.window = new BrowserWindow(options);

        const mainURL = process.env.HOT
            ? `http://localhost:${process.env.PORT}/main.html`
            : 'file://' + path.join(__dirname, 'main.html');

        this.window.loadURL(mainURL);

        if (process.env.NODE_ENV !== 'production') {
            this.window.webContents.openDevTools();
        }

        this.window.on('closed', this.onClose)
    }

    private onClose(): void {
        this.window = null
    }

}

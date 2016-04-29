import * as path from 'path';
import { BrowserWindow } from 'electron';

export class MainWindow {
    public window: Electron.BrowserWindow;
    public options: Electron.BrowserWindowOptions;

    constructor() {
        this.options = {
            height: 600,
            width: 800
        };
    }

    public show(): void {
        if (this.window) {
            this.window.show();
        } else {
            this.window = new BrowserWindow(this.options);

            const mainURL = process.env.HOT
                ? `http://localhost:${process.env.PORT}/main.html`
                : 'file://' + path.join(__dirname, 'main.html');
            this.window.loadURL(mainURL);

            if (process.env.NODE_ENV !== 'production') {
                this.window.webContents.openDevTools();
            }

            this.window.on('closed', this.onClose)
        }
    }

    public hide = () => this.window.hide();

    private onClose(): void {
        this.window = null;
    }
}

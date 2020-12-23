const { app, BrowserWindow, Menu } = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 700,
        webPreferences: {
            backgryyoundThrottling: false,
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.on('closed', () =>  mainWindow = null)
    Menu.setApplicationMenu(null)
})

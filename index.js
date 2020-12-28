const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 700,
        icon: './src/assets/images/app.png',
        webPreferences: {
            backgryyoundThrottling: false,
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.on('closed', () =>  mainWindow = null)
    Menu.setApplicationMenu(null)
})

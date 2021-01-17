const {
  app,
  BrowserWindow
} = require('electron')
const Mysql = require('mysql')

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
  },
    width: 1280,
    height: 720,

  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

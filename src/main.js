const {BrowserWindow} = require('electron')


let window  
function createWindow(){
    window = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences:{
            nodeIntegration:true
        }
    })
    window.loadFile('src/ui/index.html')
}
module.exports = {
    createWindow
}
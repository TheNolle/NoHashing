const { contextBridge, ipcRenderer, shell } = require('electron')

// Versions
contextBridge.exposeInMainWorld('versions', {
    node: _ => process.versions.node,
    chrome: _ => process.versions.chrome,
    electron: _ => process.versions.electron
})

// Informations
contextBridge.exposeInMainWorld('informations', {
    os: _ => { return process.platform },
    // App
    appName: _ => ipcRenderer.invoke('informations:app:name'),
    appDescription: _ => ipcRenderer.invoke('informations:app:description')
})

// Titlebar
contextBridge.exposeInMainWorld('titlebar', {
    close: _ => ipcRenderer.invoke('titlebar:close'),
    minimize: _ => ipcRenderer.invoke('titlebar:minimize'),
    fullscreen: _ => ipcRenderer.invoke('titlebar:fullscreen'),
    isFullscreen: _ => ipcRenderer.invoke('titlebar:isFullscreen')
})

// Dark Mode
contextBridge.exposeInMainWorld('theme', {
    toggle: _ => ipcRenderer.invoke('theme:toggle'),
    default: (theme = null) => theme == 'dark' ? ipcRenderer.invoke('theme:dark') : ipcRenderer.invoke('theme:light')
})

// Utils
contextBridge.exposeInMainWorld('utils', {
    existSync: (file) => require('fs').existsSync(require('path').join(__dirname, 'app', file)),
    openExternal: (url) => shell.openExternal(url)
})

// Crypto
contextBridge.exposeInMainWorld('hashing', {
    md4: (string) => { return require('crypto').createHash('md4').update(string).digest('hex') },
    md5: (string) => { return require('crypto').createHash('md5').update(string).digest('hex') },
    ripemd160: (string) => { return require('crypto').createHash('ripemd160').update(string).digest('hex') },
    sha1: (string) => { return require('crypto').createHash('sha1').update(string).digest('hex') },
    sha224: (string) => { return require('crypto').createHash('sha224').update(string).digest('hex') },
    sha256: (string) => { return require('crypto').createHash('sha256').update(string).digest('hex') },
    sha384: (string) => { return require('crypto').createHash('sha384').update(string).digest('hex') },
    sha512: (string) => { return require('crypto').createHash('sha512').update(string).digest('hex') },
    sha512256: (string) => { return require('crypto').createHash('sha512-256').update(string).digest('hex') },
})
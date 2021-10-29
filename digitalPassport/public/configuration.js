const fanzoneuserConfigs = {
    localhost: {
        // stadiumId: 19,
        // origin: 'https://dev.olympics.fankave.com',
        // ctag: 'demo',
        origin: 'https://dev.ccapps.fankave.com',
        dtitle: 'default'
    },
    default: {
        ctag: 'bevi',
        origin: 'https://dev.ccapps.fankave.com',
        dtitle: 'bevi'
    }
}



self.window.fanzoneuserConfig = fanzoneuserConfigs[window.location.hostname] || fanzoneuserConfigs['default']
self.window.userConfigs = fanzoneuserConfigs[window.location.hostname] || fanzoneuserConfigs['default']
self.window.ctag = window.self.fanzoneuserConfig.ctag || fanzoneuserConfigs['default'].ctag
document.title = window.self.fanzoneuserConfig.title || fanzoneuserConfigs['default'].title

function loadDoc() {
    const pathName = window.location.pathname.replace(/\//g, "");
    const filePath = window.location.hostname === 'localhost' ? '/' : `/${pathName}/`
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', `${filePath}${window.self.dtag}/${window.self.dtag}.css`)

    if (pathName) {
        const src = document.createElement('script')
        src.setAttribute('src', `${filePath}${pathName}.js`)
        document.body.appendChild(src)
    }
    // Append to the `head` element
    document.head.appendChild(link)
}
loadDoc()

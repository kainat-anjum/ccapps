import defaultConfig from './default'
import beviConfig from './bevi'

const theme = () => {
    switch ((window as any).self.ctag) {
        case 'bevi':
            return beviConfig

        default:
            return defaultConfig
    }
}

const themeConfigs = theme()
export default themeConfigs

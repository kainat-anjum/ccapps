import { SplashScreenStyled } from './style'
import themeConfigs from '../../configs'

const SplashScreen = () => {
    const src=themeConfigs.splashScreen.src;

    return (
        <SplashScreenStyled>
            <img src={src} />
        </SplashScreenStyled>
    )
}

export default SplashScreen

import { SplashScreenImage, SplashScreenStyled } from './style'
import themeConfigs from '../../configs'

const SplashScreen = () => {
    const src = themeConfigs.splashScreen.src

    return (
        <SplashScreenStyled>
            <SplashScreenImage src={src} />
        </SplashScreenStyled>
    )
}

export default SplashScreen

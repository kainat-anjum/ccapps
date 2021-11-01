import { SplashScreenImage, SplashScreenStyled } from './style'
import themeConfigs from '../../configs'
import Loader from '../Loader'

const SplashScreen = () => {
    const src = themeConfigs.splashScreen.src

    return (
        <SplashScreenStyled>
            <SplashScreenImage src={src} />
            <Loader />
        </SplashScreenStyled>
    )
}

export default SplashScreen

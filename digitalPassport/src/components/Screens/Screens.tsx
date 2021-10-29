import { LoginScreen, SplashScreen, HomeScreen } from '../index'
import {
    HOME_SCREEN,
    LOGIN_SCREEN,
    SPLASH_SCREEN,
    QR_SCAN_SCREEN,
    TRIVIA_SCREEN,
    POLL_SCREEN,
    QNA_SCREEN,
    TESTIMONIAL_SCREEN,
    REWARDS_SCREEN
} from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import { QRScanner } from '../QRScanner/QRScanner'
import { TriviaScreen } from '../TriviaScreen/TriviaScreen'
import { PollScreen } from '../PollScreen/PollScreen'
import { QnaScreen } from '../QnaScreen/QnaScreen'
import { TestimonialScreen } from '../TestimonialScreen/TestimonialScreen'
import { RewardsScreen } from '../RewardsScreen/RewardsScreen'

const Screens = () => {
    const {
        state: { screen }
    } = useFanzoneContext()

    const SwitchScreen = () => {
        console.log('screen', screen)

        switch (screen) {
            case SPLASH_SCREEN:
                return <SplashScreen />
            case LOGIN_SCREEN:
                return <LoginScreen />
            case HOME_SCREEN:
                return <HomeScreen />
            case QR_SCAN_SCREEN:
                return <QRScanner />
            case TRIVIA_SCREEN:
                return <TriviaScreen />
            case POLL_SCREEN:
                return <PollScreen />
            case QNA_SCREEN:
                return <QnaScreen />
            case TESTIMONIAL_SCREEN:
                return <TestimonialScreen />
            case REWARDS_SCREEN:
                return <RewardsScreen />
            default:
                return <HomeScreen />
        }
    }
    return <SwitchScreen />
}

export default Screens

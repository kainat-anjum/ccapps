import {
    CHANGE_SCREEN,
    QR_SCAN_SCREEN,
    TRIVIA_SCREEN,
    POLL_SCREEN,
    QNA_SCREEN,
    TESTIMONIAL_SCREEN,
    REWARDS_SCREEN
} from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import { HomeScreenStyled, CardStyled, CardsWrapperStyled, TagStyled, HeadingStyled, Image } from './style'
import themeConfigs from './../../configs'

type CardProps = {
    text: string
}

const Card = (props: CardProps) => {
    const { text } = props
    const { dispatch } = useFanzoneContext()

    const changeScreen = () => {
        switch (text) {
            case 'QR code':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: QR_SCAN_SCREEN
                })
                break

            case 'Trivia':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: TRIVIA_SCREEN
                })
                break

            case 'Poll':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: POLL_SCREEN
                })
                break

            case 'Qna':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: QNA_SCREEN
                })
                break

            case 'Testimonial':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: TESTIMONIAL_SCREEN
                })
                break

            case 'Rewards':
                dispatch({
                    type: CHANGE_SCREEN,
                    payload: REWARDS_SCREEN
                })
                break

            default:
                break
        }
    }

    return (
        <CardStyled onClick={() => changeScreen()}>
            <p>{text}</p>
            <TagStyled>Live</TagStyled>
        </CardStyled>
    )
}

const HomeScreen = () => {
    const {
        homeScreen: {
            triviaCard: { display: triviaCardDisplay },
            pollCard: { display: pollCardDisplay },
            qnaCard: { display: qnaCardDisplay },
            testimonialCard: { display: testimonialCardDisplay },
            qrCodeCard: { display: qrCodeCardDisplay },
            emailCard: { display: emailCardDisplay },
            photoBoothCard: { display: photoBoothCardDisplay },
            rewardsCard: { display: rewardCardDisplay },
            imageSrc
        }
    } = themeConfigs

    return (
        <HomeScreenStyled>
            <Image src={imageSrc} />

            <HeadingStyled>Participate</HeadingStyled>
            <CardsWrapperStyled>
                {qrCodeCardDisplay && <Card text="QR code" />}
                {pollCardDisplay && <Card text="Poll" />}
                {triviaCardDisplay && <Card text="Trivia" />}
                {qnaCardDisplay && <Card text="Qna" />}
                {testimonialCardDisplay && <Card text="Testimonial" />}
                {rewardCardDisplay && <Card text="Rewards" />}
            </CardsWrapperStyled>
        </HomeScreenStyled>
    )
}

export default HomeScreen

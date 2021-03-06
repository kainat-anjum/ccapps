import { ReactNode, useEffect } from 'react'
import themeConfigs from '../../configs'
import { CHANGE_SCREEN, LOGIN_SCREEN, SPLASH_SCREEN } from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import { styles } from '../../styles'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { PageWrapperStyled } from './style'

type PageWrapperProps = {
    children: ReactNode
}

const PageWrapper = (props: PageWrapperProps) => {
    const { children } = props

    const {
        state: { screen },
        dispatch
    } = useFanzoneContext()

    useEffect(() => {
        if (screen === SPLASH_SCREEN) {
            const timeOut = setTimeout(() => {
                dispatch({ type: CHANGE_SCREEN, payload: LOGIN_SCREEN })
            }, 5000)

            return () => clearTimeout(timeOut)
        }
    })

    const StylesWrapper = styles.custom
    const { id } = themeConfigs

    return (
        <StylesWrapper id={id}>
            <PageWrapperStyled>
                {!(screen === SPLASH_SCREEN) && <Header />}
                {children}
                {!(screen === SPLASH_SCREEN) && <Footer />}
            </PageWrapperStyled>
        </StylesWrapper>
    )
}

export default PageWrapper

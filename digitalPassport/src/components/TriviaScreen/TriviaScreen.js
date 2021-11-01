import React, { useState, useEffect, useCallback } from 'react'
import { CHANGE_SCREEN, HOME_SCREEN } from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import WidgetHeader from '../WidgetHeader'

export const TriviaScreen = () => {
    const userConfig = {
        localhost: {
            stadiumId: 19,
            origin: 'https://dev.olympics.fankave.com'
        },
        default: {
            stadiumId: 19,
            origin: 'https://dev.olympics.fankave.com'
        }
    }

    self.window.userConfig = userConfig[window.location.hostname] || userConfig['default']

    const loadTrivia = (callback) => {
        const existingScript = document.getElementById('triviaId')
        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://dev.olympics.fankave.com/jsembed/trivia.js'
            script.id = 'triviaId'
            document.body.appendChild(script)
            script.onload = () => {
                if (callback) callback()
            }
        }
        if (existingScript && callback) callback()
    }

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        loadTrivia(() => {
            setLoaded(true)
        })
    })

    const { dispatch } = useFanzoneContext()
    const goBack = useCallback(() => {
        dispatch({ type: CHANGE_SCREEN, payload: HOME_SCREEN })
    }, [dispatch])

    return (
        loaded && (
            <React.Fragment>
                <WidgetHeader title="trivia" handleBackClick={goBack} />
                <div id="trivia" className="wrapper"></div>
            </React.Fragment>
        )
    )
}

import React, { useState, useEffect, useCallback } from 'react'
import { CHANGE_SCREEN, HOME_SCREEN } from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import WidgetHeader from '../WidgetHeader'

export const PollScreen = () => {
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

    const loadPoll = (callback) => {
        const existingScript = document.getElementById('pollId')
        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://dev.olympics.fankave.com/jsembed/poll.js'
            script.id = 'pollId'
            document.body.appendChild(script)
            script.onload = () => {
                if (callback) callback()
            }
        }
        if (existingScript && callback) callback()
    }

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        loadPoll(() => {
            setLoaded(true)
        })
        console.log(document.getElementById('pollId'))
    })

    const { dispatch } = useFanzoneContext()
    const goBack = useCallback(() => {
        dispatch({ type: CHANGE_SCREEN, payload: HOME_SCREEN })
    }, [dispatch])

    return (
        loaded && (
            <React.Fragment>
                <WidgetHeader title="Poll" handleBackClick={goBack} />
                <div id="poll" className="wrapper"></div>
            </React.Fragment>
        )
    )
}

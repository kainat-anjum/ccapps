import React, { useState, useEffect } from 'react'
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

    return (
        loaded && (
            <React.Fragment>
                <WidgetHeader title="Poll" />
                <div id="poll" className="wrapper"></div>
            </React.Fragment>
        )
    )
}

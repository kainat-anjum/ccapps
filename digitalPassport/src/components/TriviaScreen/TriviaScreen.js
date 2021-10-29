import React, { useState, useEffect } from 'react'

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

    return loaded && <div id="trivia" className="wrapper"></div>
}

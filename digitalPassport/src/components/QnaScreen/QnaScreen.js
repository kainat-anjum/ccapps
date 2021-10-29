import React, { useState, useEffect } from 'react'

export const QnaScreen = () => {
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

    const loadQna = (callback) => {
        const existingScript = document.getElementById('qnaId')
        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://dev.olympics.fankave.com/jsembed/qna.js'
            script.id = 'qnaId'
            document.body.appendChild(script)
            script.onload = () => {
                if (callback) callback()
            }
        }
        if (existingScript && callback) callback()
    }

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        loadQna(() => {
            setLoaded(true)
        })
        console.log(document.getElementById('qnaId'))
    })

    return loaded && <div id="qna" className="wrapper"></div>
}

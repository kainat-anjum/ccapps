import React, {useState, useEffect} from 'react'

export const TestimonialScreen = () => {
    const fanzoneuserConfigs = {
        localhost: {
            // stadiumId: 19,
            // origin: 'https://dev.olympics.fankave.com',
            ctag: 'demo',
            origin: 'https://dev.ccapps.fankave.com',
            dtitle: 'default'
        },
        default: {
            ctag: 'bevi',
            origin: 'https://dev.ccapps.fankave.com',
            dtitle: 'bevi'
        }
    }
    
    
    
    self.window.fanzoneuserConfig = fanzoneuserConfigs[window.location.hostname] || fanzoneuserConfigs['default']
    self.window.userConfigs = fanzoneuserConfigs[window.location.hostname] || fanzoneuserConfigs['default']
    self.window.ctag = window.self.fanzoneuserConfig.ctag || fanzoneuserConfigs['default'].ctag
    document.title = window.self.fanzoneuserConfig.title || fanzoneuserConfigs['default'].title

    const loadTestimonial = (callback) => {
        const existingScript = document.getElementById('testimonialId')
        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://dev.ccapps.fankave.com/testimonials/testimonials.js'
            script.id = 'testimonialId'
            document.body.appendChild(script)
            script.onload = () => {
                if (callback) callback()
            }
        }
        if (existingScript && callback) callback()
    }

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      loadTestimonial(() => {
            setLoaded(true)
        })
        console.log(document.getElementById('testimonialId'))
    })


    return loaded && <div id="testimonials" className="wrapper"></div>
}

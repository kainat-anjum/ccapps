const defaultConfig = {
    id: 'fk-default-layout',
    splashScreen: {
        src: '/default/nrf.svg'
        // display: true
    },
    header: {
        logo: '/default/nrf.svg'
    },

    footer: {
        logo: '/default/nrf.svg'
    },

    loginScreen: {
        nameInput: { display: true, placeholder: 'Name' },
        emailInput: { display: true, placeholder: 'Email' }
    },

    homeScreen: {
        triviaCard: { display: true },
        pollCard: { display: true },
        qnaCard: { display: false },
        testimonialCard: { display: false },
        qrCodeCard: { display: false },
        emailCard: { display: false },
        photoBoothCard: { display: false },
        rewardsCard: { display: true },
        imageSrc: '/default/home-screen.png'
    }
}

export default defaultConfig

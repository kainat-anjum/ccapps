const defaultConfig = {
    id: 'fk-default-layout',
    splashScreen: {
        src: '/default/bevi-gif.gif'
        // display: true
    },
    header: {
        logo: '/default/fankave.png'
    },

    footer: {
        logo: '/default/fankave.png'
    },

    loginScreen: {
        nameInput: { display: true, placeholder: 'Name' },
        emailInput: { display: true, placeholder: 'Email' }
    },

    homeScreen: {
        triviaCard: { display: true },
        pollCard: { display: true },
        qnaCard: { display: true },
        testimonialCard: { display: true },
        qrCodeCard: { display: true },
        emailCard: { display: false },
        photoBoothCard: { display: false },
        rewardsCard: { display: false },
      
    }
}

export default defaultConfig

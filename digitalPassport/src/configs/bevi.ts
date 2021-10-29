const beviConfig = {
    id: 'fk-bevi-layout',
    splashScreen: {
        display: true
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
        qrCodeCard: { display: true },
        emailCard: { display: true },
        photoBoothCard: { display: false },
        rewardsCard: { display: false },
        triviaCard: { display: true },
        pollCard: { display: true },
        qnaCard: { display: true },
        testimonialCard: { display: true }
    }
}

export default beviConfig

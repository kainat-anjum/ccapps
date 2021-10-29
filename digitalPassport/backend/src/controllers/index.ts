import Verifier from 'email-verifier'

const controller = {
    emailVerifier: async function (req, response) {
        const { email } = req.body

        function verify(email: string) {
            const verifier = new Verifier(process.env.API_KEY)
            verifier.verify(email, (err, data) => {
                if (err) response.send('Input is not an email format.')
                else {
                    if (data.smtpCheck === 'true') {
                        response.send('Valid Email Address.')
                    } else {
                        response.send('Invalid Email Address.')
                    }
                }
            })
        }

        if (!email) {
            response.status(400).send({ error: 'Bad Data' })
        } else {
            verify(email)
        }
    }
}
export default controller

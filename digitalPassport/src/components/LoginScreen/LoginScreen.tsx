import { useState } from 'react'
import { CHANGE_SCREEN, HOME_SCREEN } from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'

import { LoginScreenStyled, InputStyled } from './style'

const LoginScreen = () => {
    //to-do: controlled inputs, merge handlelogin and verifyemail, dispatch on verification
    const { dispatch } = useFanzoneContext()
    const [emailValidity, setEmailValidity] = useState<string>('')

    const handleLogin = () => {
        dispatch({ type: CHANGE_SCREEN, payload: HOME_SCREEN })
        return null
    }

    const verifyEmail = (e) => {
        e.target.value &&
            fetch('/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: e.target.value
                })
            }).then((response) =>
                response.text().then(function (text) {
                    console.log(text)
                    setEmailValidity(text)
                })
            )
    }

    return (
        <LoginScreenStyled>
            <InputStyled>
                <input type="text" className="inputText" required />
                <span className="floating-label">Name</span>
            </InputStyled>
            <InputStyled>
                <input type="text" className="inputText" required onBlur={verifyEmail} />
                <span className="floating-label">Email</span>
            </InputStyled>
            <button onClick={() => handleLogin()}>Login</button>
            {emailValidity && <p>{emailValidity}</p>}
        </LoginScreenStyled>
    )
}

export default LoginScreen

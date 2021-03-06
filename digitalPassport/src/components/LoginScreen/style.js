import styled from 'styled-components'

export const LoginScreenStyled = styled.section`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 20px;
`

export const InputStyled = styled.article`
    position: relative;

    input {
        padding-left: 10px;
    }

    input:focus-visible {
        border: solid 1px #002e62;
        border-radius: 6px;
    }

    input:focus ~ .floating-label,
    input:not(:focus):valid ~ .floating-label {
        transform: translate(10px, 5px);
        font-size: 11px;
        opacity: 1;
    }

    .inputText {
        font-size: 18px;
        width: 96%;
        height: 71px;
        border-radius: 6px;
        border: solid 1px #002e62;
    }

    .floating-label {
        position: absolute;
        pointer-events: none;
        transition: 0.2s ease all;
        transform: translate(10px, 25px);
        left: 0;
        top: 0;
    }
`

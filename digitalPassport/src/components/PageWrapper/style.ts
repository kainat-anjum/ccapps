import styled, { css } from 'styled-components'

type CommonProps = { isSplashScreen: boolean }

const SlimScrollStyle = css`
    &::-webkit-scrollbar {
        width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 1rem;
        border-right: 0.5rem solid transparent;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 1rem;
        border-radius: 1rem;
        height: 2rem;
        background: #a5b0bf;
    }
`

export const PageWrapperStyled = styled.section<CommonProps>`
    position: relative;
    height: calc(100vh - 102px);
    max-width: 400px;
    margin: 50px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #002e62;
    ${(props) =>
        !props.isSplashScreen &&
        `
        display: grid;
        grid-template-rows: auto 90px;
    `}
`

export const ScrollableContentWrapper = styled.section<CommonProps>`
    height: calc(100vh - 102px ${(props) => !props.isSplashScreen && '- 100px'});
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 10px;

    ${SlimScrollStyle}
`

import styled from 'styled-components'

type CommonProps = { isSplashScreen: boolean }

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
    height: calc(100vh - 102px ${(props) => !props.isSplashScreen && '- 90px'});
    overflow-y: auto;
    padding-bottom: 10px;
`

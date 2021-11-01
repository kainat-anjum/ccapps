import styled from 'styled-components'

export const WidgetHeaderWrapper = styled.section`
    display: flex;
    flex-direction: row;
    gap: 10px;
    background: #fdbc33;
    color: #002e62;
    padding: 15px 0px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    svg {
        fill: #002e62;
    }
`

export const WidgetTitle = styled.h1`
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 11.44px;
    margin: 0px;
    font-weight: normal;
`

export const BackButtonWrapper = styled.span`
    cursor: pointer;
`

import styled, { keyframes } from 'styled-components'

const dotSize = 10

const DotsAnimation = keyframes`
    0% {
        background: #ffffff;
        transform: translateY(0px);
    }
    50% {
        background: #33a2fd;
        transform: translateY(-8px);
    }
    100% {
        background: #ffffff;
        transform: translateY(0px);
    }
    
`

export const LoaderWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const Dot = styled.div`
    background: #ffffff;
    border-radius: 50%;
    width: ${dotSize}px;
    height: ${dotSize}px;
    animation: ${DotsAnimation} 0.8s infinite;

    &:nth-child(2) {
        animation-delay: 0.1s;
    }
    &:nth-child(3) {
        animation-delay: 0.2s;
    }
    &:nth-child(4) {
        animation-delay: 0.3s;
    }
`

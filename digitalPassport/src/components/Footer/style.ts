import styled from 'styled-components'

export const FooterStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fdbb2f;
    padding: 20px;
    height: 50px;
    border-radius: 0px 0px 5px 5px;

    img {
        height: 25px;
    }

    @media (max-width: 430px) {
        border-radius: 0;
    }
`

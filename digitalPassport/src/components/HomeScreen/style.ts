import styled from 'styled-components'

export const HomeScreenStyled = styled.section``

export const CardStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: max-content;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ccc;

    p {
        margin: 0 0 10px 0;
    }
`

export const CardsWrapperStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 20px;
`

export const TagStyled = styled.span`
    background: red;
    padding: 2px 9px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
`

export const HeadingStyled = styled.h2`
    color: #fff;
    font-size: 22px;
    margin: 25px 0px 42px;
    text-transform: uppercase;
    letter-spacing: 11.44px;
    font-weight: normal;
`

export const Image = styled.img`
    width: 100%;
`

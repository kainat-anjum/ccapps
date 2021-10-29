import React from 'react'
import { FooterStyled } from './style'
import themeConfigs from '../../configs'

const Footer = () => {
    const logo = themeConfigs.header.logo
    return (
        <FooterStyled>
            <img src={logo} />
        </FooterStyled>
    )
}

export default Footer

import React from 'react'
import { FooterStyled } from './style'
import themeConfigs from '../../configs'

const Footer = () => {
    const logo = themeConfigs.footer.logo
    const display = themeConfigs.footer.display
    return (
        display && (
            <FooterStyled>
                <img src={logo} />
            </FooterStyled>
        )
    )
}
export default Footer

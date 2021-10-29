import React from 'react'
import { HeaderStyled } from './style'
import themeConfigs from '../../configs'

const Header = () => {
    const logo = themeConfigs.header.logo

    return (
        <HeaderStyled>
            <img src={logo} />
        </HeaderStyled>
    )
}

export default Header

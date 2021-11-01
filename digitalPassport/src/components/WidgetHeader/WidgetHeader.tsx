import React from 'react'
import { BackButtonWrapper, WidgetHeaderWrapper, WidgetTitle } from './style'
import { BackIcon } from '../../assets'

type WidgetHeaderProps = {
    title: string
    handleBackClick?: React.MouseEventHandler
}

export const WidgetHeader = (props: WidgetHeaderProps) => {
    const { title, handleBackClick } = props

    return (
        <WidgetHeaderWrapper>
            <BackButtonWrapper onClick={handleBackClick}>
                <BackIcon />
            </BackButtonWrapper>

            <WidgetTitle>{title}</WidgetTitle>
        </WidgetHeaderWrapper>
    )
}

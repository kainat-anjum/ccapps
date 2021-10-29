import React from 'react'
import { WidgetHeaderWrapper } from './style'

type WidgetHeaderProps = {
    title: string
}

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({ title }) => {
    return <WidgetHeaderWrapper>{title}</WidgetHeaderWrapper>
}

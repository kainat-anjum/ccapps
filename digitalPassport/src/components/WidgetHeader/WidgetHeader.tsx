import React from 'react'
import { WidgetHeaderWrapper } from './style'

type WidgetHeaderProps = {
    title: string
}

export const WidgetHeader = ({ title }: WidgetHeaderProps) => {
    return <WidgetHeaderWrapper>{title}</WidgetHeaderWrapper>
}

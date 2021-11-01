import React, { useCallback } from 'react'
import { CHANGE_SCREEN, HOME_SCREEN } from '../../constants'
import { useFanzoneContext } from '../../context/FanzoneContextProvider'
import { WidgetHeader } from '../WidgetHeader/WidgetHeader'

export const RewardsScreen = () => {
    const { dispatch } = useFanzoneContext()
    const goBack = useCallback(() => {
        dispatch({ type: CHANGE_SCREEN, payload: HOME_SCREEN })
    }, [dispatch])

    return (
        <React.Fragment>
            <WidgetHeader title="Rewards" handleBackClick={goBack} />
        </React.Fragment>
    )
}

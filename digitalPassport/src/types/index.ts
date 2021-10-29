import { Dispatch } from 'react'

export type FanzoneStateType = {
    screen: string
}

export type FanzoneDispatchActionType = {
    type: 'CHANGE_SCREEN'
    payload: string
}

export type FanzoneContextType = {
    state: FanzoneStateType
    dispatch: Dispatch<FanzoneDispatchActionType>
}

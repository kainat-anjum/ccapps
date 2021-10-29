import { createContext, useContext, useReducer } from 'react'
import { CHANGE_SCREEN, SPLASH_SCREEN } from '../constants'
import { FanzoneContextType, FanzoneStateType } from '../types'

const initialState: FanzoneStateType = {
    screen: SPLASH_SCREEN
}

const FanzoneContext = createContext<FanzoneContextType>({
    state: {
        ...initialState
    },
    dispatch: () => undefined
})

const fanzoneReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SCREEN: {
            return {
                ...state,
                screen: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const FanzoneContextProvider = (props) => {
    const { children } = props
    const [state, dispatch] = useReducer(fanzoneReducer, initialState)
    const value = { state, dispatch }
    return <FanzoneContext.Provider value={value}>{children}</FanzoneContext.Provider>
}

export const useFanzoneContext = () => {
    const context = useContext(FanzoneContext)
    if (context === undefined) {
        throw new Error('useFanzoneContext must be used within a FanzoneContextProvider')
    }
    return context
}

import { beviStyled } from './bevi'
import { defaultStyled } from './default'

const ctag = (window as any).self.ctag

const style = () => {
    switch (ctag) {
        case 'default':
            return defaultStyled

        case 'bevi':
            return beviStyled

        default:
            return defaultStyled
    }
}

export const styles = {
    custom: style()
}

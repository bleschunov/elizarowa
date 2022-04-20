import Button from './Button'
import Icon from '../Icon/Icon'

import './Button.scss'
import vars from '../../styles/vars.scss'

const TelegramButton = ({ children, ...props }) => {
    return (
        <Button 
            {...props}
            size="lg"
            hierarchy="telegram"
            type="button"
            icon={ <Icon name="telegram" width="20" height="20" color={vars.telegramGradient}/> }>
                {children}
        </Button>
    )
}  

export default TelegramButton
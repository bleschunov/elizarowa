import Button from './Button'
import Icon from '../Icon/Icon'

import './Button.scss'
import vars from '../../styles/vars.scss'

const TelegramButton = ({ children }) => {
    return (
        <Button 
            size="lg"
            type="telegram"
            icon={ <Icon name="telegram" width="20" height="20" color={vars.telegramGradient}/> }>
                {children}
        </Button>
    )
}  

export default TelegramButton
import Button from './Button'
import Icon from '../Icon/Icon'

import './Button.scss'
import vars from '../../styles/vars.scss'

const VkButton = ({ children }) => {
    return (
        <Button 
            size="lg"
            type="vk"
            icon={ <Icon name="vk" width="20" height="20" color={vars.vkColor}/> }>
                {children}
        </Button>
    )
}  

export default VkButton
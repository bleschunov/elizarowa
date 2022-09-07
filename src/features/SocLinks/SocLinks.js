import Icon from '../Icon/Icon'

import './SocLinks.scss'
import vars from '../../styles/vars.scss'

const SocLinks = ({ className }) => {
    return (
        <div className={`socLinks ${className}`}>
            <div className="socLinks__flex">
                <a href="https://t.me/ekaterina_elizarowa" target="_blank">
                    <Icon 
                        className="socLinks__socLink" 
                        name="telegram" 
                        width="32" 
                        height="32" 
                        color={vars.accent} />
                </a>
                <a href="https://vk.com/ekaterinaelizarowa" target="_blank">
                    <Icon 
                        className="socLinks__socLink"
                        name="vk" 
                        width="32" 
                        height="32" 
                        color={vars.accent} />
                </a>
            </div>
        </div>
    )
}

export default SocLinks
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { Fade } from 'react-awesome-reveal'

import './Header.scss'
import vars from '../../styles/vars.scss'


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Fade
                    delay={2300}
                    direction='down'
                    triggerOnce
                >
                    <div className="header__flex">
                        <nav className="header__nav md">
                            <ul className="header__list">
                                <li className="header__item"><a href="#about" className="header__link">Обо мне</a></li>
                                <li className="header__item"><a href="#reviews" className="header__link">Отзывы</a></li>
                                <li className="header__item"><a href="#prices" className="header__link">Стоимость</a></li>
                                <li className="header__item"><a href="#calc" className="header__link">Калькулятор</a></li>
                            </ul>
                        </nav>
                        <div className="header__iconGroup">
                            <a href="https://t.me/ekaterina_elizarowa"><Icon className="header__socLink" name="telegram" width="32" height="32" color={vars.accent} /></a>
                            <a href="https://vk.com/ekaterinaelizarowa"><Icon className="header__socLink" name="vk" width="32" height="32" color={vars.accent} /></a>
                        </div>
                        <Button href="#callback" hierarchy="primary" type="button" size="sm">СВЯЗАТЬСЯ</Button>
                    </div>
                </Fade>
            </div>
        </header>
    )
}

export default Header
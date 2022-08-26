import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { Fade } from 'react-awesome-reveal'
import { HashLink as Link } from 'react-router-hash-link';

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
                        <Link to="/#hero"><Icon name="logo" width="44" height="44"/></Link>
                        <nav className="header__nav md">
                            <ul className="header__list">
                                <li className="header__item"><Link to="/#about" className="header__link">Обо мне</Link></li>
                                <li className="header__item"><Link to="/#reviews" className="header__link">Отзывы</Link></li>
                                <li className="header__item"><Link to="/#prices" className="header__link">Стоимость</Link></li>
                                <li className="header__item"><Link to="/#calc" className="header__link">Калькулятор</Link></li>
                            </ul>
                        </nav>
                        <div className="header__iconGroup">
                            <a href="https://t.me/ekaterina_elizarowa" target="_blank"><Icon className="header__socLink" name="telegram" width="32" height="32" color={vars.accent} /></a>
                            <a href="https://vk.com/ekaterinaelizarowa" target="_blank"><Icon className="header__socLink" name="vk" width="32" height="32" color={vars.accent} /></a>
                            <Button href="/#callback" hierarchy="primary" type="button" size="sm" component="link">СВЯЗАТЬСЯ</Button>
                        </div>
                        
                    </div>
                </Fade>
            </div>
        </header>
    )
}

export default Header
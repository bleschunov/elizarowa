import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Container from '../Container/Container'

import './Header.scss'
import vars from '../../styles/vars.scss'


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__flex">
                    <nav className="header__nav md">
                        <ul className="header__list">
                            <li className="header__item"><a href="#" className="header__link">Обо мне</a></li>
                            <li className="header__item"><a href="#" className="header__link">Отзывы</a></li>
                            <li className="header__item"><a href="#" className="header__link">Стоимость</a></li>
                            <li className="header__item"><a href="#" className="header__link">Калькулятор</a></li>
                        </ul>
                    </nav>
                    <div className="header__iconGroup">
                        <a href="#"><Icon name="telegram" width="32" height="32" color={vars.accent} /></a>
                        <a href="#"><Icon name="vk" width="32" height="32" color={vars.accent} /></a>
                    </div>
                    <Button hierarchy="primary" type="button" size="sm">СВЯЗАТЬСЯ</Button>
                </div>
            </div>
        </header>
    )
}

export default Header
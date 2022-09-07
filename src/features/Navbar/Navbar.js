import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';

import "./Navbar.scss"

const Navbar = ({ className, direction = 'row' }) => {

    const directionClasses = classNames({
        navbar__list_row: direction === 'row',
        navbar__list_column: direction === 'column'
    })

    return (
        <div className={className}>
            <nav className="navbar">
                <ul className={`navbar__list ${directionClasses}`}>
                    <li className="navbar__item"><Link to="/#about" className="navbar__link" data-link>Обо мне</Link></li>
                    <li className="navbar__item"><Link to="/#reviews" className="navbar__link" data-link>Отзывы</Link></li>
                    <li className="navbar__item"><Link to="/#prices" className="navbar__link" data-link>Стоимость</Link></li>
                    <li className="navbar__item"><Link to="/#calc" className="navbar__link" data-link>Калькулятор</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
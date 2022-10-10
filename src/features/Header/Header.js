import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import { Fade } from 'react-awesome-reveal'
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

import './Header.scss'
import vars from '../../styles/vars.scss'
import SocLinks from '../SocLinks/SocLinks';


const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Fade
                        delay={2300}
                        direction='down'
                        triggerOnce
                    >
                        <div className="header__flex">
                            <Link to="/#hero"><Icon name="logo" width="44" height="44"/></Link>
                            <Navbar className="md" direction="row" />
                            <div className="header__iconGroup">
                                <SocLinks className="xs" />
                                <Button href="/#callback" hierarchy="primary" type="button" size="sm" component="link">СВЯЗАТЬСЯ</Button>
                                <Icon 
                                    className="header__burger" 
                                    name="burger" 
                                    width="32" 
                                    height="32" 
                                    color={vars.accent}
                                    onClick={ () => setSidebar(true) } />
                            </div>
                        </div>
                    </Fade>
                </div>
            </header>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </>
        
    )
}

export default Header
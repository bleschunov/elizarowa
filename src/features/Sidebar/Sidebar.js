import { CSSTransition } from "react-transition-group"

import Icon from "../Icon/Icon"
import Navbar from "../Navbar/Navbar"
import SocLinks from "../SocLinks/SocLinks"

import "./Sidebar.scss"

const Sidebar = ({ sidebar, setSidebar }) => {

    const handleClick = event => {
        console.log(event.target.dataset);
        if ( event.target.dataset?.layout || event.target.dataset?.link ) setSidebar(false);
    }

    return (
        <CSSTransition 
            in={sidebar} 
            timeout={300} 
            classNames="sidebar"
            onEntering={() => document.body.style.overflow = 'hidden'}
            onExiting={() => document.body.style.overflow = 'scroll'}>
            <sidebar className="sidebar" onClick={handleClick} data-layout>
                <div className="sidebar__inner">
                    <div className="sidebar__crossWrapper">
                        <Icon 
                            className="sidebar__cross" 
                            name="cross" 
                            width="24" 
                            height="24" 
                            onClick={ () => setSidebar(false) } />
                    </div>
                    <Navbar className="sidebar__navbar" direction="column" />
                    <SocLinks className="sidebar__socLinks" />
                </div>
            </sidebar>
        </CSSTransition>
        
    )
}

export default Sidebar
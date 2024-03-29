import { Fade } from 'react-awesome-reveal'

import './Title.scss'
import '../../styles/fonts.scss';

const Title = ({ title, subtitle }) => {


    return (
        <Fade
            triggerOnce
            fraction={0.2}
        >
            <hgroup className="title">
                
                { title && <h3 className="title__title">{title}</h3> }
                { subtitle && <h4 className="title__subtitle">{subtitle}</h4> }
                    
            </hgroup>
        </Fade>
    )
}

export default Title
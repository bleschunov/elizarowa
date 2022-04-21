import Button from "../Button/Button"
import { Bounce, Fade } from 'react-awesome-reveal'

import './Hero.scss'

const Hero = () => {
    const name = 'Екатерина'.split('')
    const surname = 'Елизарова'.split('')

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__flex">
                    <hgroup className="hero__headerGroup">
                        <h1 className="hero__title">
                            <Bounce 
                                cascade 
                                damping=".07"
                                style={{ display: 'inline-block' }}
                                triggerOnce
                            >
                                { name.map((letter, index) => <span key={index}>{letter}</span>) }
                            </Bounce>
                                <br />
                            <Bounce 
                                cascade 
                                damping=".07"
                                delay={9 * 0.07 * 1000}
                                style={{ display: 'inline-block' }}
                                triggerOnce
                            >
                                { surname.map((letter, index) => <span key={index}>{letter}</span>) }
                            </Bounce>   
                                    
                                
                            
                        </h1>
        
                        <Fade
                            cascade
                            delay={1400}
                            direction="up"
                            triggerOnce
                        >
                            <h2 className="hero__subtitle">Няня и бебиситер</h2>
                            <Button href="#callback" className="md" hierarchy="primary" type="button" size="2xl">СВЯЗАТЬСЯ</Button>
                        </Fade>
                    </hgroup>
                    <div className="hero__image">
                        <Fade 
                            duration={1600}
                            direction="right"
                            triggerOnce
                        >
                            <img src="./images/katePhoto.png" alt="катя" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
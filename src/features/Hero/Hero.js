import Button from "../Button/Button"
import { Fade } from 'react-awesome-reveal'

import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__flex">
                    <hgroup className="hero__headerGroup">
                        <h1 className="hero__title">Екатерина Елизарова</h1>
                        <h2 className="hero__subtitle">Няня и бебиситер</h2>
                        <Button className="md" hierarchy="primary" type="button" size="2xl">СВЯЗАТЬСЯ</Button>
                    </hgroup>
                    <div className="hero__image">
                        <Fade>
                            <img src="/images/katePhoto.png" alt="катя" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
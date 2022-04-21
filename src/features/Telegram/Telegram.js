import Iframe from 'react-iframe'
import { Fade } from 'react-awesome-reveal'
import { forwardRef } from "react"

import Container from '../Container/Container'
import Title from '../Title/Title'
import Icon from '../Icon/Icon'

import './Telegram.scss'
import vars from '../../styles/vars.scss'

const Telegram = () => {
    return (
       <section className="telegram" >
            <Container>
                <div className="flex">
                    <Title 
                        title="Подписывайтесь на мой телеграм-канал про детей" 
                        subtitle={<><a className="telegram__link underline" href="https://t.me/ekaterinaelizarowapro">Жмите</a>, чтобы прочитать полностью</>} />
                    <Fade
                        fraction={1}
                        triggerOnce
                    >
                        <div className="telegram__inner">
                            <Icon 
                                className="telegram__arrow"
                                name="arrow" 
                                width="40" 
                                height="60" 
                                color={vars.rose400} />
                            <Iframe url="https://t.me/ekaterinaelizarowapro/6?embed=1"
                                scrolling="no"
                                className="telegram__widget"
                            />
                            <div className="telegram__overlayer"></div>
                        </div>
                    </Fade>
                </div>
            </Container>
       </section>
    )
}

export default Telegram
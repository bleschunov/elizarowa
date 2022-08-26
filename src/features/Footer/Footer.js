import { HashLink as Link } from 'react-router-hash-link'

import TelegramButton from '../Button/TelegramButton'
import VkButton from '../Button/VkButton'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__flex">
                    <div className="footer__top">
                        <TelegramButton href="https://t.me/ekaterinaelizarowapro" component="a">Елизарова | Дети</TelegramButton>
                        <TelegramButton href="https://t.me/ekaterinaelizarowamasterskaya" component="a">Мастерская Елизаровой</TelegramButton>
                        <div className="footer__bottomIcons">
                            <TelegramButton href="https://t.me/ekaterina_elizarowa" component="a"/>
                            <VkButton href="https://vk.com/ekaterinaelizarowa" component="a"/>
                        </div>
                    </div>
                    <div className="footer__middle">
                        <p className="footer__link text-xs-medium">Разработка сайта</p>
                        <div className="footer__links">
                            <a href="https://t.me/dmitrybleschunov" className="text-xs-medium underline" target="_blank">Блещунов Дмитрий</a>
                            <a href="https://vk.com/elizavetamoglich" className="text-xs-medium underline" target="_blank">Елизавета Моглич</a>
                            <a href="https://t.me/gold_and_glitter" className="text-xs-medium underline" target="_blank">Власта Стельмах</a>
                        </div>
                    </div>
                    <Link to="/privacy" className="text-xs-medium underline footer__bottom">Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
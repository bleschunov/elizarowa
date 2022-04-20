import Button from '../Button/Button'
import TelegramButton from '../Button/TelegramButton'
import VkButton from '../Button/VkButton'
import Container from '../Container/Container'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__flex">
                    <div className="footer__top">
                        <TelegramButton href="https://t.me/ekaterinaelizarowapro">Елизарова | Дети</TelegramButton>
                        <TelegramButton href="https://t.me/ekaterinaelizarowamasterskaya">Мастерская Елизаровой</TelegramButton>
                        <div className="footer__bottomIcons">
                            <TelegramButton href="https://t.me/ekaterina_elizarowa" />
                            <VkButton href="https://vk.com/ekaterinaelizarowa" />
                        </div>
                    </div>
                    <div className="footer__middle">
                        <p className="footer__link text-xs-medium">Разработка сайта</p>
                        <div className="footer__links">
                            <a href="https://t.me/dmitrybleschunov" className="text-xs-medium underline">Блещунов Дмитрий</a>
                            <a href="https://vk.com/elizavetamoglich" className="text-xs-medium underline">Елизавета Моглич</a>
                            <a href="https://t.me/gold_and_glitter" className="text-xs-medium underline">Власта Стельмах</a>
                        </div>
                    </div>
                    <a href="#" className="text-xs-medium underline footer__bottom">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
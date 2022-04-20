import Button from '../Button/Button'
import TelegramButton from '../Button/TelegramButton'
import VkButton from '../Button/VkButton'
import Container from '../Container/Container'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__flex">
                    <div className="footer__top">
                        <TelegramButton>Елизарова | Дети</TelegramButton>
                        <TelegramButton>Мастерская Елизаровой</TelegramButton>
                        <div className="footer__bottomIcons">
                            <TelegramButton />
                            <VkButton />
                        </div>
                    </div>
                    <div className="footer__middle">
                        <p className="footer__link text-xs-medium">Разработка сайта</p>
                        <div className="footer__links">
                            <a href="#" className="text-xs-medium underline">Блещунова Дмитрий</a>
                            <a href="#" className="text-xs-medium underline">Елизавета Моглич</a>
                            <a href="#" className="text-xs-medium underline">Власта Стельмах</a>
                        </div>
                    </div>
                    <a href="#" className="text-xs-medium underline footer__bottom">Политика конфиденциальности</a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
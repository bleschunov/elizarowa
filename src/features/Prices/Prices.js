import { cloneElement } from "react"
import classNames from "classnames"

import Container from "../Container/Container"
import Title from "../Title/Title"

import './Prices.scss'
import './PriceCard.scss'
import './PriceCardDark.scss'
import '../../styles/fonts.scss'

const Prices = () => {
    const PriceCard = ({ title, time, comments, price, children, dark }) => {
        let additionalInfoWithProps
        if (children) {
            if ( Array.isArray(children) ) {
                additionalInfoWithProps = children.map((element, index) => {
                    return cloneElement(element, { className: 'text-xs-regular priceCard__additionalInfo', key: index })
                })
            } else {
                additionalInfoWithProps = cloneElement(children, { className: 'text-xs-regular priceCard__additionalInfo' })
            }
        }

        const classes = classNames('priceCard', 'card', { priceCard_dark: dark })

        return (
            <div className={classes}>
                <div className="priceCard__top">
                    <h5 className="text-lg-semibold">{title}</h5>
                    <h6 className="text-lg-medium">{time}</h6>
                    <p className="text-sm-regular priceCard__comments">{comments}</p>
                </div>
                <div className="priceCard__bottom">
                    <p className="display-xs-medium priceCard__price">{price}</p>
                    <div className="priceCard__footer">
                        {additionalInfoWithProps}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="prices">
            <div className="prices__container">
                <div className="flex">
                    <Title 
                        title="Стоимость моих услуг"
                        subtitle="Два тарифа и дополнительные занятия" />
                    <ul className="prices__list">
                        <li>
                            <PriceCard 
                                title="Дневная смена"
                                time="c 09:00 до 22:00"
                                comments="Идеально подойдет всем, кто днем работает в офисе"
                                price="600₽/час" >
                                    <p>+100₽/час — прогулка</p>
                                    <p>+700₽ — помощь с домашним заданием</p>
                            </PriceCard>
                        </li>
                        <li>
                            <PriceCard 
                                dark
                                title="Ночная смена"
                                time="c 22:00 до 09:00"
                                comments="Подойдёт, если не с кем оставить ребёнка на ночь"
                                price="700₽/час" >
                            </PriceCard>
                        </li><li>
                            <PriceCard 
                                title="Урок рисования"
                                comments="Я не учу детей рисовать «правильно», вместо этого я рассказываю, как нарисовать то, что хочется"
                                price="1000₽/занятие">
                                    <p>*от 6 лет</p>
                            </PriceCard>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Prices
import { cloneElement } from "react"
import { Fade } from 'react-awesome-reveal'

import Container from "../Container/Container"
import Title from "../Title/Title"

import './Reviews.scss'
import './ReviewCard.scss'
import '../../styles/fonts.scss'

const Reviews = () => {
    const ReviewCard = ({ thumbnail, name, title, children }) => {
        let childrenWithProps
        if ( Array.isArray(children) ) {
            childrenWithProps = children.map((child, index) => {
                return cloneElement(child, { className: "reviewCard__paragraph", key: index })
            })
        } else {
            childrenWithProps = cloneElement(children, { className: "reviewCard__paragraph" })
        }
        

        return (
            <div className="reviewCard card">
                <div className="reviewCard__person">
                    <img className="reviewCard__thumbnail" src={thumbnail} alt="человек, который оставил отзыв" />
                    <hgroup className="reviewCard__hGroup">
                        <h5 className="reviewCard__name">{name}</h5>
                        <h6 className="text-sm-regular reviewCard__title">{title}</h6>
                    </hgroup>
                </div>
                <div className="reviewCard__divider"></div>
                <div className="reviewCard__pGroup">
                    {childrenWithProps}
                </div>
            </div>
        )
    }

    return (
        <section className="reviews" id="reviews">
            <Container>
                <div className="flex">
                    <Title 
                        title="Что говорят обо мне клиенты"
                        subtitle="Многие из них работают со мной на постоянной основе" />
                        <ul className="reviews__list">
                            <Fade 
                                direction="left"
                                triggerOnce
                            >
                                <li>
                                    <ReviewCard 
                                        thumbnail="./images/ava_1.png"  
                                        name="Мария"
                                        title="Педагог, магистр позитивной психологии">
                                        <p>В течение всего сотрудничества Екатерина проявляла себя с положительной стороны. Показывала быструю обучаемость, пунктуальность. Была внимательна к состояниям и чувствам дочери, заботлива. Демонстрировала высокую заинтересованность и участие в общении.</p>
                                        <p>Оцениваю работу Екатерины положительно и рекомендую.</p>
                                    </ReviewCard>
                                </li>
                            </Fade>
                            <Fade 
                                direction="right"
                                triggerOnce
                            >
                                <li>
                                    <ReviewCard 
                                        thumbnail="./images/ava_2.png"  
                                        name="Елизавета"
                                        title="Мама девочки, 16 месяцев">
                                        <p>Катя отлично держала внимание малышки 16 месяцев на себе, что в присутствии мамы всегда сложно, и дала маме возможность поработать и позаниматься собой. </p>
                                        <p>Катя искупала Нину в ванне и покормила её. Они поиграли в пластилин, почитали книжки. Некоторые игры мне не приходили в голову, взяла на заметку.</p>
                                        <p>Спасибо! Договорились в следующий раз порисовать красками и карандашами :) </p>
                                    </ReviewCard>
                                </li>
                            </Fade>
                            <Fade 
                                direction="left"
                                triggerOnce
                            >
                                <li>
                                    <ReviewCard 
                                        thumbnail="./images/ava_3.png" 
                                        name="Анна"
                                        title="Мама мальчика, 2 года">
                                        <p>Екатерина — прекрасный ситтер. Она инициативная, очень внимательная, активная, отлично поладила с сыном 2 лет. Развлекала, играла с ним на протяжении 4 часов, пока я спокойно занималась своими делами.</p>
                                    </ReviewCard>
                                </li>
                            </Fade> 
                        </ul>
                </div>
            </Container>
        </section>
    )
}

export default Reviews
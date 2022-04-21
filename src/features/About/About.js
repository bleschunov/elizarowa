import Title from "../Title/Title"
import Container from "../Container/Container"
import { Fade } from 'react-awesome-reveal'

import './About.scss'

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <div className="about__flex">
                    <Title 
                        title="Итак, меня зовут Екатерина..."
                        subtitle="Всё, что вы хотите знать обо мне, и даже больше " />
                    <Fade
                        cascade
                        direction="down"
                        damping=".07"
                        triggerOnce
                    >
                        <img className="about__image" src="./images/kateDrawing.png" alt="катя, нарисованная" />
                        <div className="about__pGroup">
                            <p className="about__text">
                                Учусь на третьем курсе психологического факультета. Изучила основы детской психологии и прошла курс первой помощи Красного Креста.
                            </p>
                            <p className="about__text">
                                В свободное время читаю книги, рисую и конструирую из дерева и бумаги. Раз в неделю помогаю в проведении занятий для детей в нко — лепим из глины и рисуем. Мне нравится работать с детьми, потому что получается найти с ними контакт и проводить весело время.
                            </p>
                        </div>
                    </Fade>
                </div>
            </Container>
        </section>
    )
}

export default About
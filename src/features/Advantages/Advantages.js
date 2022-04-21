import { Fade } from 'react-awesome-reveal'
import { forwardRef } from "react"

import './Advantages.scss'
import './AdvantageCard.scss'
import '../../styles/fonts.scss'
import hands from '../../images/hands.png'
import bandage from '../../images/bandage.png'
import child from '../../images/child.png'
import cubes from '../../images/cubes.png'

const Advantages = () => {
    const AdvantageCard = ({ img, title, alt }) => {
        return (
            <div className="advantageCard card">
                <img className="advantageCard__img" src={img} alt={alt} />
                <p className="text-sm-regular advantageCard__title">{title}</p>
            </div>
        )
    }

    return (
        <section className="advantages" >
            <div className="advantages__container">
                <ul className="advantages__list">
                    <Fade
                        cascade
                        damping={0.2}
                        fraction={1}
                        triggerOnce
                    >
                        <li><AdvantageCard img={hands} title="Работаю няней более 2-х лет" alt="руки" /></li>
                        <li><AdvantageCard img={bandage} title="Прошла курс первой помощи Красного креста" alt="пластырь" /></li>
                        <li><AdvantageCard img={child} title="Освоила курс психологии развития" alt="лицо ребёнка" /></li>
                        <li><AdvantageCard img={cubes} title="Через игры помогаю ребёнку развиваться" alt="игрушечные кубики" /></li>
                    </Fade>
                </ul>
            </div>
        </section>
    )
}

export default Advantages
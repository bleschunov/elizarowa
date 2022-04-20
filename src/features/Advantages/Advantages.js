import { Fade } from 'react-awesome-reveal'

import './Advantages.scss'
import './AdvantageCard.scss'
import '../../styles/fonts.scss'

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
        <section className="advantages">
            <div className="advantages__container">
                <ul className="advantages__list">
                    <Fade
                        cascade
                        direction="down"
                        damping={0.07}
                        triggerOnce
                    >
                        <li><AdvantageCard img="/images/hands.png" title="Работаю няней более 2-х лет" alt="руки" /></li>
                        <li><AdvantageCard img="/images/bandage.png" title="Прошла курс первой помощи Красного креста" alt="пластырь" /></li>
                        <li><AdvantageCard img="/images/child.png" title="Специализируюсь на детской психологии" alt="лицо ребёнка" /></li>
                        <li><AdvantageCard img="/images/cubes.png" title="Через игры помогаю ребёнку развиваться" alt="игрушечные кубики" /></li>
                    </Fade>
                </ul>
            </div>
        </section>
    )
}

export default Advantages
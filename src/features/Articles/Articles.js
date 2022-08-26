import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Title from '../Title/Title'

import './Articles.scss'

import article_1 from '../../articles/article_1.pdf'

const Articles = () => {
    return (
        <section className="articles" id="articles">
            <Container>
                <div className="flex">
                    <Title 
                        title="Мои статьи"
                        subtitle="Доступны к распространению" />

                    <ul>
                        <li className="articles__article">
                            <a href={article_1} target="_blank">
                                <Icon className="articles__doc" name="doc" />
                                Кризис, изменения и регрессия
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Articles
import './Title.scss'
import '../../styles/fonts.scss';

const Title = ({ title, subtitle }) => {


    return (
        <hgroup className="title">
            <h3 className="title__title">{title}</h3>
            <h4 className="title__subtitle">{subtitle}</h4>
        </hgroup>
    )
}

export default Title
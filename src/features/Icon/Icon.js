import classNames from 'classnames'
import sprite from '../../sprite.svg'

const Icon = ({ name, className, color='black', width='32', height='32', ...props }) => {
    const classes = classNames('icon', className)

    const style = { 
        color,
        width: `${width}px`, 
        height: `${height}px` 
    }

    return (
        <svg 
            className={classes} 
            style={style}
            {...props}>
            <use xlinkHref={`${sprite}#${name}`}></use>
        </svg>
    )
}

export default Icon
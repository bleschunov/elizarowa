import classNames from 'classnames'

const Icon = ({ name, className, color='black', width='32', height='32' }) => {
    const classes = classNames('icon', className)

    const style = { 
        color, 
        width: `${width}px`, 
        height: `${height}px` 
    }

    return (
        <svg className={classes} style={style}>
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    )
}

export default Icon
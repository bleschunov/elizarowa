import classNames from "classnames"
import PropTypes from 'prop-types'

import './Button.scss'


const Button = ({ className, hierarchy, type, size, children, icon, disabled, href }) => {
    const classes = classNames(
        className,
        'button',
        `button_${hierarchy}`,
        `button_${size}`,
        {
            [`button_${size}_onlyIcon`]: !children
        }
    )


    if (!href) {
        return (
            <button className={classes} type={type} disabled={disabled}>
                {icon}
                {children}
            </button>
        )
    } else {
        return (
            <a href={href} className={classes} type={type} disabled={disabled}>
                {icon}
                {children}
            </a>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    icon: PropTypes.element,
    disabled: PropTypes.bool
}

export default Button
import classNames from "classnames"
import PropTypes from 'prop-types'

import './Button.scss'


const Button = ({ className, type, size, children, icon, disabled }) => {
    const classes = classNames(
        className,
        'button',
        `button_${type}`,
        `button_${size}`,
        {
            [`button_${size}_onlyIcon`]: !children
        }
    )

    return (
        <button className={classes} disabled={disabled}>
            {icon}
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    icon: PropTypes.element,
    disabled: PropTypes.bool
}

export default Button
import classNames from "classnames"
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'

import './Button.scss'


const Button = ({ className, hierarchy, type, size, children, icon, disabled, href, component }) => {
    const classes = classNames(
        className,
        'button',
        `button_${hierarchy}`,
        `button_${size}`,
        {
            [`button_${size}_onlyIcon`]: !children
        }
    )


    if (component === 'a') {
        return (
            <a href={href} className={classes} type={type} disabled={disabled} target="_blank">
                {icon}
                {children}
            </a>
        )
    } else if (component === 'link') {
        return (
            <Link to={href} className={classes} type={type} disabled={disabled}>
                {icon}
                {children}
            </Link>
        )
    } else {
        return (
            <button className={classes} type={type} disabled={disabled}>
                {icon}
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    icon: PropTypes.element,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    component: "button"
}

export default Button
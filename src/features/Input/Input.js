import classNames from "classnames"
import { useRef, useState } from "react"

import Icon from '../Icon/Icon'

import './Input.scss'
import vars from '../../styles/vars.scss'

const Input = ({ className, type, label, placeholder, hint, iconBefore, onKeyDown, dropdownWindow }) => {
    const [state, setState] = useState(false)
    const [value, setValue] = useState('')
    const [message, setMessage] = useState(hint)

    const input = useRef()
    
    const onFocus = () => {
        setState('focus')
        setMessage(hint)
        input.current.select()
    }

    const onBlur = () => {
        setState(false)
    }

    const onInput = (event) => {
        const { value } = event.target
        setValue(value)
    }

    const classes = classNames(className, 'input', {[`input_${state}`]: state})
    return (
        <div className={classes}>
            <label className="input_label" htmlFor="input">{label}</label>
            <div className="input__box">
                {iconBefore ? <Icon name={iconBefore.name} width="16" height="16" color={iconBefore.color} /> : null}
                <input 
                    className="input__input"
                    name="input"
                    ref={input}
                    onChange={onInput}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    autoComplete="off"
                    disabled={state === 'disabled'} />
                {state === 'success' ? <Icon name="success" width="16" height="16" color={vars.success500} /> : null}
                {state === 'error' ? <Icon name="error" width="16" height="16" color={vars.error500} /> : null}
                {state === 'focus' ? dropdownWindow : null}
            </div>
            <p className="input__hint">{message}</p>
        </div>
    )
}

export default Input
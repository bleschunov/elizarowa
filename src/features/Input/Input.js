import classNames from 'classnames'
import { useField } from 'formik'
import { useRef } from 'react'

import './styles/Input.scss'
import SUCCESS_ERROR_ICONS from './_SuccessErrorIcons'
import INPUT_LAYOUT from './_InputLayout'

const Input = ({ className, state, type, name, placeholder, label, hint, iconBefore }) => { 
    const [field, { error, touched }] = useField(name)   
    
    const inputRef = useRef()

    const classes = classNames(className, 'input', { 'input_error': touched && error })

    return (
        <INPUT_LAYOUT 
            className={classes}
            label={label}
            touched={touched}
            error={error}
            hint={hint}
            iconBefore={iconBefore}>
            <input 
                {...field}
                className="input__input"
                ref={inputRef}
                type={type} 
                placeholder={placeholder}
                autoComplete="off"
                disabled={state === 'disabled'} />
            <SUCCESS_ERROR_ICONS state={state} />
        </INPUT_LAYOUT>
    )
}

export default Input
import classNames from 'classnames'
import useDropdownWindow from './hooks/useDropdownWindow'
import { useField } from 'formik'
import { useRef } from 'react'

import INPUT_LAYOUT from './_InputLayout'
import SUCCESS_ERROR_ICONS from './_SuccessErrorIcons'
import Icon from '../Icon/Icon'

import './styles/Input.scss'
import vars from '../../styles/vars.scss'

const Select = ({ className, state, name, label, hint, iconBefore, options }) => {
    const [field, { error, touched }, { setValue }] = useField(name)   

    const classes = classNames(className, 'input', { 'input_error': touched && error })

    const inputRef = useRef()

    const { 
        itemsRef, 
        dropdownWindowRef, 
        onSelectItem, 
        onKeyDown,
        setFocusedItem } = useDropdownWindow({ options, setValue, inputRef })
    
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
                className="input__input input__input_select"
                ref={inputRef}
                onKeyDown={onKeyDown}
                autoComplete="off"
                disabled={state === 'disabled'}
                readOnly />
            <SUCCESS_ERROR_ICONS state={state} />
            <div className="input__window" ref={dropdownWindowRef}>
                <ul className="input__list">
                    {options?.map((option, index) => (
                        <li 
                            key={index}
                            ref={item => itemsRef.current[index] = item}
                            className="input__item"
                            onMouseOver={() => setFocusedItem(-1)}
                            onMouseDown={event => event.preventDefault()}
                            onClick={() => onSelectItem(option)}>
                                {option}
                        </li>
                    ))}
                </ul>
            </div>
            <Icon 
                className="input__icon_arrow" 
                name="arrowDown" 
                width="14" 
                height="14" 
                color={vars.accent}
                // Если активный элемент не инпут
                // Отменим событие блюр при клике
                // И сфокусим инпут
                onMouseDown={event => {
                    if (document.activeElement !== inputRef.current) {
                        event.preventDefault()
                        inputRef.current.focus()
                    }
                }} />
        </INPUT_LAYOUT>
    )
}

export default Select
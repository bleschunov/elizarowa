import { useState, useRef, useEffect } from 'react'

// value для фильтрации списка
// setValue для выбора нужного значения из списка
// options содержит элементы списка
// input для снятия фокусировки с инпута
const useDropdownWindow = (options, input, value, setValue) => {
    
    const [filteredOptions, setFilteredOptions] = useState(options)
    // -1 означает, что никакой элемент не выделен
    const [focusedItem, setFocusedItem] = useState(-1)
    const [boundaryItems, setBoundaryItems] = useState({top: 0, bottom: 4})

    console.log(filteredOptions)

    // Для скролла
    const dropdownWindowRef = useRef()
    // Для изменения классов выделения
    const items = useRef([])
    
    // Снять выделения со всех элементов
    const blurAllItems = () => {
        items.current.forEach(item => item?.classList.remove('input__item_focused'))
    }

    // Выделить элемент в индексом index
    const selectFocusedItem = (index) => {
        items.current[index].classList.add('input__item_focused')
    }

    const onKeyDown = (event) => {
        // Если нажали стрелку вниз, то мы листаем вниз
        // Либо попадаем на первый элемент
        if (event.code === 'ArrowDown') {
            event.preventDefault()
            setFocusedItem(value => {
                let newValue
                if (value === -1) newValue = 0
                else newValue = value === filteredOptions.length - 1 ? 0 : value + 1

                blurAllItems()
                selectFocusedItem(newValue)

                return newValue
            })
        }

        // Если нажали стралку вверх, то мы листаем вверх
        // Либо попадает на последний элемент
        if (event.code === 'ArrowUp') {
            event.preventDefault()
            
            setFocusedItem(value => {
                let newValue
                if (value === -1) newValue = filteredOptions.length - 1
                else newValue = value === 0 ? filteredOptions.length - 1 : value - 1
                
                blurAllItems()
                selectFocusedItem(newValue)

                return newValue
            })
        }

        // Если мы нажали энтер и если есть выделенный элемент
        // Мы ставим значение элемента в инпут
        if (event.code === 'Enter' && focusedItem !== -1) {
            setValue(filteredOptions[focusedItem])
            input.current.blur()
        }
    }

    const onSelectItem = (event) => {
        setValue(event.target.textContent)
        input.current.blur()
    }

    // Если меняется значение в инпуте, мы фильтруем значения
    useEffect(() => {
        setFilteredOptions(options?.filter(option => {
            return new RegExp(`^${value}`).test(option) || option.includes(value)
        }))
    }, [value])
    // Когда отфильтровали значения, мы правим объект с якорями
    // А также снимаем выделение со всех значений
    useEffect(() => {
        items.current = items.current.slice(0, filteredOptions?.length)
        setFocusedItem(-1)
        blurAllItems()
    }, [filteredOptions])

    // Если какой-либо элемент выделен
    // Мы проверяем, находится ли этот элемент в видимой зоне
    // Если нет, то мы меняем границы выдимой зоны
    useEffect(() => {
        const isFocusedItemOutsideVisibleArea = focusedItem < boundaryItems.top || focusedItem > boundaryItems.bottom
        if (focusedItem !== -1 && isFocusedItemOutsideVisibleArea) {
            setBoundaryItems((prev) => {
                // Смотрим в какую сторону подвинуть границы видимой зоны
                if (Math.abs(prev.bottom - focusedItem) < Math.abs(prev.top - focusedItem)) {
                    return {
                        top: focusedItem - 4,
                        bottom: focusedItem
                    }
                } else {
                    return {
                        top: focusedItem,
                        bottom: focusedItem + 4
                    }
                }
            })
        }

        if (focusedItem === -1) {
            items.current.forEach(item => item?.classList.remove('input__item_focused'))
        }
    }, [focusedItem])
    // Когда мы поменяли границы видимой зоны,
    // Мы реализуем эти границы с помощью скролла окна с значениями
    useEffect(() => {
        if (items.current.length !== 0) {
            const itemHeight = parseInt(window.getComputedStyle(items.current[0]).height)

            dropdownWindowRef.current.scroll({
                top: boundaryItems.top * itemHeight
            })
        }
    }, [boundaryItems])

    const dropdownWindow = (
        <div className="input__window" ref={dropdownWindowRef}>
            <ul className="input__list">
                {filteredOptions?.map((option, index) => (
                    <li 
                        key={index}
                        ref={item => items.current[index] = item}
                        className="input__item"
                        onMouseOver={() => setFocusedItem(-1)}
                        onMouseDown={event => event.preventDefault()}
                        onClick={onSelectItem}>
                            {option}
                    </li>
                ))}
            </ul>
        </div>
    )

    return {
        onKeyDown,
        dropdownWindow
    }
}

export default useDropdownWindow

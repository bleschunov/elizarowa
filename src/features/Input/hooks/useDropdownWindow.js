import { useState, useEffect, useRef } from 'react'

const useDropdownWindow = ({ options, setValue, inputRef}) => {
    // -1 означает, что никакой элемент не выделен
    const [focusedItem, setFocusedItem] = useState(0)
    const [boundaryItems, setBoundaryItems] = useState({top: 0, bottom: 4})

    // Для скролла
    const dropdownWindowRef = useRef()
    // Для изменения классов выделения
    const itemsRef = useRef([])
    
    // Снять выделения со всех элементов
    const blurAllItems = () => {
        itemsRef.current.forEach(item => item?.classList.remove('input__item_focus'))
    }

    // Выделить элемент с индексом index
    const selectFocusedItem = (index) => {
        itemsRef.current[index].classList.add('input__item_focus')
    }

    const onKeyDown = (event) => {
        // Если нажали стрелку вниз, то мы листаем вниз
        // Либо попадаем на первый элемент
        if (event.code === 'ArrowDown') {
            event.preventDefault()
            setFocusedItem(value => {
                let newValue
                if (value === -1) newValue = 0
                else newValue = value === options.length - 1 ? 0 : value + 1

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
                if (value === -1) newValue = options.length - 1
                else newValue = value === 0 ? options.length - 1 : value - 1
                
                blurAllItems()
                selectFocusedItem(newValue)

                return newValue
            })
        }

        // Если мы нажали энтер и если есть выделенный элемент
        // Мы ставим значение элемента в инпут
        if (event.code === 'Enter') {
            if (focusedItem !== -1) {
                // console.log(focusedItem)
                onSelectItem(options[focusedItem])
            } else {
                dropdownWindowRef.current.scroll({ top: 0 })
                inputRef.current.blur()
            }
        }
    }

    const onSelectItem = value => {
        setValue(value)
        setFocusedItem(0)
        blurAllItems()
        selectFocusedItem(0)
        dropdownWindowRef.current.scroll({ top: 0 })
        inputRef.current.blur()
    }

    // Если какой-либо элемент выделен
    // Мы проверяем, находится ли этот элемент в видимой зоне
    // Если нет, то мы меняем границы выдимой зоны
    useEffect(() => {
        const isFocusedItemOutsideVisibleArea = 
            focusedItem < boundaryItems.top || focusedItem > boundaryItems.bottom
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
            itemsRef.current.forEach(item => item?.classList.remove('input__item_focused'))
        }
    }, [focusedItem])
    // Когда мы поменяли границы видимой зоны,
    // Мы реализуем эти границы с помощью скролла окна с значениями
    useEffect(() => {
        if (itemsRef.current.length !== 0) {
            const itemHeight = parseInt(window.getComputedStyle(itemsRef.current[0]).height)

            dropdownWindowRef.current.scroll({
                top: boundaryItems.top * itemHeight
            })
        }
    }, [boundaryItems])

    // Когда отфильтровали значения, мы правим объект с якорями
    // А также снимаем выделение со всех значений
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, options?.length)
        setFocusedItem(0)
        blurAllItems()
        selectFocusedItem(0)
    }, [options])

    return {
        itemsRef, 
        dropdownWindowRef, 
        onSelectItem, 
        onKeyDown, 
        setFocusedItem }
}

export default useDropdownWindow
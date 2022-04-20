import { useState, useEffect } from 'react'

const useFilterOptionsOnInput = ({ options, value }) => {
    const [filteredOptions, setFilteredOptions] = useState(options)

    // Если меняется значение в инпуте, мы фильтруем значения
    useEffect(() => {
        setFilteredOptions(options?.filter(option => {
            return new RegExp(`^${value}`).test(option) || option.includes(value)
        }))
    }, [value])

    return {
        filteredOptions
    }
}

export default useFilterOptionsOnInput
import { useState } from 'react'

const useInput = (hint, ) => {
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
}
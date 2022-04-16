import Input from "./Input";
import useDropdownWindow from "./useDropdownWindow";

const DropdownInput = (props) => {
    const { options, input, value, setValue } = props
    const dropdownWindowOptions = useDropdownWindow(options, input, value, setValue)

    return (
        <Input {...props} {...dropdownWindowOptions} />
    )
}

export default DropdownInput
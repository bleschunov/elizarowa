import { useField } from "formik"

import './Checkbox.scss'
import '../../styles/fonts.scss'

const Checkbox = ({ name, text, helper }) => {
    const [field] = useField({ name, type: 'checkbox' })

    return (
        <div className="checkbox">
            <input className="checkbox__checkbox" {...field} type="checkbox" />
            <div className="checkbox__pGroup">
                <p className="text-md-medium checkbox__text">{text}</p>
                <p className="text-md-regular checkbox__helper">{helper}</p>
            </div>
        </div>
    )
}

export default Checkbox
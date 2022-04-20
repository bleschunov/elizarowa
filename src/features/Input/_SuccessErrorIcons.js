import Icon from '../Icon/Icon'

import vars from '../../styles/vars.scss'

const SUCCESS_ERROR_ICONS = ({ state }) => {
    return (
        <>
            {state === 'success' ? <Icon name="success" width="16" height="16" color={vars.success500} /> : null}
            {state === 'error' ? <Icon name="error" width="16" height="16" color={vars.error500} /> : null}
        </>
    )
}

export default SUCCESS_ERROR_ICONS
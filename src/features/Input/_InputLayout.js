import Icon from '../Icon/Icon'

const INPUT_LAYOUT = ({ className, label, touched, error, hint, iconBefore, children }) => {
    return (
        <div className={className}>
            <label className="input__label">{label}</label>
            <div className="input__box">
                {iconBefore ? <Icon name={iconBefore.name} width="16" height="16" color={iconBefore.color} /> : null}
                {children}
            </div>
            <p className="input__hint">{touched ? error || hint : hint}</p>
        </div>
    )
}

export default INPUT_LAYOUT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCity, faRoad } from '@fortawesome/free-solid-svg-icons'


function renderIcon(icon) {
    if (icon === "email") {
        return <FontAwesomeIcon icon={ faEnvelope } className="form__icon"/>
    }

    if (icon === "password") { 
        return  <FontAwesomeIcon icon={ faLock } className="form__icon"/> 
    }

    if (icon === "username") { 
        return  <FontAwesomeIcon icon={ faUser } className="form__icon"/> 
    }

    if (icon === "city") { 
        return  <FontAwesomeIcon icon={ faCity} className="form__icon"/> 
    }

    if (icon === "county") { 
        return  <FontAwesomeIcon icon={ faCity} className="form__icon"/> 
    }

    if (icon === "street") {
        return  <FontAwesomeIcon icon={ faRoad } className="form__icon"/> 
    }
};

const handleType = (showPass) => {
    if (showPass === false) return "password"
    return "text"
}

const Input = ({name, label, value, onChange, error, icon, togglePass, showPass}) => {
    return ( 
        <div className="form__group">
            {renderIcon(icon)}
            {name === "password" && togglePass}
            {name === "repeat_password" && togglePass}

            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} 
                name={name} 
                value={value} 
                className="form-control"
                autoFocus={name === "email" ? true : false}
                type={name === "password" || name === "repeat_password"? handleType(showPass) : "text"} 
                id={name}
                placeholder={name === "repeat_password" ? "Confirma Parola" : `Introdu ${label}`} />

            {error && <div className="alert__input">{error}</div>}
        </div>
    )
}

export default Input
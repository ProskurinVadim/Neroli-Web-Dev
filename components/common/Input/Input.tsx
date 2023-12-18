import styles from "./Input.module.scss";

interface IInput {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
    containerClassName?: string,
    error?: string,
    type?: string,
    disabled? : boolean,
}

const Input: React.FC<IInput> = ({ value, onChange, onFocus, onBlur, placeholder, className = "", containerClassName = "", error, type = "text", disabled = false }) => {
    return (
        <div className={`${styles.input_container} ${containerClassName}`} >
            <input onBlur={onBlur} onFocus={onFocus} className={`${styles.input} ${className}`} onChange={onChange} value={value} placeholder={placeholder} type={type} disabled={disabled}/>
            {error && <p className={styles.input_error_text}>{ error }</p>}
        </div>
    )
}

export default Input

export {
    styles as inputStyles
}
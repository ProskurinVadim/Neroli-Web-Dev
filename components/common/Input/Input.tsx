import styles from "./Input.module.scss";

interface IInput {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
    containerClassName?: string,
    error?: string,
    type?: string,
}

const Input: React.FC<IInput> = ({ value, onChange, placeholder, className = "", containerClassName = "", error, type = "text" }) => {
    return (
        <div className={`${styles.input_container} ${containerClassName}`} >
            <input className={`${styles.input} ${className}`} onChange={onChange} value={value} placeholder={placeholder} type={type}/>
            {error && <p className={styles.input_error_text}>{ error }</p>}
        </div>
    )
}

export default Input

export {
    styles as inputStyles
}
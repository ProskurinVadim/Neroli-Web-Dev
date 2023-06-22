import styles from "./Input.module.scss";

interface IInput {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
    containerClassName?: string,
    error?: string,
}

const Input: React.FC<IInput> = ({ value, onChange, placeholder, className = "", containerClassName = "" }) => {
    console.log(styles)
    return (
        <div className={`${styles.input_container} ${containerClassName}`} >
            <input className={`${styles.input} ${className}`} onChange={onChange} value={value} placeholder={placeholder} />
            <p className={styles.input_error_text}>This is error.</p>
        </div>
    )
}

export default Input

export {
    styles as inputStyles
}
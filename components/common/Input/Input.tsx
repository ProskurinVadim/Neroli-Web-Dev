import styles from "./Input.module.scss";

interface IInput {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
}

const Input: React.FC<IInput> = ({ value, onChange, placeholder, className = "" }) => {
    return (
        <input className={`${styles.input} ${className}`} onChange = { onChange } value = { value } placeholder = { placeholder } />
    )
}

export default Input

export {
    styles as inputStyles
}
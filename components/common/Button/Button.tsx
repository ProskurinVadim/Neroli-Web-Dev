import styles from "./Button.module.scss";
interface IButton {
    onClick: any,
    text: React.ReactNode | string | null,
    className?: string,
    disabled?: boolean
}

const Button: React.FC<IButton> = ({ text, onClick, className="", disabled }) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`} disabled={disabled}>{text}</button>
    )
}

export default Button

export { styles as buttonStyles} 

import styles from "./Button.module.scss";
interface IButton {
    onClick: any,
    text: React.ReactNode | string | null,
    className?: string,
}

const Button: React.FC<IButton> = ({ text, onClick, className="" }) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>{text}</button>
    )
}

export default Button

export { styles as buttonStyles} 

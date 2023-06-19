import styles from "./Container.module.scss";

interface IContainer {
    className?: string;
    children: React.ReactNode | string | null;
}

const Container: React.FC<IContainer> = ({ children, className="" }) => {
    return (
        <div className={`${styles.container} ${className}`}>{children}</div>
    )
}

export default Container
import styles from "./List.module.scss";

interface IList {
    content: string[],
    className?: string,
}

const List: React.FC<IList> = ({ content, className }) => {
    return (
        <ul className={className}>
            {
                content.map((elem,i) =>
                    <li className={`medium_text ${styles.list_item}`} key={`list-item-${i}`}>{elem}</li>
                )
            }
        </ul>
    )
}

export default List
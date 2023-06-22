import styles from "../Post.module.scss";

interface IText {
    name: string,
    characteristics: string[],
    description: string,
    description_additional: string
}

const TextBlock: React.FC<IText> = ({ name, characteristics=[], description, description_additional }) => {
    return (
        <div>
            <h4 className="medium_text">{name}</h4>
            <ul className={styles.post_text_list}>
                {characteristics.map((elem, i) =>
                    <li key={`list-item-${i}`} className="medium_text">{elem}</li>
                )}
            </ul>
            <p className={`medium_text ${styles.post_medium_text}`}>{description}</p>
            <p className="medium_text">{description_additional}</p>
        </div>
    )
}

export default TextBlock
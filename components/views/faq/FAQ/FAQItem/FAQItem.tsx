import styles from "../FAQ.module.scss";
import { Plus, Minus } from "../../../../icons";

interface IItem {
    active: boolean;
    Question: string;
    Answer: string;
    setActive: () => void
}

const FAQItem: React.FC<IItem> = ({ active, Question, Answer, setActive }) => {
    return (
        <li onClick={setActive} className={styles.faq_list_item}>
            <div className={styles.faq_list_item_content}>
                <h3 className={"medium_text medium_text__bold"}>{Question}</h3>
                <span className={styles.faq_list_item_icon}>{active ? <Minus /> : <Plus />}</span>
            </div>
            {active && <p className={`medium_text ${styles.medium_text}`}>{Answer}</p>}
        </li>
    )
}

export default FAQItem
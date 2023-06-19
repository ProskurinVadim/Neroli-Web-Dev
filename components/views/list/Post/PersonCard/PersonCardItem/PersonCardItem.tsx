import styles from "../../Post.module.scss"
interface IPersonCardItem {
    icon: any,
    text: string
}
const PersonCardItem: React.FC<IPersonCardItem> = ({ icon, text }) => {
    return (
        <p className={`medium_text medium_text__bold ${styles.person_card_item}`}>{icon}{text}</p>
    )
}

export default PersonCardItem
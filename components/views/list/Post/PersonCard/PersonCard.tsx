import Avatar from "../../../../shared/Person/Avatar";
import Button, { buttonStyles } from "../../../../common/Button/Button";
import styles from "../Post.module.scss";
import { IAvatar } from "../../../../../types";
import { Key, Calendar, Eye, WhatsappUnfill, Phone } from "../../../../icons"
import PersonCardItem from "./PersonCardItem";

const personArr = [
    { icon: <Eye />, text: "Arrange a viewing, 24/7"},
    { icon: <Calendar />, text: "Choose a date & time" },
    { icon: <Key />, text: <>Need to sell first?  <span className="text__underlining">Book a valuation</span></>},
]

const PersonCard: React.FC<IAvatar> = ({ image, name, job}) => {
    const onClick = () => {
        console.log("click")
    }
    return (
        <div className={styles.person_card}>
            <Avatar image={image} name={name} job={job} />
            <div className={styles.buttons_div}>
                <Button onClick={onClick} text={<><WhatsappUnfill /> Whatsapp</>} className={buttonStyles.button__whatsapp} />
                <Button onClick={onClick} className={buttonStyles.button__recall} text={<><Phone /> Call us</>} />
            </div>
            {
                personArr.map((elem,i) => <PersonCardItem {...elem} key={`person-item-${i}`}/>)
            }
            <Button onClick={onClick} text="Book a Viewing" className={styles.button} />
            <Button onClick={onClick} className={`${buttonStyles.button__transparent} ${styles.button}`} text="Download presentation" />
        </div>
    )
}

export default PersonCard
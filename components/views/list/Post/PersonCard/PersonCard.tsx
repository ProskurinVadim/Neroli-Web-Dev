import Avatar from "../../../../shared/Person/Avatar";
import Button, { buttonStyles } from "../../../../common/Button/Button";
import styles from "../Post.module.scss";
import Link from "next/link";
import { IAvatar } from "../../../../../types";
import { Key, Calendar, Eye, WhatsappUnfill, Phone } from "../../../../icons"
import PersonCardItem from "./PersonCardItem";

const personArr = [
    { icon: <Eye />, text: "Arrange a viewing, 24/7"},
    { icon: <Calendar />, text: "Choose a date & time" },
    {
        icon: <Key />, text: <>Need to sell first?&nbsp;<span className="text__underlining"><Link href="/book" className="link_unset">Book a valuation</Link></span></>
    },
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
            <a href={`https://neroli-admin.onrender.com/api/items/8/presentation`} target="_blank"><Button onClick={onClick} className={`${buttonStyles.button__transparent} ${styles.button}`} text="Download presentation" /></a>
        </div>
    )
}

export default PersonCard
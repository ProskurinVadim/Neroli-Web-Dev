import Avatar from "../../../../shared/Person/Avatar";
import Link from "next/link";
import Button, { buttonStyles } from "../../../../common/Button/Button";
import styles from "../Post.module.scss";
import { IAvatar } from "../../../../../types";
import { Key, Calendar, Eye, WhatsappUnfill, Phone } from "../../../../icons"
import PersonCardItem from "./PersonCardItem";

const getData = (onClick: any) => [
    { icon: <Eye />, text: "Arrange a viewing, 24/7"},
    { icon: <Calendar />, text: "Choose a date & time" },
    {
        icon: <Key />, text: <>Need to sell first?&nbsp;<span className="text__underlining" onClick={onClick}>Book a valuation</span></>
    },
]

const PersonCard: React.FC<IAvatar> = ({ image,  name, job, id, onClick, whatsapp, phone }) => {
    // const onClick2 = () => {}
    const data = getData(onClick)
    return (
        <div className={styles.person_card}>
            <Avatar image={image} name={name} job={job} />
            <div className={styles.buttons_div}>
                {whatsapp && <Link className={styles.link} target="_blank" href={whatsapp}><Button onClick={()=> {}} text={<><WhatsappUnfill /> Whatsapp</>} className={buttonStyles.button__whatsapp} /></Link>}
                {phone && <Link className={styles.link} target="_blank" href={`tel:${phone}`}><Button onClick={()=> {}} className={buttonStyles.button__recall} text={<><Phone /> Call us</>} /></Link>}
            </div>
            {
                data.map((elem,i) => <PersonCardItem {...elem} key={`person-item-${i}`}/>)
            }
            <Button onClick={onClick} text="Book a Viewing" className={styles.button} />
            <a href={`https://neroli-admin.onrender.com/api/items/${id}/presentation`} target="_blank"><Button onClick={onClick} className={`${buttonStyles.button__transparent} ${styles.button}`} text="Download presentation" /></a>
        </div>
    )
}

export default PersonCard
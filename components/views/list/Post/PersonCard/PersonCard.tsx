import {useState, useEffect} from "react";
import Avatar from "../../../../shared/Person/Avatar";
import Link from "next/link";
import Image from 'next/image';
import Button, { buttonStyles } from "../../../../common/Button/Button";
import styles from "../Post.module.scss";
import { IAvatar } from "../../../../../types";
import { Key, Calendar, Eye, WhatsappUnfill, Phone } from "../../../../icons"
import PersonCardItem from "./PersonCardItem";
import icon from "./preloader.svg";

const getData = (onClick: any) => [
    { icon: <Eye />, text: "Arrange a viewing, 24/7"},
    { icon: <Calendar />, text: "Choose a date & time" },
    {
        icon: <Key />, text: <>Need to sell first?&nbsp;<span className="text__underlining" onClick={onClick}>Book a valuation</span></>
    },
]

const PersonCard: React.FC<IAvatar> = ({ image,  name, job, id, onClick, whatsapp, phone }) => {
    // const onClick2 = () => {}
    const [showPreloader, setShowPreloader] = useState(false);
    const data = getData(onClick);

    useEffect(()=> {
        if(showPreloader) {
            setTimeout(()=> setShowPreloader(false), 15000)
        }
    }, [showPreloader])

    const togglePreloader = (e)=> {
        // if(e) {
        //     e.preventDefault();
        // }
        setShowPreloader(prevState => !prevState);
    };

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
            {/*<a href={`https://pdf-presentation.onrender.com/api/presentation/${id}`}><Button onClick={()=>{}} className={`${buttonStyles.button__transparent} ${styles.button}`} text="Download presentation" /></a>*/}
            <a onClick={togglePreloader} href={`https://pdf-presentation.onrender.com/api/presentation/${id}`} className={`${styles.download} ${styles.button} ${showPreloader ? styles.load : ""}`}>
                {showPreloader ? <Image
                    priority
                    width={40}
                    height={40}
                    src={icon}
                    alt="preloader"
                /> : "Download presentation"}
            </a>
            {showPreloader && <p className={styles.preloaderText}>It can take up to 1 minute to generate a presentation.</p>}
            {/*<a href={`http://localhost:4000/api/presentation/${id}`}><Button onClick={()=>{}} className={`${buttonStyles.button__transparent} ${styles.button}`} text="Download presentation" /></a>*/}
        </div>
    )
}

export default PersonCard
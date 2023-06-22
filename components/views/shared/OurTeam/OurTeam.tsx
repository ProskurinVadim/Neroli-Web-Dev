"use client"
import { useState } from "react";
import Link from 'next/link';
import Container from "../../../../hoc/Container";
import Person from "../../../shared/Person";
import { Toggler } from "../../../common";
import { buttonStyles } from "../../../common/Button/Button";
import { getFullData, getShortData } from "./getData";
import styles from "./OurTeam.module.scss";

interface IOurTeam {
    fullCard: boolean
}
const OurTeam: React.FC<IOurTeam> = ({ fullCard=false }) => {
    const [active, setActive] = useState<string>("Managers");
    const config = {
        time: 50000,
        pagination: {
            withArrows: true,
            maxPages: 4,
            numerical: false,
        }
    };
    const data = fullCard ? getFullData : getShortData;
    return (
        <section>
            <Container>
                <h2 className="section_header">Our Team</h2>
                <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>Our team consists exclusively of professionals.</p>
                {fullCard && <Toggler active={active} setActive={setActive} array={["Managers", "Directors", "Marketing", "ETC"]} className={styles.toggler} />}
                <div className={styles.team_list}>
                    {data.map((elem: any, i) => <Person {...elem} key={`person-item-${i}`}/> )}
                </div>
                {!fullCard && <Link href="/our-team" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>Our team</Link>}
            </Container>
        </section>
    )
};

export default OurTeam
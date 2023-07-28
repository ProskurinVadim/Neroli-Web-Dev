"use client"
import { useState } from "react";
import Link from 'next/link';
import Container from "../../../../hoc/Container";
import Person from "../../../shared/Person";
import { Toggler } from "../../../common";
import { buttonStyles } from "../../../common/Button/Button";
import styles from "./OurTeam.module.scss";

interface IOurTeam {
    fullCard: boolean,
    team: any[],
}
const equal: any = {
    "Managers": "Manager",
    "Directors": "Director",
    "Marketing": "Marketing",
}
const etc = ["Manager", "Director", "Marketing"];

const OurTeam: React.FC<IOurTeam> = ({ fullCard = false, team }) => {
    const [active, setActive] = useState<string>("Managers");
    const data = !fullCard ? team : team.filter(elem => active !== "ETC" ? elem.person.job === equal[active] : !etc.includes(elem.person.job));

    return (
        <section className="section__padding">
            <Container>
                <h2 className="section_header">Our Team</h2>
                <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>Our team consists exclusively of professionals.</p>
                {fullCard &&
                    <div className={styles.toggler_container}>
                        <Toggler active={active} setActive={setActive} array={["Managers", "Directors", "Marketing", "ETC"]} className={styles.toggler} />
                    </div>
                 } 
                <div className={styles.team_list}>
                    {data.map((elem: any, i) => <Person {...elem} key={`person-item-${i}`}/> )}
                </div>
                {!fullCard && <Link href="/our-team" className={`${buttonStyles.button} ${buttonStyles.button__link} ${styles.button}`}>All team</Link>}
            </Container>
        </section>
    )
};

export default OurTeam
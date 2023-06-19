"use client"
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Person from "../../../shared/Person";
import { Toggler, Button } from "../../../common";
import { getFullData, getShortData } from "./getData";
import styles from "./OurTeam.module.scss";

interface IOurTeam {
    fullCard: boolean
}
const OurTeam: React.FC<IOurTeam> = ({ fullCard=false }) => {
    const [full, setFull] = useState<boolean>(fullCard);
    const [active, setActive] = useState<string>("Managers");
    const config = {
        time: 50000,
        pagination: {
            withArrows: true,
            maxPages: 4,
            numerical: false,
        }
    };
    const handelSetActive = () => setFull(() => true);
    const data = full ? getFullData : getShortData;
    return (
        <section>
            <Container>
                <h2 className="section_header">Our Team</h2>
                {full && <Toggler active={active} setActive={setActive} array={["Managers", "Directors", "Marketing", "ETC"]} className={styles.toggler} />}
                <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>Our team consists exclusively of professionals.</p>
                <div className={styles.team_list}>
                    {data.map((elem: any, i) => <Person {...elem} key={`person-item-${i}`}/> )}
                </div>
                {!full && <Button onClick={handelSetActive} text="All Team" />}
            </Container>
        </section>
    )
};

export default OurTeam
"use client";

import {useState, useCallback} from "react";

import Avatar from "./Avatar";
import Portal from "@/hoc/Portal";
import PersonModal from "@/components/shared/Person/PersonModal";

import Condition, { If } from "../../../hoc/Conditional/Condition";
import { Facebook, Whatsapp, Instagram, Twitter, Viber, Threads } from "../../icons";
import styles from "./Person.module.scss";

interface IPerson {
	person: {
		image: string,
		name: string,
		job: string;
	}
	description: string
	socialNetworks: {
		facebook?: string,
		instagram?: string,
		whatsapp?: string,
		twitter?: string,
		viber?: string,
		threads?: string,
	}
	className: string
}

const Person: React.FC<IPerson> = ({ person, description, socialNetworks = {}, className = "" }) => {
	const [show, setShow] = useState(false);
	const toggleShow = useCallback(()=> setShow(prevState => !prevState), []);
	return (
		<div className={`${styles.person} ${className}`}>
			<Avatar {...person} />
			<Condition condition={Boolean(Object.keys(socialNetworks).length)}>
				<If>
					<ul className={styles.person_networks}>
						{socialNetworks.facebook && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.facebook}><Facebook /></a>
						</li>}
						{socialNetworks.instagram && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.instagram}><Instagram /></a>
						</li>}
						{socialNetworks.whatsapp && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.whatsapp}><Whatsapp /></a>
						</li>}
						{socialNetworks.twitter && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.twitter}><Twitter /></a>
						</li>}
						{socialNetworks.viber && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.viber}><Viber /></a>
						</li>}
						{socialNetworks.threads && <li className="icon__hover">
							<a target="_blank" href={socialNetworks.threads}><Threads /></a>
						</li>}
					</ul>
				</If>
			</Condition>
			<p onClick={toggleShow} className={`${styles.person_description}`}>{description}</p>
			{show && <Portal>
				<div className={styles.person_modal_container}>
					<PersonModal onClose={toggleShow} person={person} description={description} className={className} />
				</div>
			</Portal>}
		</div>
	)
}

export {
	styles as personStyles
}
export default Person
import Avatar from "./Avatar";
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

const Person: React.FC<IPerson> = ({ person, description, socialNetworks = {}, className }) => {
	return (
		<div className={`${styles.person} ${className}`}>
			<Avatar {...person} />
			<Condition condition={Boolean(Object.keys(socialNetworks).length)}>
				<If>
					<ul className={styles.person_networks}>
						{socialNetworks.facebook && <li className="icon__hover">
							<a href={socialNetworks.facebook}><Facebook /></a>
						</li>}
						{socialNetworks.instagram && <li className="icon__hover">
							<a href={socialNetworks.instagram}><Instagram /></a>
						</li>}
						{socialNetworks.whatsapp && <li className="icon__hover">
							<a href={socialNetworks.whatsapp}><Whatsapp /></a>
						</li>}
						{socialNetworks.twitter && <li className="icon__hover">
							<a href={socialNetworks.twitter}><Twitter /></a>
						</li>}
						{socialNetworks.viber && <li className="icon__hover">
							<a href={socialNetworks.viber}><Viber /></a>
						</li>}
						{socialNetworks.threads && <li className="icon__hover">
							<a href={socialNetworks.threads}><Threads /></a>
						</li>}
						{/*<li className="icon__hover">*/}
						{/*	<Linkedin />*/}
						{/*</li>*/}
						{/*<li className="icon__hover"><Whatsapp /></li>*/}
					</ul>
				</If>
			</Condition>
			<p className={styles.person_description}>{description}</p>
		</div>
	)
}

export {
	styles as personStyles
}
export default Person
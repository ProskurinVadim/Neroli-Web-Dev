import Avatar from "./Avatar";
import Condition, { If } from "../../../hoc/Conditional/Condition";
import { Facebook, Whatsapp, Linkedin } from "../../icons";
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
		linkedin?: string,
		whatsapp?: string
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
						<li className="icon__hover"><Facebook /></li>
						<li className="icon__hover"><Linkedin /></li>
						<li className="icon__hover"><Whatsapp /></li>
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
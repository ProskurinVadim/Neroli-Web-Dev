import { Whatsapp, Phone, Key, Eye, Calendar} from "../../../icons";
import Avatar from "../../../shared/Person/Avatar";
import { Button } from "../.../../../../common";

interface IRealtorCard {
	image: string,
	name: string,
	job: string,
}

const RealtorCard: React.FC<IRealtorCard> = ({ image, name, job }) => {
	const dumbFunction = () => console.log("dumb function");
	return (
		<div>
			<Avatar image={image} name={name} job={job} />
			<Button text="Whatsapp" onClick={dumbFunction} />
			<Button text="Call us" onClick={dumbFunction} />
			<p>
				<Eye />
				Arrange a viewing, 24/7
			</p>
			<p>
				<Calendar />
				Choose a date & time
			</p>
			<p>
				<Key />
				Need to sell first? Book a valuation
			</p>
			<Button text="Book a Viewing" onClick={dumbFunction} />
			<Button text="Download presentation" onClick={dumbFunction} />
		</div>
	)
}

export default RealtorCard
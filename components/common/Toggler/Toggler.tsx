import styles from "./Toggler.module.scss";

interface IToggler {
	active: string,
	array: string[],
	setActive: (active: string) => void,
	className?: string
}

const Toggler: React.FC<IToggler> = ({ active, array, setActive, className = "" }) => {
	return (
		<ul className={`${styles.toggler} ${className}`}>
			{
				array.map((elem,i) =>
					<li
						className={`${styles.toggler_item} ${active === elem ? styles.active : ""}`}
						onClick={() => setActive(elem)}
						key={`toggler-item-${i}`}
					>
						{elem}
					</li>
				)
			}
		</ul>
	)
}

export {
	styles as togglerStyles
}
export default Toggler
import styles from "./Select.module.scss";
interface ISelect {
    options: Array<{
        value: string;
        name: string;
    }>,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    className?: string,
}

const Select: React.FC<ISelect> = ({ onChange, label, options, value, className="" }) => {
    return (
        <select value={value} onChange={onChange} className={styles.select}>
            {
                options.map((elem, i) => <option className={styles.select_option} value={elem.value} key={`option-item-${i}`}>{elem.name}</option>)
            }
        </select>
    )
}

export default Select
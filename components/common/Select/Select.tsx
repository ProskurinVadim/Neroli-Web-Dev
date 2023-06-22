"use client"
import { useState } from "react";
import { ArrowBottom, ArrowTop } from "../../icons";
import Condition, { If } from "../../../hoc/Conditional/Condition";
import styles from "./Select.module.scss";
interface ISelect {
    options: Array<{
        value: string;
        name: string;
    }>,
    label: string,
    value: string,
    onChange: (newValue: string) => void,
    className?: string,
    defaultValue: string,
}

const Select: React.FC<ISelect> = ({ onChange, label, options, value, defaultValue = "", className = "", }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);
    const handelChange = (newValue: string) => {
        toggleOpen();
        onChange(newValue);
    }
    const name = value ? options.filter(elem => elem.value === value)[0].name : defaultValue
    return (
        <div onClick={() => toggleOpen()} className={`${styles.select} ${className}`}>
            <p className={styles.select_value}>
                {name}
                {open ? <ArrowBottom /> : <ArrowTop />}
            </p>
            <Condition condition={open}>
                <If>
                    <ul className={styles.select_options_list}>
                        {
                            options.map((elem, i) =>
                                <li
                                    className={`${styles.select_options_list_item} ${elem.value === value ? "active" : ""}`}
                                    onClick={() => handelChange(elem.value)}
                                    key={`option-item-${i}`}
                                >
                                    {elem.name}
                                </li>
                            )
                        }
                    </ul>
                </If>
            </Condition>
        </div>
    )
}

export default Select
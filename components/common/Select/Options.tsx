import { useState, useRef, useEffect } from "react";
import styles from "./Select.module.scss";

interface IOptions {
    options: Array<{
        value: string;
        name: string;
    }>;
    handelChange: (value: string) => void;
    handelClose: () => void;
    value: string;
}
const Options: React.FC<IOptions> = ({ options, handelChange, value, handelClose }) => {
    const ref = useRef<any>(null);
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                handelClose();
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);
	return (
        <ul className={styles.select_options_list} ref={ref}>
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
	)
}

export default Options;
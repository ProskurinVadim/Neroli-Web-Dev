import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import { Search } from "../../icons";
import { inputStyles } from "../../common/Input/Input";
import styles from "./Header.module.scss";

const SearchInput = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toogleOpen = () => setOpen(prev => !prev);
    const { value, setValue } = useInput();
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <div className={styles.header_search}>
            {open && <input value={value} onChange={handelChange} className={`${inputStyles.input} ${styles.header_search_input} `} />}
            <span onClick={toogleOpen} className={styles.header_search_icon}>
                <Search />
            </span>
        </div>
    )
    
}

export default SearchInput
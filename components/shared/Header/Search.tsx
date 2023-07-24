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
        <>
            {open && <input value={value} onChange={handelChange} className={`${inputStyles.input} ${styles.navbar_search_input} `} />}
            <span onClick={toogleOpen} className={styles.navbar_search_icon}>
                <Search />
            </span>
        </>
    )
    
}

export default SearchInput
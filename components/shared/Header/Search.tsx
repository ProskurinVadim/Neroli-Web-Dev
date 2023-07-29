import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import { useRouter } from 'next/navigation';
import { Search } from "../../icons";
import { inputStyles } from "../../common/Input/Input";
import styles from "./Header.module.scss";

const SearchInput = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { value, setValue } = useInput();
    const { push } = useRouter();
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const handelSubmit = () => {
        push(`/blog?title=${value}`)
    }
    const toogleOpen = () => {
        if (open) {
            handelSubmit()
        }
        setOpen(prev => !prev)
    };
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
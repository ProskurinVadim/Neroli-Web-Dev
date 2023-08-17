'use client'

import { useState, useRef, useCallback, useEffect } from "react";
import { useInput } from "../../../hooks/useInput";
import { useRouter } from 'next/navigation';
import { Search } from "../../icons";
import { inputStyles } from "../../common/Input/Input";
import styles from "./Header.module.scss";

const SearchInput = () => {
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef(null);
    const iconRef = useRef(null);

    const { value, setValue } = useInput();
    const { push } = useRouter();
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const closeSearchInput = useCallback((e: any)=> {
        if(e.target !== inputRef.current || !e.target.closet(`.${styles.navbar_search_icon}`)) {
            setOpen(prevState => !prevState);
        }
    }, []);

    useEffect(()=> {
        const body = document.querySelector('body') as HTMLDivElement | null;

        if(body && open) {
            body.addEventListener("click", closeSearchInput);
        }

        if(body && !open) {
            // console.log("close")
            body.removeEventListener("click", closeSearchInput);
        }

    }, [open])


    const handelSubmit = () => {
        setValue("");
        setOpen(false);
        if(value) {
            push(`/blog?title=${value}`);
        }
    }

    const handleKeyDown = (e: any) => {
        if(e.key === "Enter") {
            handelSubmit();
        }
    }

    const toogleOpen = () => {
        if (open) {
            handelSubmit()
        } else {
            setOpen(true)
        }
    };
    return (
        <>
            {open && <input onKeyDown={handleKeyDown} ref={inputRef} value={value} onChange={handelChange} className={`${inputStyles.input} ${styles.navbar_search_input} `} />}
            <span  ref={iconRef} onClick={toogleOpen} className={styles.navbar_search_icon}>
                <Search />
            </span>
        </>
    )
    
}

export default SearchInput
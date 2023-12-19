"use client";
import { useState, useRef, useEffect } from "react";
import Condition, {If} from "@/hoc/Conditional/Condition";
import { useRouter } from 'next/navigation';
import { Button } from "../../../common";
import Toggler, { togglerStyles} from "../../../common/Toggler/Toggler";
import Form, { formStyles } from "../../../shared/Form/Form";
import Link from 'next/link';
import Container from "../../../../hoc/Container";
import { IFormFields } from "../../../../types";
import styles from "./Main.module.scss";
import Input,{ inputStyles } from "../../../common/Input/Input";
import { getAppartments } from "@/utils/fetch";
import { defaultData, getFormData, getModalFormData } from "./getData";

interface IForm {
    building: string,
    rest: string,
}


interface IModalForm {
    property_type: string,
    price_min: string,
    price_max: string,
    beds: string,
}

interface IList {
    id: number,
    title: string,
}


export default function Home() {
    const ref = useRef<any>(null);
    const [active, setActive] = useState<"Residential" | "Commercial" | "Off-plan">("Residential");
    const [value, setValue] = useState<IForm>({ ...defaultData });
    const { push } = useRouter();
    const [modalValue, setmodalValue] = useState<any>({property_type: "", price_min: "", price_max: "", beds:""});
    const [list,setList] = useState<IList[]>([])
    const [open,setOpen] = useState<boolean>(false);
    const [listOpen,setListOpen] = useState<boolean>(false);
    const [selectOpen,setSelectOpen] = useState<boolean | string>(false);
    const fields: any = getFormData(()=>setOpen(true), ()=> setListOpen(true), ()=> setListOpen(false));
    const modlFields: any = getModalFormData(setSelectOpen,selectOpen,active);
    
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                setOpen(()=> false);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    useEffect(()=> {
        if(value.building) {
            const getData = setTimeout(() => {
                getAppartments({type:active,...modalValue, building: value.building}).then(({data})=> {
                    const list = data.map((elem:any) => ({id: elem.id, title : elem.attributes.Title}));
                    setList(list);
                });
            }, 2000);
          return () => clearTimeout(getData)

        }
    },[value.building])

    const handelSetActive = (active: "Residential" | "Commercial" | "Off-plan") => setActive(_ => active);
    const handelSubmit = () => {
        const { building } = value;
        const {property_type, price_min, price_max, beds}  = modalValue;
        let query = `?type=${active}`;
        if (building) {
            query += `&building=${building}`;
        }
        if (isNaN(+property_type) && property_type) {
            query += `&property_type=${property_type}`;
        }
        if (isNaN(+price_min)  && price_min) {
            query += `&price_min=${price_min}`;
        }
        if (isNaN(+price_max) && price_max) {
            query += `&price_max=${price_max}`;
        }
        if (beds) {
            query += `&beds=${beds.replace("Bedrooms ","")}`;
        }
        push(`/list${query}`);
    };
    const onClick = () => false;

    const handelChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setmodalValue((prev_value: any) => {
            const newValue = { ...prev_value };
            newValue[key] = e.target.value;
            const value = Object.values(newValue).filter(elem => elem).join(",");
            setValue((prev:any) => {
                return {
                    ...prev,
                    rest: value
                }
            })
            return { ...newValue }
        })

    };

    return (
        <section className={`${styles.main_page}`}>
            <Container>
                <h2 className={`small_section_header small_section_header__light ${styles.main_sub_header}`}>Welcome to Form Estate</h2>
                <h1 className={styles.main_header}>Find your property</h1>
                <div className={`${styles.toggler_container}`} >
                    <Toggler array={["Residential", "Commercial", "Off-plan"]} active={active} setActive={handelSetActive} className={`${styles.toggler} ${togglerStyles.toggler__fill}`} />
                </div>
                <div className={styles.main_page_search_container}>
                    <Form className={`${formStyles.form__search} ${styles.search}`} fields={fields} onSubmit={handelSubmit} value={value} setValue={setValue}  buttonText="Search">
                        <Condition condition={Boolean(listOpen && list.length)}>
                            <If>
                                <ul className={styles.main_page_search_modal}>
                                    {list.map((elem: any,i) => <li key={"list-item-"+i} className={styles.main_page_search_modal_item}>
                                        <Link href={"/list/"+elem.id}>{elem.title}</Link>
                                    </li>)}
                                </ul>
                        </If>
                        </Condition>
                        <Condition condition={open}>
                            <If>
                                <ul ref={ref} className={styles.main_page_search_select_modal}>
                                    {
                                        modlFields.map((elem: any) => <li>
                                            {elem.render(modalValue[elem.key],handelChange(elem.key))}
                                        </li>)
                                    }
                                </ul>
                            </If>
                        </Condition>
                    </Form>
                </div>
                <p className={`medium_text ${styles.medium_text} medium_text__light`}>Prices are always changing, find out the value of your property today</p>
                <div className={styles.button_wrapper}>
                    <Link href="/contact-us"><Button text="Contact us" onClick={onClick} /></Link>
                </div>

            </Container>
        </section>
    )
}

"use client";
import { useState, useEffect } from "react";
import Form, { formStyles } from "../../../shared/Form/Form";
import Button, { buttonStyles } from "../../../common/Button/Button";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import { getDefaultData, getFormData } from "./getData";
import styles from "./Search.module.scss";
import DrawingMap from "./DrawingMap";
import InfoModal from "./modals/InfoModal";
import { useSearchParams } from "next/navigation";

interface IForm {
    building: string,
    property_type: string,
    price_min: string,
    price_max: string,
    beds: string,
    type?: string
}

interface IMark {
    position: {
        lat: number,
        lng: number
    },
}
interface ISearch {
    onSubmit: (value: IForm) => void;
    onDraw: (body: any, filters: any) => void,
    marks: IMark[]
}

const Search: React.FC<ISearch> = ({ onSubmit, onDraw, marks }) => {

    const searchParams = useSearchParams();
    const [property_type, building, price_min, beds, type] = [
        searchParams.get("property_type"),
        searchParams.get("building"),
        searchParams.get("price_min"),
        searchParams.get("beds"),
        searchParams.get("type")
    ]

    const [value, setValue] = useState<IForm>({ building: "", property_type: "", price_min: "", price_max: "", beds:""});

    const [open, setOpen] = useState<boolean | string>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(true)
    const [mapOpen, setMapOpen] = useState<boolean>(false);

    const fields: any = getFormData(setOpen, open);

    const handelOpen = () => setMapOpen((prev) => !prev);
    const handelSubmit = (value: IForm, type: string | null) => type && onSubmit({ ...value, type });
    const handelDraw = (data: any) => onDraw(data, { ...value, type });
    console.log(type)
    useEffect(() => {
        console.log("sa")
        const initialData = { ...getDefaultData(property_type, building, price_min, beds) };
        setValue(initialData)
        handelSubmit(initialData, type)
    }, [type])
    return (
        <section>
            <Container className={containerStyles.container__overflow_initial}>
                <Form value={value} setValue={setValue} fields={fields} onSubmit={() => handelSubmit(value, type)} className={formStyles.form__search_large} buttonClassName={" "} buttonText={"Search"}>
                    <Button text="More Filters" onClick={handelOpen} className={`${buttonStyles.button__transparent} ${styles.button}`} />
                </Form>
            </Container>
            <DrawingMap visible={mapOpen} onDraw={handelDraw} marks={marks} buttonsVisible={!modalOpen}>
                {modalOpen && <InfoModal setOpen={setModalOpen} />}
            </DrawingMap>
        </section>
    )
}

export default Search
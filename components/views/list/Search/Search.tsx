"use client";
import { useState } from "react";
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
    type: string,
    property_type: string,
    price_min: string,
    price_max: string,
    beds: string,
}

interface ISearch {
    onSubmit: (value: IForm) => void
}

const Search: React.FC<ISearch> = ({ onSubmit }) => {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const property_type = params.get("property_type") || "";

    const [value, setValue] = useState<IForm>({ ...getDefaultData });
    const [open, setOpen] = useState<boolean | string>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(true)
    const [mapOpen, setMapOpen] = useState<boolean>(false);

    const fields: any = getFormData(setOpen, open);

    const handelOpen = () => setMapOpen((prev) => !prev);

    return (
        <section>
            <Container className={containerStyles.container__overflow_initial}>
                <Form value={value} setValue={setValue} fields={fields} onSubmit={onSubmit} className={formStyles.form__search_large} buttonClassName={" "} buttonText={"Search"}>
                    <Button text="More Filters" onClick={handelOpen} className={`${buttonStyles.button__transparent} ${styles.button}`} />
                </Form>
            </Container>
            <DrawingMap visible={mapOpen} >
                {modalOpen && <InfoModal setOpen={setModalOpen} />}
            </DrawingMap>
        </section>
    )
}

export default Search
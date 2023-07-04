"use client";
import { useState } from "react";
import Form, { formStyles } from "../../../shared/Form/Form";
import Button, { buttonStyles } from "../../../common/Button/Button";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import { getDefaultData, getFormData } from "./getData";
import styles from "./Search.module.scss";
import Map from "./Map";

interface IForm {
    building: string,
    type: string,
    property_type: string,
    price_min: string,
    price_max: string,
    beds: string,
}

const Search = () => {
    const [value, setValue] = useState<IForm>({ ...getDefaultData });
    const [open, setOpen] = useState<boolean | string>(false);
    const [mapOpen, setMapOpen] = useState<boolean>(false);
    const fields: any = getFormData(setOpen,open);
    const onSubmit = () => {
        console.log(value)
    };
    const handelOpen = () => setMapOpen((prev) => !prev);
    return (
        <section>
            <Container className={containerStyles.container__overflow_initial}>
                <Form value={value} setValue={setValue} fields={fields} onSubmit={onSubmit} className={formStyles.form__search_large} buttonClassName={" "}>
                    <Button text="More Filters" onClick={handelOpen} className={`${buttonStyles.button__transparent} ${styles.button}`} />
                </Form>
            </Container>
            <Map visible={mapOpen} />
        </section>
    )
}

export default Search
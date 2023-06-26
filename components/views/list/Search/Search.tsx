"use client";
import { useState } from "react";
import Form, { formStyles } from "../../../shared/Form/Form";
import Button, { buttonStyles } from "../../../common/Button/Button";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import { getDefaultData, getFormData } from "./getData";

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
    const [mapOpen, setMapOpen] = useState<boolean | string>(false);
    const fields: any = getFormData(setOpen,open);
    const onSubmit = () => {
        console.log(value)
    };
    const handelOpen = () => setMapOpen((prev) => !prev);
    return (
        <section>
            <Container className={containerStyles.container__overflow_initial}>
                <div className="d_flex_between">
                    <Form value={value} setValue={setValue} fields={fields} onSubmit={onSubmit} className={formStyles.form__search_large} buttonClassName={" "} />
                    <Button text="More Filters" onClick={handelOpen} className={buttonStyles.button__transparent} />
                </div>
                {mapOpen && <p>Map</p>}
            </Container>
        </section>
    )
}

export default Search
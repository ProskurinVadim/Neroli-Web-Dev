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
    const [open, setOpen] = useState<boolean>(false);
    const fields:any = getFormData();
    const onSubmit = () => {
        console.log(value)
    };
    console.log(value)
    const handelOpen = () => setOpen((prev) => !prev);
    return (
        <section>
            <Container className={containerStyles.container__overflow_initial}>
                <div className="d_flex_between">
                    <Form value={value} setValue={setValue} fields={fields} onSubmit={onSubmit} className={formStyles.form__search_large} buttonClassName={" "} />
                    <Button text="More Filters" onClick={handelOpen} className={buttonStyles.button__transparent} />
                </div>
                {open && <p>Map</p>}
            </Container>
        </section>
    )
}

export default Search
import {Input, Select} from "../../../../components/common";
// import Select from 'react-select';

import styles from "./FormContacts/Form.module.scss";
import {formStyles} from "@/components/shared/Form/Form";

const options = [
    { value: 'Subject 1', name: 'Subject 1' },
    { value: 'Subject 2', name: 'Subject 2' },
    { value: 'Subject 3', name: 'Subject 3' }
]

export const containerStyle = {
    width: "100vw",
    height: "556px",
};

export const mobileContainerStyle = {
    width: "100vw",
    height: "772px",
};

export const defaultCenter = {
    lat: 25.0657000,
    lng: 55.1712800,
}

export const getFormData = (setOpen: (open: boolean | string) => void,open:string | boolean) => [
    {
        key: "name",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string) =>
            (<Input value={value} onChange={onChange} placeholder="Full Name" error={error} />)
    },
    {
        key: "email",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string) =>
            (<Input value={value} onChange={onChange} placeholder="Email" error={error} />)
    },
    {
        key: "phone",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string) =>
            (<Input value={value} onChange={onChange} placeholder="Phone" error={error} />)
    },
    {
        key: "subject",
        render: (value: string, onChange: (newValue: string) => void, error: string) =>
            (<Select value={value} label="subject" onChange={onChange} open={open === "subject"} options={options} setOpen={setOpen} defaultValue="Subject 1" />)

    },
    {
        key: "text",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void) =>
            (<textarea className={styles.textarea} value={value} onChange={onChange} placeholder="How can we help?">How can we help?</textarea>)
    }
]

export const defaultData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
}
import {Input} from "../../../../components/common";
import Select from 'react-select';

import styles from "./FormContacts/Form.module.scss";

const options = [
    { value: 'Subject 1', label: 'Subject 1' },
    { value: 'Subject 2', label: 'Subject 2' },
    { value: 'Subject 3', label: 'Subject 3' }
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

export const getFormData = () => [
    {
        key: "name",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Full Name" />)
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
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string) =>
            (<Select options={options} onChange={onChange} />)
    },
    {
        key: "text",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) =>
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
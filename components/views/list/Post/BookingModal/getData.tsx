import { Input } from "../../../../common";

export const getFormData = () => [
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
        key: "adress",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Property Address" />)
    }
]

export const defaultData = {
    name: "",
    email: "",
    phone: "",
    adress: "",
}
import { Input } from "../../../common";
export const getFormData = () => [
    {
        key: "name",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Full Name" />)
    },
    {
        key: "email",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string) =>
            (<Input value={value} onChange={onChange} placeholder="Email" error={error} type="email" />)
    },
]

export const defaultData = {
    name: "",
    email: "",
}
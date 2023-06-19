import { Input, Select } from "../../../common";

const hardcodeOptions = [
    { value: "1", name: "option 1" },
    { value: "2", name: "option 2" },
    { value: "3", name: "option 3" },
    { value: "4", name: "option 4" }
]

export const getFormData = () => [
    {
        key: "building",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Community or building" />)
    },
    {
        key: "type",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) =>
            (<Select value={value} onChange={onChange} label="All" options={hardcodeOptions} />)
    },
    {
        key: "property_type",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) =>
            (<Select value={value} onChange={onChange} label="Property Type" options={hardcodeOptions} />)
    },
    {
        key: "price_min",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) =>
            (<Select value={value} onChange={onChange} label="Price Min" options={hardcodeOptions} />)
    },
    {
        key: "price_max",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) =>
            (<Select value={value} onChange={onChange} label="Price Max" options={hardcodeOptions} />)
    },
    {
        key: "beds",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) =>
            (<Select value={value} onChange={onChange} label="Beds" options={hardcodeOptions} />)
    },
];

export const getDefaultData = {
    building: "asd",
    type: "1",
    property_type: "2",
    price_min: "3", 
    price_max: "4",
    beds: "2",
}
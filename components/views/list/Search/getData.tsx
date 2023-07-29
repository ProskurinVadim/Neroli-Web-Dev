import { Input, Select } from "../../../common";
import { formStyles } from "../../../shared/Form/Form";
import styles  from "./Search.module.scss";

const planOptions = [
    { value: "all", name: "All" },
    { value: "Residental", name: "Residental" },
    { value: "Commercial", name: "Commercial" },
    { value: "Off-plan", name: "Off - Plan" }
];

const bedroomsOptions = [
    { value: "", name: "All" },
    { value: "Studio", name: "Studio" },
    { value: "Bedrooms 1", name: "1 Bedroom" },
    { value: "Bedrooms 2", name: "2 Bedroom" },
    { value: "Bedrooms 3", name: "3 Bedroom" },
    { value: "Bedrooms 4", name: "4 Bedroom" },
    { value: "Bedrooms 5", name: "5 Bedroom" },
    { value: "Bedrooms 6", name: "6 Bedroom" },
    { value: "Bedrooms 7+", name: "7 + Bedroom" },
];;

const price = [
    { value: "", name: "All" },
    { value: "500000", name: "AED 500, 000" },
    { value: "750000", name: "AED 750, 000" },
    { value: "1000000", name: "AED 1, 000, 000" },
    { value: "2000000", name: "AED 2, 000, 000" },
    { value: "3000000", name: "AED 3, 000, 000" },
    { value: "4000000", name: "AED 4, 000, 000" },
    { value: "5000000", name: "AED 5, 000, 000" },
    { value: "6000000", name: "AED 6, 000, 000" },
    { value: "7000000", name: "AED 7, 000, 000" },
    { value: "8000000", name: "AED 8, 000, 000" },
    { value: "9000000", name: "AED 9, 000, 000" },
    { value: "10000000", name: "AED 10, 000, 000" },
    { value: "20000000", name: "AED 20, 000, 000" },
    { value: "30000000", name: "AED 30, 000, 000" },
    { value: "40000000", name: "AED 40, 000, 000" },
    { value: "50000000", name: "AED 50, 000, 000" },
    { value: "60000000", name: "AED 60, 000, 000" },
    { value: "70000000", name: "AED 70, 000, 000" },
    { value: "80000000", name: "AED 80, 000, 000" },
];

const typeOptions = [
    { value: "", name: "All" },
    { value: "Apartment", name: "Apartment" },
    { value: "Villa", name: "Villa" },
    { value: "Townhouse", name: "Townhouse" },

    { value: "Penthouse", name: "Penthouse" },
    { value: "Duplex", name: "Duplex" },
    { value: "Plot", name: "Plot" },
    { value: "Land", name: "Land" }
];
export const getFormData = (setOpen: (open: boolean | string) => void,open:string | boolean) => [
    {
        key: "building",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Community or building" className={formStyles.search_large_input} containerClassName={formStyles.search_large_container} />)
    },
    {
        key: "type",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="all" open={open === "all"} setOpen={setOpen} options={planOptions} defaultValue="All" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },
    {
        key: "property_type",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="type" open={open === "type"} setOpen={setOpen} options={typeOptions} defaultValue="Property Type" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },
    {
        key: "beds",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="beds" open={open === "beds"} setOpen={setOpen} options={bedroomsOptions} defaultValue="Beds" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },
    {
        key: "price_min",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="min" open={open === "min"} setOpen={setOpen} options={price} defaultValue="Price Min" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },
    {
        key: "price_max",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="max" open={open === "max"} setOpen={setOpen} options={price} defaultValue="Price Max" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },
];

export const getDefaultData = {
    building: "",
    type: "",
    beds: "",
    price_min: "",
    price_max: "",
    property_type: "",
}
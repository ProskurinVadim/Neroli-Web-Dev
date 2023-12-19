import { Input, Select } from "../../../common";
import { formStyles } from "../../../shared/Form/Form";
import styles  from "./Search.module.scss";

const planOptions = [
    { value: "", name: "All" },
    { value: "Residential", name: "Residential" },
    { value: "Commercial", name: "Commercial" },
    { value: "Off-plan", name: "Off - Plan" }
];

const bedroomsOptions = [
    { value: "", name: "All" },
    { value: "Studio", name: "Studio" },
    { value: "Bedroom 1", name: "1 Bedroom" },
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


const typeOptions = {
    Residential :[
        { value: "", name: "All" },
        { value: "Apartment", name: "Apartment" },
        { value: "Villa", name: "Villa" },
        { value: "Townhouse", name: "Townhouse" },
        { value: "Penthouse", name: "Penthouse" },
        { value: "Duplex", name: "Duplex" },
        { value: "Plot", name: "Plot" },
        { value: "Land", name: "Land" }
    ],
    Commercial :[
        { value: "", name: "All" },
        { value: "Office space", name: "Office space" },
        { value: "Retail", name: "Retail" },
        { value: "Whole building", name: "Whole building" },
        { value: "Full floor", name: "Full floor" },
        { value: "Plot", name: "Plot" },
        { value: "Factory", name: "Factory" },
        { value: "Half floor", name: "Half floor" },
        { value: "Labor camp", name: "Labor camp" },
        { value: "Staff accomodation", name: "Staff accomodation" },
        { value: "Warehouse", name: "Warehouse" }
    ],
    "Off-plan" :[
        { value: "", name: "All" },
        { value: "Apartment", name: "Apartment" },
        { value: "Villa", name: "Villa" },
        { value: "Townhouse", name: "Townhouse" },
        { value: "Penthouse", name: "Penthouse" },
        { value: "Duplex", name: "Duplex" },
        { value: "Plot", name: "Plot" },
        { value: "Land", name: "Land" }
    ],
};
/*

    {
        key: "type",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="all" open={open === "all"} setOpen={setOpen} options={planOptions} defaultValue="All" className={`${formStyles.search_large_select} ${styles.select}`} />)
    },

 */
export const getFormData = (setOpen: (open: boolean | string) => void,open:string | boolean, active: "Residential" | "Commercial" | "Off-plan") => [
    {
        key: "building",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Community or building" className={formStyles.search_large_input} containerClassName={formStyles.search_large_container} />)
    },
    {
        key: "property_type",
        render: (value: string, onChange: (newValue: string) => void) =>
            (<Select value={value} onChange={onChange} label="type" open={open === "type"} setOpen={setOpen} options={typeOptions[active]} defaultValue="Property Type" className={`${formStyles.search_large_select} ${styles.select}`} />)
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


type queryType = string | null;


const getDefaultBeds = (beds: queryType) => {
    if (beds === null) return ""
    else if (+beds === 0) return "Studio"
    if (+beds <= 6) return `Bedrooms ${beds}`
    else return "Bedrooms 7+"

}
const getDefaultType = (type: queryType, active: "Residential" | "Commercial" | "Off-plan") => {
    let res = "";
    if (type) {
        const match = typeOptions[active].filter(
            elem => elem.value.toLowerCase() === type.toLowerCase()
        );
        res = match[0] ? match[0].value : ""
    }

    return res
}
const getDefaultPrice = (price: queryType, active: "Residential" | "Commercial" | "Off-plan") => {
    if (price) return typeOptions[active].filter(
        elem => elem.value <= price
    )[0].value;

    return ""
}
export const getDefaultData = (property_type: queryType, building: queryType, price_min: queryType, beds: queryType, active: "Residential" | "Commercial" | "Off-plan") => ({
    building: building || "",
    property_type: getDefaultType(property_type, active),
    beds: getDefaultBeds(beds),
    price_min: getDefaultPrice(price_min, active),
    price_max: "",
});
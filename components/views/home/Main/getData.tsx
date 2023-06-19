import Input,{ inputStyles } from "../../../common/Input/Input";
export const getFormData = () => [
    {
        key: "building",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Community or building" className={`${inputStyles.input} ${inputStyles.input_inline} ${inputStyles.input_inline__first}`} />)
    },
    {
        key: "commercial",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Price, Type and Bedrooms" className={`${inputStyles.input} ${inputStyles.input_inline}`} />)
    }
]

export const defaultData = {
    building: "",
    commercial: "",
    off_plan: ""
}
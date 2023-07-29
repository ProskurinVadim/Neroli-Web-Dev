import Input,{ inputStyles } from "../../../common/Input/Input";
export const getFormData = () => [
    {
        key: "building",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Community or building" className={`${inputStyles.input_inline} ${inputStyles.input_inline__rounded}`} containerClassName={inputStyles.input_inline_container} />)
    },
    {
        key: "rest",
        render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) =>
            (<Input value={value} onChange={onChange} placeholder="Price, Type and Bedrooms" className={`${inputStyles.input_inline}`} containerClassName={inputStyles.input_inline_container} />)
    }
]

export const defaultData = {
    building: "",
    rest: "",
}
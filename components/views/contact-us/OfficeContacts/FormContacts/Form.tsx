import { useState } from "react";
import styles from "./Form.module.scss";
import Button, { buttonStyles } from "../../../../../components/common/Button/Button";
import { IFormFields } from "../../../../../types";
import { isEmptyArr } from "../../../../../utils/validation";
interface IForm {
    onSubmit: (data: any) => void,
    buttonText?: string,
    setValue: (value:any) => void
    fields: IFormFields[]
    value: any,
    className?: string,
    buttonClassName? :string
    children?: React.ReactNode | string | null,
    validate?: (value: any) => string[]

}

const Form: React.FC<IForm> = ({ onSubmit, fields, value, className = "", buttonText = "Submit", setValue, children, buttonClassName = buttonStyles.button_submit, validate }) => {
    const [error, setError] = useState<string[]>(Object.keys(value).map(() => ""));

    const handelSubmit = () => {
        let isValid = true;
        if (validate) {
            const array = validate(value)
            setError(array);
            isValid = isEmptyArr(array);
        }
        isValid && onSubmit(value);
    }

    const handelChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue((prev_value: any) => {
            const newValue = { ...prev_value };
            newValue[key] = e.target.value;
            return { ...newValue }
        })
    }
    const elements = fields.map((elem: IFormFields, i: number) => elem.render(value[elem.key], handelChange(elem.key), error[i]));
    return (
        <form className={`${styles.form} ${className}`} onSubmit={(e => e.preventDefault())}>
            <>
                <div className={styles.fields}><>{elements}</></div>

                <Button className={`${buttonClassName} ${styles.button}`} onClick={handelSubmit} text={buttonText}/>
                <>{children}</>
            </>
        </form>
    )
}

export default Form

export {
    styles as formStyles
}
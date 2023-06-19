import styles from "./Form.module.scss";
import Button, { buttonStyles } from "../../common/Button/Button";
import { IFormFields } from "../../../types";
interface IForm {
    onSubmit: (data: any) => void,
    buttonText?: string,
    setValue: (value:any) => void
    fields: IFormFields[]
    value: any,
    className?: string,
    children?: React.ReactNode | string | null,
}

const Form: React.FC<IForm> = ({ onSubmit, fields, value, className, buttonText = "Submit", setValue, children }) => {
    const handelChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue((prev_value: any) => {
            const newValue = { ...prev_value };
            newValue[key] = e.target.value;
            return { ...newValue}
        })
   
    return (
        <form className={`${styles.form} ${className}`} onSubmit={(e => e.preventDefault())}>
            <>
                {
                    fields.map((elem: IFormFields, i: number) => elem.render(value[elem.key], handelChange(elem.key)))
                }
            </>
            <Button className={`${buttonStyles.button_submit} ${styles.button}`} onClick={onSubmit} text={buttonText}/>
            <>{children}</>
        </form>
    )
}

export default Form

export {
    styles as formStyles
}
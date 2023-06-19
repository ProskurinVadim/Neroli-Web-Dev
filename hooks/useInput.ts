import { useState } from 'react';

interface IInput {
    validateFunc?: (value: string) => boolean,
}

export const useInput = ( validateFunc?: (value: string) => boolean) => {
    const [value, setValue] = useState<string>("");
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: (event: React.ChangeEvent <HTMLInputElement>) => {
                setValue(event.target.value)
            }
        },
        validate: () => {
            if (validateFunc) {
                return validateFunc(value)
            }
        },
    }
};
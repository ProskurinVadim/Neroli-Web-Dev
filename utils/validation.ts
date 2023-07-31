export const isFull = (string: string) => !!string.length;

const phoneRegexp = /^[+ \d]{1,}$/;

export const isPhone = (string: string) => {
    // const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    // const re2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    // return re.test(string) || re2.test(string);
    return phoneRegexp.test(string);
}

export const isEmail = (string: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(string);
};

export const isEmptyArr = (arr: string[]) => !!arr.filter(elem => isFull(elem)).length;

export const containError = "Must contain email of phone";
export const emailError = "Entrer valid email";
export const phoneError = "Entrer valid phone number";
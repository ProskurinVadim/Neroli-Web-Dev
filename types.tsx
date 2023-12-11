interface IChildren {
    children: React.ReactNode | string | null
}

interface ILink {
    href: string,
    name: string
}

interface ICondition {
    condition?: boolean,
    children: React.ReactNode | string | null,
}

interface IFormFields {
    key: string,
    render: (value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string) => React.Component<any, any>
}

interface IIcon {
    className?: string
}

interface ISVG {
    width?: string,
    height?: string,
    fill?: string,
    viewBox?: string,
}

interface ISVGSearch {
    width?: string,
    height?: string,
    fill?: string,
    viewBox?: string,
    open: boolean,
}

interface IAvatar {
    image: string,
    name: string,
    job: string,
    id?: string,
    whatsapp?: string,
    phone?: string,
    onClick?: (value: any) => void
}

interface ICoords {
    lat: number,
    lng: number,
}

interface INewsCard {
    image: string,
    header: string
    description: string,
    date: { day: string, mins: string }
    link?: string,
    horizontal?: boolean
    table?: boolean
}

interface IContacts {
    email: string;
    phone: string;
    address: string;
}

export type { IChildren, ILink, ICondition, IFormFields, IIcon, ISVG, IAvatar, ICoords, INewsCard, IContacts, ISVGSearch }
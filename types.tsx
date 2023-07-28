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

interface IAvatar {
    image: string,
    name: string,
    job: string
}

interface ICoords {
    lat: number,
    lng: number,
}

interface INewsCard {
    image: string,
    header: string
    description?: string | null,
    date: { day: string, mins: string }
    link?: string,
    horizontal?: boolean
    table?: boolean
}


export type { IChildren, ILink, ICondition, IFormFields, IIcon, ISVG, IAvatar, ICoords, INewsCard}
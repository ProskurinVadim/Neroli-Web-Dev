interface IItem {
    name: React.ReactNode | string | null
    onClick: () => void
    className?: string
}

const Item: React.FC<IItem> = ({ name, onClick, className }) => {
    return (
        <li className={className} onClick={onClick}>{name}</li>
    )
}

export default Item
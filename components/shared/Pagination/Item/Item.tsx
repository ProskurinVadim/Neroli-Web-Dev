interface IItem {
    name: string,
    onClick: () => void
    className: string
}

const Item: React.FC<IItem> = ({ name, onClick, className }) => {
    return (
        <li className={className} onClick={onClick}>{name}</li>
    )
}

export default Item
import { ISVG } from "../../../types";

const Minus: React.FC<ISVG> = ({ height = "14", width = "14", fill = "none", viewBox = "0 0 14 2" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 2C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2H1Z" fill="#DDDE70" />
        </svg>
    )
};
export default Minus
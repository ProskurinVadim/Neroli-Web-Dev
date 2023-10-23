import { ISVG } from "../../../types";

const ArowTop: React.FC<ISVG> = ({ height = "12", width = "12", fill = "none", viewBox = "0 0 12 12" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path id="Mask" fillRule="evenodd" clipRule="evenodd" d="M8.58579 8C9.47669 8 9.92286 6.92286 9.29289 6.29289L6.70711 3.70711C6.31658 3.31658 5.68342 3.31658 5.29289 3.70711L2.70711 6.29289C2.07714 6.92286 2.52331 8 3.41421 8L8.58579 8Z" fill="#E5E5E5" />
        </svg>
    )
};
export default ArowTop
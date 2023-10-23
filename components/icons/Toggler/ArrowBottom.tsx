import { ISVG } from "../../../types";

const ArowTop: React.FC<ISVG> = ({ height = "12", width = "12", fill = "none", viewBox = "0 0 12 12" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path id="Mask" fillRule="evenodd" clipRule="evenodd" d="M3.41421 4C2.52331 4 2.07714 5.07714 2.70711 5.70711L5.29289 8.29289C5.68342 8.68342 6.31658 8.68342 6.70711 8.29289L9.29289 5.70711C9.92286 5.07714 9.47669 4 8.58579 4H3.41421Z" fill="#E5E5E5" />
        </svg>
    )
};
export default ArowTop
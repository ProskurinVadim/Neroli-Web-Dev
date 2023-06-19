import { ISVG } from "../../../types";
const Burger: React.FC<ISVG> = ({ height = "15", width = "24", fill = "none", viewBox = "0 0 24 15" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <rect y="0.474304" width="24" height="2" rx="1" fill="#3B4248" />
            <rect y="6.4743" width="24" height="2" rx="1" fill="#3B4248" />
            <rect y="12.4743" width="24" height="2" rx="1" fill="#3B4248" />
        </svg>
    )
};

export default Burger
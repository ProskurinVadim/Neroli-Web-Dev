import { ISVG } from "../../../types";

const List: React.FC<ISVG> = ({ height = "11", width = "13", fill = "#E5E5E5", viewBox = "0 0 13 11" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.75H3V3.75H0V6.75ZM0 10.5H3V7.5H0V10.5ZM0 3H3V0H0V3ZM3.75 6.75H12.75V3.75H3.75V6.75ZM3.75 10.5H12.75V7.5H3.75V10.5ZM3.75 0V3H12.75V0H3.75Z" />
        </svg>
    )
};
export default List
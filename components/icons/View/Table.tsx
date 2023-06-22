import { ISVG } from "../../../types";

const Table: React.FC<ISVG> = ({ height = "10", width = "13", fill = "#E5E5E5", viewBox = "0 0 13 10" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5H3.75V0H0V4.5ZM0 9.75H3.75V5.25H0V9.75ZM4.5 9.75H8.25V5.25H4.5V9.75ZM9 9.75H12.75V5.25H9V9.75ZM4.5 4.5H8.25V0H4.5V4.5ZM9 0V4.5H12.75V0H9Z" />
        </svg>
    )
};
export default Table
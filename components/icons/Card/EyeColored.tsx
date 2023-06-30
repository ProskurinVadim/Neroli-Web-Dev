import { ISVG } from "../../../types";
const Calendar: React.FC<ISVG> = ({ height = "28", width = "28", fill = "none", viewBox = "0 0 28 28" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0.66655C8.01398 0.66655 2.80034 4.42625 0 10C2.80034 15.5748 8.01398 19.3334 14 19.3334C19.986 19.3334 25.1997 15.5748 28 10C25.1997 4.42625 19.986 0.66655 14 0.66655ZM14 15.8334C10.7779 15.8334 8.16655 13.2221 8.16655 10C8.16655 6.77788 10.7779 4.16655 14 4.16655C17.2221 4.16655 19.8334 6.77788 19.8334 10C19.8334 13.2221 17.2221 15.8334 14 15.8334Z" fill="#DDDE70" />
        </svg>
    )
};
export default Calendar
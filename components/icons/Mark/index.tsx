import { ISVG } from "../../../types";

const Mark: React.FC<ISVG> = ({ height = "24", width = "24", fill = "none", viewBox = "0 0 24 24" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0.75C4.61875 0.75 0.25 5.11875 0.25 10.5C0.25 19.2068 9.71125 23.1922 9.71125 23.1922C9.80271 23.2305 9.90086 23.2502 10 23.2502C10.0991 23.2502 10.1973 23.2305 10.2887 23.1922C10.2887 23.1922 19.75 19.2068 19.75 10.5C19.75 5.11875 15.3813 0.75 10 0.75ZM10 3.75C6.27475 3.75 3.25 6.77475 3.25 10.5C3.25 14.2253 6.27475 17.25 10 17.25C13.7253 17.25 16.75 14.2253 16.75 10.5C16.75 6.77475 13.7253 3.75 10 3.75ZM10 5.25C12.8973 5.25 15.25 7.60275 15.25 10.5C15.25 13.3973 12.8973 15.75 10 15.75C7.10275 15.75 4.75 13.3973 4.75 10.5C4.75 7.60275 7.10275 5.25 10 5.25Z" fill="#DDDE70" />
        </svg>
    )
};

export default Mark
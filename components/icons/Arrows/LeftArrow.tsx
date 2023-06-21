import { ISVG } from "../../../types";

const LeftArrow: React.FC<ISVG> = ({ height = "16", width = "16", fill = "none", viewBox = "0 0 16 16" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29468 15.2947C7.68422 15.6842 8.31578 15.6842 8.70531 15.2947C9.0946 14.9054 9.09489 14.2743 8.70595 13.8847L3.83 8.99998L15 8.99998C15.5523 8.99998 16 8.55227 16 7.99998C16 7.4477 15.5523 6.99998 15 6.99998L3.83 6.99998L8.70595 2.1153C9.09489 1.72566 9.0946 1.09459 8.70532 0.705298C8.31578 0.315763 7.68422 0.315763 7.29468 0.705298L0 7.99998L7.29468 15.2947Z" fill="#BDBFBB" />
        </svg>
    )
};
export default LeftArrow
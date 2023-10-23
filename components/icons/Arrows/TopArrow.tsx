import { ISVG } from "../../../types";

const TopArrow: React.FC<ISVG> = ({ height = "20", width = "20", fill = "none", viewBox = "0 0 20 20" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g id="arrow">
                <path id="Mask" fillRule="evenodd" clipRule="evenodd" d="M2.70533 9.29468C2.3158 9.68422 2.3158 10.3158 2.70533 10.7053C3.09462 11.0946 3.7257 11.0949 4.11533 10.7059L9.00002 5.83L9.00002 17C9.00002 17.5523 9.44773 18 10 18C10.5523 18 11 17.5523 11 17L11 5.83L15.8847 10.7059C16.2743 11.0949 16.9054 11.0946 17.2947 10.7053C17.6842 10.3158 17.6842 9.68422 17.2947 9.29468L10 2L2.70533 9.29468Z" fill="#E5E5E5" />
            </g>
        </svg>
    )
};

export default TopArrow
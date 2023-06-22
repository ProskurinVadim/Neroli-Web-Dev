import { ISVG } from "../../../types";
const Phone: React.FC<ISVG> = ({ height = "16", width = "16", fill = "none", viewBox = "0 0 16 16" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_105_1653)">
                <path d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.57909 5.89704e-07 4.67062 0.0280721 4.7482 0.080593C4.82577 0.133114 4.88583 0.207675 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.7923 11.1142 15.8669 11.1742 15.9194 11.2518C15.9719 11.3294 16 11.4209 16 11.5146C16 13.9918 13.9959 16 11.5146 16Z" fill="#3B4248" />
            </g>
            <defs>
                <clipPath id="clip0_105_1653">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};
export default Phone
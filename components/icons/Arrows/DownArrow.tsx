import { ISVG } from "../../../types";

const DownArrow: React.FC<ISVG> = ({ height = "20", width = "20", fill = "none", viewBox = "0 0 20 20" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.2946 10.7053C17.6841 10.3158 17.6841 9.68422 17.2946 9.29468C16.9053 8.9054 16.2742 8.90511 15.8846 9.29405L10.9999 14.17L10.9999 3C10.9999 2.44771 10.5522 2 9.99992 2C9.44764 2 8.99992 2.44772 8.99992 3L8.99992 14.17L4.11524 9.29405C3.7256 8.90511 3.09453 8.90539 2.70524 9.29468C2.3157 9.68422 2.3157 10.3158 2.70524 10.7053L9.99992 18L17.2946 10.7053Z" fill="#E5E5E5" />
        </svg>
    )
};
export default DownArrow
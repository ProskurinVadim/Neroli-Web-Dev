import { ISVG } from "../../../types";

const Star: React.FC<ISVG> = ({ height = "20", width = "20", fill = "none", viewBox = "0 0 20 20" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.27L14.151 18.7754C14.9083 19.2325 15.8425 18.5535 15.6416 17.692L14.54 12.97L18.2086 9.79189C18.8772 9.21268 18.5198 8.11442 17.6384 8.03964L12.81 7.63L10.9207 3.17237C10.5761 2.35934 9.42387 2.35934 9.07928 3.17237L7.19 7.63L2.36163 8.03964C1.4802 8.11442 1.1228 9.21268 1.79139 9.79189L5.46 12.97L4.35841 17.692C4.15745 18.5535 5.09168 19.2325 5.849 18.7754L10 16.27Z" fill="#E5E5E5" />
        </svg>
    )
};
export default Star
import { ISVGSearch } from "../../../types";
const Search: React.FC<ISVGSearch> = ({ open = false, height = "18", width = "18", fill = "none", viewBox = "0 0 18 18" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.71 11.4743L11.43 11.2043C12.41 10.0643 13 8.5843 13 6.9743C13 3.3843 10.09 0.474304 6.5 0.474304C2.91 0.474304 0 3.3843 0 6.9743C0 10.5643 2.91 13.4743 6.5 13.4743C8.11 13.4743 9.59 12.8843 10.73 11.9043L11 12.1843V12.9743L15.2929 17.2586C15.6835 17.6485 16.3162 17.6482 16.7064 17.2579L16.7836 17.1807C17.1738 16.7905 17.1742 16.1578 16.7843 15.7672L12.5 11.4743H11.71ZM2 6.9743C2 4.4843 4.01 2.4743 6.5 2.4743C8.99 2.4743 11 4.4843 11 6.9743C11 9.4643 8.99 11.4743 6.5 11.4743C4.01 11.4743 2 9.4643 2 6.9743Z" fill={open ? "#3B4248" : "#DDDE70"} />
        </svg>
    )
};

export default Search
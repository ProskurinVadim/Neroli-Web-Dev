import { ISVG } from "../../../types";
const Key: React.FC<ISVG> = ({ height = "24", width = "24", fill = "none", viewBox = "0 0 24 24" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.125 1.5C14.4343 1.5 12.8127 2.17165 11.6172 3.36719C10.4217 4.56274 9.75001 6.18425 9.75001 7.875C9.75001 8.44725 9.83251 8.9985 9.97351 9.52575L1.93951 17.5613C1.79964 17.7001 1.68876 17.8653 1.61331 18.0474C1.53786 18.2294 1.49935 18.4247 1.50001 18.6217V21C1.50001 21.8272 2.17276 22.5 3.00001 22.5H5.37301C5.77501 22.5 6.15076 22.347 6.43951 22.0605L7.36051 21.147C7.57201 20.937 7.69276 20.6467 7.69276 20.349V19.317C7.69276 18.6968 8.19751 18.192 8.81776 18.192H9.19276C9.81301 18.192 10.3178 17.6873 10.3178 17.067V16.692C10.3178 16.0718 10.8225 15.567 11.4428 15.567H12.4755C12.7725 15.567 13.0635 15.4462 13.2728 15.2355L14.4758 14.0287C15.0134 14.1749 15.5679 14.2498 16.125 14.2515C17.799 14.2258 19.3958 13.5428 20.5705 12.3499C21.7453 11.157 22.4037 9.54996 22.4037 7.87575C22.4037 6.20154 21.7453 4.59449 20.5705 3.40159C19.3958 2.2087 17.799 1.52568 16.125 1.5ZM17.625 8.25C17.1277 8.25 16.6508 8.05246 16.2992 7.70083C15.9476 7.34919 15.75 6.87228 15.75 6.375C15.75 5.87772 15.9476 5.40081 16.2992 5.04917C16.6508 4.69754 17.1277 4.5 17.625 4.5C18.1223 4.5 18.5992 4.69754 18.9508 5.04917C19.3025 5.40081 19.5 5.87772 19.5 6.375C19.5 6.87228 19.3025 7.34919 18.9508 7.70083C18.5992 8.05246 18.1223 8.25 17.625 8.25Z" fill="#DDDE70" />
        </svg>
    )
};
export default Key
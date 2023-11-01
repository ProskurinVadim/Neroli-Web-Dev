import { ISVG } from "../../../../../types";

const PhoneIcon: React.FC<ISVG> = ({ height = "24", width = "24", fill = "none", viewBox = "0 0 24 24" }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1722_2349)">
                <path d="M17.2719 24C13.0646 24 8.57166 22.454 5.05875 18.9412C1.5517 15.4341 0 10.9442 0 6.72811C0 3.01238 3.00619 0 6.72811 0C6.86863 8.84556e-07 7.00593 0.0421081 7.1223 0.120889C7.23866 0.199671 7.32875 0.311512 7.38094 0.441984L10.3935 7.97325C10.5377 8.33381 10.3623 8.74298 10.0018 8.88722L6.69258 10.2109C6.92667 14.018 9.98264 17.0737 13.7891 17.3075L15.1128 13.9983C15.2567 13.6383 15.6658 13.4623 16.0268 13.6066L23.558 16.6191C23.6884 16.6712 23.8003 16.7613 23.8791 16.8777C23.9579 16.9941 24 17.1314 24 17.2719C24 20.9876 20.9938 24 17.2719 24Z" fill="#DDDE70"/>
            </g>
            <defs>
                <clipPath id="clip0_1722_2349">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
};
export default PhoneIcon
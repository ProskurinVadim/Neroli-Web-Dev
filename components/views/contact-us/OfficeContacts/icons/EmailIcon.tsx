import { ISVG } from "../../../../../types";

const EmailIcon: React.FC<ISVG> = ({ height = "24", width = "24", fill = "none", viewBox = "0 0 24 24" }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1722_2344)">
                <path d="M12 0C5.37239 0 0 5.37258 0 12C0 18.629 5.37994 24 12 24H16C16.2101 24 16.4181 23.9586 16.6122 23.8782C16.8063 23.7978 16.9826 23.6799 17.1312 23.5313C17.2798 23.3828 17.3977 23.2065 17.4782 23.0123C17.5586 22.8182 17.6 22.6101 17.6 22.4C17.6 21.5163 16.8836 20.8 16 20.8H12C7.13958 20.8 3.20002 16.856 3.20002 12C3.20002 7.13986 7.14 3.20002 12 3.20002C16.86 3.20002 20.8 7.13986 20.8 12V12.8C20.8 13.6853 20.0811 14.4 19.2 14.4C18.3181 14.4 17.6 13.6845 17.6 12.8V12C17.6 8.9093 15.0908 6.39998 12 6.39998C8.9092 6.39998 6.39998 8.9093 6.39998 12C6.39998 15.0907 8.9092 17.6 12 17.6C13.5452 17.6 14.9452 16.9727 15.9592 15.9591C16.462 16.462 17.3924 17.6 19.2 17.6C21.8508 17.6 24 15.451 24 12.8V12C24 5.37258 18.6276 0 12 0ZM12 14.4C10.6756 14.4 9.6 13.3246 9.6 12C9.6 10.6754 10.6756 9.6 12 9.6C13.3244 9.6 14.4 10.6754 14.4 12C14.4 13.3246 13.3244 14.4 12 14.4Z" fill="#DDDE70"/>
            </g>
            <defs>
                <clipPath id="clip0_1722_2344">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
};

export default EmailIcon
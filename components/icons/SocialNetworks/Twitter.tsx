import { ISVG } from "../../../types";

const Twitter: React.FC<ISVG> = ({ height = "25", width = "24", fill = "none", viewBox = "0 0 25 24" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_105_1178)">
                <path d="M24.0907 4.29137C23.9844 3.29789 23.5411 2.37078 22.8344 1.6644C22.1278 0.958021 21.2006 0.514998 20.207 0.409094C15.0852 -0.137341 9.91977 -0.137341 4.79794 0.409094C3.80344 0.513826 2.87491 0.956332 2.16719 1.66282C1.45946 2.3693 1.01533 3.29706 0.90885 4.29137C0.362415 9.4132 0.362415 14.5786 0.90885 19.7005C1.01334 20.6954 1.45592 21.6244 2.1627 22.3324C2.86949 23.0405 3.79772 23.4847 4.79249 23.5909C9.91417 24.14 15.0799 24.14 20.2016 23.5909C21.1965 23.4861 22.1253 23.0432 22.8331 22.3361C23.5409 21.6291 23.9848 20.7007 24.0907 19.7059C24.6375 14.5823 24.6375 9.415 24.0907 4.29137ZM20.2439 7.59546C19.8879 8.12771 19.4545 8.60386 18.9579 9.00818C18.8935 9.0594 18.8416 9.12453 18.8059 9.19868C18.7703 9.27283 18.7518 9.35409 18.752 9.43637V9.48682C18.7456 10.5558 18.5489 11.615 18.1711 12.615C17.7814 13.666 17.2023 14.6366 16.4625 15.4786C15.6885 16.3609 14.7392 17.0724 13.6752 17.5677C13.3819 17.7043 13.0804 17.8227 12.7725 17.9223C11.833 18.228 10.8505 18.3808 9.86249 18.375C8.29779 18.373 6.76141 17.9576 5.40885 17.1709C5.36025 17.1436 5.32202 17.1009 5.30009 17.0497C5.27815 16.9984 5.27372 16.9413 5.28749 16.8873C5.3012 16.8338 5.33243 16.7865 5.37618 16.7529C5.41993 16.7193 5.47368 16.7013 5.52885 16.7018H5.90249C7.09148 16.7015 8.25332 16.3463 9.23931 15.6818C8.65196 15.5854 8.10244 15.3293 7.6508 14.9416C7.19915 14.5539 6.86276 14.0496 6.6784 13.4836C6.66906 13.4556 6.66722 13.4257 6.67304 13.3968C6.67887 13.3678 6.69216 13.341 6.7116 13.3188C6.73104 13.2966 6.75595 13.2798 6.78386 13.2702C6.81176 13.2607 6.84169 13.2585 6.87067 13.2641C7.05048 13.2983 7.23309 13.3156 7.41612 13.3159H7.4843C6.91486 13.0543 6.43343 12.6332 6.09825 12.1037C5.76307 11.5742 5.58851 10.9589 5.59567 10.3323C5.59629 10.303 5.60444 10.2744 5.61934 10.2492C5.63424 10.2239 5.65539 10.203 5.68074 10.1883C5.7061 10.1737 5.7348 10.1658 5.76409 10.1654C5.79337 10.1651 5.82225 10.1723 5.84794 10.1864C6.07906 10.3149 6.32687 10.4108 6.5843 10.4714C6.07469 9.96733 5.74669 9.30847 5.65168 8.59803C5.55668 7.88758 5.70004 7.16569 6.0593 6.54546C6.07313 6.52253 6.09225 6.50325 6.11505 6.48922C6.13786 6.47519 6.16369 6.46683 6.19039 6.46482C6.21709 6.46282 6.24388 6.46724 6.26852 6.47771C6.29316 6.48818 6.31494 6.50439 6.33203 6.525C7.04664 7.40705 7.93109 8.13662 8.93294 8.67046C9.93478 9.20429 11.0336 9.53152 12.1643 9.63273H12.1766C12.1934 9.6325 12.21 9.62874 12.2252 9.6217C12.2405 9.61465 12.2541 9.60447 12.2652 9.59182C12.276 9.57967 12.2842 9.56538 12.2891 9.54987C12.294 9.53436 12.2957 9.51799 12.2939 9.50182C12.2516 9.10581 12.2774 8.70548 12.3702 8.31818C12.4515 7.97912 12.5898 7.65634 12.7793 7.36364C13.1767 6.73861 13.7825 6.27439 14.4893 6.05318C14.8208 5.9497 15.1661 5.89684 15.5134 5.89637C16.301 5.89509 17.0619 6.1817 17.6529 6.70228C17.7282 6.76918 17.825 6.80692 17.9257 6.80864C17.9588 6.80809 17.9918 6.80351 18.0239 6.795C18.579 6.65482 19.1113 6.43577 19.6043 6.14455C19.6338 6.12684 19.6679 6.11853 19.7022 6.12073C19.7365 6.12294 19.7694 6.13554 19.7963 6.15687C19.8233 6.1782 19.8431 6.20725 19.8531 6.24013C19.8632 6.27301 19.8629 6.30816 19.8525 6.34091C19.6875 6.85678 19.3948 7.32258 19.0016 7.695C19.3562 7.61096 19.7022 7.49409 20.0352 7.34591C20.0688 7.33094 20.1064 7.32734 20.1422 7.33564C20.178 7.34394 20.2102 7.36369 20.2338 7.39191C20.2573 7.42012 20.2711 7.45526 20.2729 7.49199C20.2747 7.52872 20.2645 7.56505 20.2439 7.59546Z" fill="#DDDE70" />
            </g>
            <defs>
                <clipPath id="clip0_105_1178">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
};
export default Twitter
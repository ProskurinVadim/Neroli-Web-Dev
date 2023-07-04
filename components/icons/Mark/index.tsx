import styles from "./Mark.module.scss";

interface IMark {
    text?: string,
}

const Mark: React.FC<IMark> = ({ text }) => {
    return (
        <div className={styles.mark}>
            <span className={styles.mark_text}>{text}</span>
            <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                    <g id="Group" filter="url(#filter0_d_105_1687)">
                        <path id="Vector" d="M21 1.25C12.0312 1.25 4.75 8.53125 4.75 17.5C4.75 32.0112 20.5187 38.6537 20.5187 38.6537C20.6712 38.7175 20.8348 38.7503 21 38.7503C21.1652 38.7503 21.3288 38.7175 21.4813 38.6537C21.4813 38.6537 37.25 32.0112 37.25 17.5C37.25 8.53125 29.9688 1.25 21 1.25ZM21 6.25C14.7912 6.25 9.75 11.2912 9.75 17.5C9.75 23.7087 14.7912 28.75 21 28.75C27.2088 28.75 32.25 23.7087 32.25 17.5C32.25 11.2912 27.2088 6.25 21 6.25ZM21 8.75C25.8287 8.75 29.75 12.6712 29.75 17.5C29.75 22.3287 25.8287 26.25 21 26.25C16.1713 26.25 12.25 22.3287 12.25 17.5C12.25 12.6712 16.1713 8.75 21 8.75Z" fill="#DDDE70" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_105_1687" x="0.75" y="1.25" width="40.5" height="45.5003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_1687" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_1687" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>
    )
}

export default Mark
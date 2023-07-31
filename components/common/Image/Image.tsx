import IMG from 'next/image';

import styles from "./image.module.scss";

interface IImage {
    src: string,
    alt: string,
    className?: string,
}

const Image: React.FC<IImage> = ({ alt, src, className }) => {
    const fullClassName = `${styles.img} ${className}`;

    return (
        <IMG width={100} height={100} alt={alt} src={src} className={fullClassName} quality={100} />
    )
}

export default Image
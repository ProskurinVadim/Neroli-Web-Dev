import IMG from 'next/image'

interface IImage {
    src: string,
    alt: string,
    className?: string,
}

const Image: React.FC<IImage> = ({ alt, src, className }) => {
    return (
        <IMG width={100} height={100} alt={alt} src={src} className={className} quality={100} />
    )
}

export default Image
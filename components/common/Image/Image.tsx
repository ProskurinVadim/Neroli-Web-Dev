import IMG from 'next/image'

interface IImage {
    src: string,
    alt: string,
    className?: string,
}

const Image: React.FC<IImage> = ({ alt, src, className }) => {
    return (
        <IMG alt={alt} src={src} className={className} />
    )
}

export default Image
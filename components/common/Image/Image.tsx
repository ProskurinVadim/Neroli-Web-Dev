import IMG from 'next/image'

interface IImage {
    src: string,
    alt: string,
    className?: string,
}

const Image: React.FC<IImage> = ({ width = 100, height = 100, alt, src, className }) => {
    return (
        <IMG width={width} height={height} alt={alt} src={src} className={className} />
    )
}

export default Image
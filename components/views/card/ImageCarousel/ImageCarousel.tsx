import Carousel from "../../../shared/Carousel";
import Container from "../../../../hoc/Container";
import { Image } from "../../../common";
import { getData } from "./getData";

interface IImageCarousel {
    title: string
}

const ImageCarousel: React.FC<IImageCarousel> = ({ title }) => {
    const data = getData();

    const config = {
        time: 5000,
        pagination: {
            withArrows: true,
            maxPages: 4,
            numerical: false,
        }
    };

    return (
        <section>
            <Container>
                <h2>{title}</h2>
                <Carousel Item={(props: any) => <Image alt="room image" src={props} className="" />} config={config} data={data} />
            </Container>
        </section>
    )
}

export default ImageCarousel
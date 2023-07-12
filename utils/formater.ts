import testNewsImage from "../public/main.jpg";
import testNewsBGImage from "../public/news-test.jpg"
import testNewAdditionalImagez from "../public/news-content-test.jpg"


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDate = (string: string) => {
    const date = new Date(string);
    return `${monthNames[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
}

export const formatNewsData = (data: any[]) => data.map(({ id, attributes }) => (
    {
        image: testNewsImage,
        header: attributes.Title,
        date: {
            day: getDate(attributes.Date),
            hours: `${(new Date(attributes.publishedAt).getMinutes())} mins`,
        },
        description: attributes.Content,
        link: `/blog/${id}`
    }
))


export const formaBlogData = ({ attributes}: any) =>(
    {
        header: attributes.Title,
        description: attributes.Content,
        date: getDate(attributes.Date),
        views: attributes.Views,

        time: "11 mins",
        background_image: testNewsBGImage.src,
        image: testNewAdditionalImagez.src,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tellus, convallis eu egestas vitae, consectetur a sem. Nam egestas sodales ligula. Duis elementum ipsum vel urna fermentum bibendum. Aenean ex lectus, scelerisque laoreet lorem sed, blandit maximus purus. Duis ut venenatis quam, non tincidunt neque. Nunc elit erat, egestas quis neque vel, placerat blandit dui. Nullam non bibendum magna, non varius quam. Curabitur a ultricies urna. Suspendisse potenti. Praesent et erat arcu. Donec varius enim mi, eget pellentesque augue congue eu. Mauris vehicula, quam vel vehicula tempor, massa libero imperdiet dolor, eget iaculis justo velit non risus. Aliquam aliquam leo eget nunc vulputate pulvinar. Duis porta, lorem a mattis malesuada, urna arcu vulputate nulla, consectetur vehicula magna est vitae tellus.Etiam sodales risus mauris, at fermentum eros luctus ut.Nullam a mi est.Donec dolor ligula, venenatis vitae elit sit amet, consectetur fringilla quam.Morbi vitae orci pulvinar, vestibulum orci sit amet, laoreet odio.Sed pharetra, sapien id vehicula porta, eros ante vehicula leo, at iaculis metus tellus ut lectus.Suspendisse quam elit, vehicula quis ante in, feugiat rhoncus dolor.Sed nec neque tempor, finibus lorem sit amet, pulvinar felis.Donec lacus nulla, venenatis sed nibh at, dapibus iaculis elit.Mauris sit amet finibus massa, tristique eleifend augue.Aliquam ut quam neque.Nulla facilisi.Suspendisse finibus, arcu vitae pretium finibus, nisl urna faucibus elit, in dictum dolor urna quis odio.Quisque sit amet quam vulputate, ullamcorper felis quis, sollicitudin nibh.Sed porta sit amet libero eget consectetur. Proin vel porta odio.Suspendisse aliquam, leo quis vestibulum dignissim, elit magna maximus arcu, et auctor nisi erat tristique enim.Ut vel volutpat nunc, sit amet porta augue.Nam venenatis pharetra arcu, eget suscipit risus convallis sed.Suspendisse rhoncus, orci vitae aliquam efficitur, urna ante egestas nibh, et posuere lectus tortor eu justo.Nunc sit amet aliquet augue.Quisque ut velit lobortis, aliquet sem sed, pulvinar nulla.Pellentesque vel dui sem.Morbi eget euismod velit.In dapibus sit amet ligula ac porta.Nam lacinia lorem in leo facilisis bibendum.In blandit ex id mi imperdiet, in malesuada purus dictum.",
        sub_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tellus, convallis eu egestas vitae, consectetur a sem. Nam egestas sodales ligula. Duis elementum ipsum vel urna fermentum bibendum. Aenean ex lectus",
    }
)



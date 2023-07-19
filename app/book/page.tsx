import { Comments, ContactForm, Enquire } from "../../components/views/shared/";
export default function BookPage() {

    return (
        <>
            <Enquire top={true} />
            <Comments />
            <ContactForm />
        </>
    )
}

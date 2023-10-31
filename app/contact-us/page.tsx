import { Comments, ContactForm } from "../../components/views/shared/";
// import { OfficeMap } from "../../components/views/contact-us";
import { OfficeContacts} from "../../components/views/contact-us";
import { getContactUs } from "@/utils/fetch";

export const revalidate = 60;

 const ContactUs = async () => {

     const contacts = await getContactUs();

    return (
        <>
            <OfficeContacts {...contacts.data.attributes} />
            {/*<OfficeMap {...contacts.data.attributes} />*/}
            {/*<Comments />*/}
            <ContactForm />
        </>
    )
}

export default ContactUs
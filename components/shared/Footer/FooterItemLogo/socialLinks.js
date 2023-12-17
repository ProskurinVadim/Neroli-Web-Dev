import { Whatsapp, Facebook, Instagram, Linkedin, Viber, Threads, Twitter, X, Uaddme } from "../../../icons";

const socialLinks = [
    {
        id: "1",
        icon: <Facebook />,
        link: ""
    },
    {
        id: "2",
        icon: <Instagram />,
        link: "https://instagram.com/neroli.uae?igshid=MzRlODBiNWFlZA=="
    },
    {
        id: "3",
        icon: <Linkedin />,
        link: "https://www.linkedin.com/company/neroli-properties/"
    },
    {
        id: "4",
        icon: <Whatsapp />,
        link: "https://wa.me/+971585233352"
    },
    {
        id: "5",
        icon: <Twitter />,
        link: ""
    },
    {
        id: "6",
        icon: <X />,
        link: ""
    },
    {
        id: "7",
        icon: <Viber />,
        link: ""
    },
    {
        id: "8",
        icon: <Threads />,
        link: "https://www.threads.net/@neroli.uae?igshid=NTc4MTIwNjQ2YQ=="
    },
    {
        id: "9",
        icon: <Uaddme />,
        link: "https://uadd.me/neroliproperties"
    },
];

const filteredLinks = socialLinks.filter(({link}) => Boolean(link));

export default filteredLinks;
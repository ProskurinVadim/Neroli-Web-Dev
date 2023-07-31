import { Whatsapp, Facebook, Instagram, Linkedin, Viber, Threads, Twitter, Uaddme } from "../../../icons";

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
        link: ""
    },
    {
        id: "4",
        icon: <Whatsapp />,
        link: ""
    },
    {
        id: "5",
        icon: <Twitter />,
        link: "https://wa.me/message/UOVF673LBPCKO1"
    },
    {
        id: "6",
        icon: <Viber />,
        link: ""
    },
    {
        id: "7",
        icon: <Threads />,
        link: "https://www.threads.net/@neroli.uae?igshid=NTc4MTIwNjQ2YQ=="
    },
    {
        id: "8",
        icon: <Uaddme />,
        link: "uadd.me/"
    },
];

const filteredLinks = socialLinks.filter(({link}) => Boolean(link));

export default filteredLinks;
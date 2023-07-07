"use client";
import { use, useEffect } from "react";
import { FAQ } from "../../components/views/faq";
import { getFAQs } from "../../utils/fetch";


const AboutUsPage =  () => {
    return <FAQ faq={[]} />
}

export default AboutUsPage
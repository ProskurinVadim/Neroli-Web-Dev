import TestImage from "../../../../public/people-test.jpg";


export const getData = (data: any[]) => data.map(({ attributes }: any) => ({
	person: {
		image: attributes.Photo && attributes.Photo.data ? attributes.Photo.data.attributes.url : TestImage,
		name: attributes.FullName,
		job: attributes.Category,
	},
	description: attributes.Description,
	socialNetworks: {
		facebook: attributes.Facebook,
		instagram: attributes.Instagram,
		whatsapp: attributes.WhatsApp
	}
}))
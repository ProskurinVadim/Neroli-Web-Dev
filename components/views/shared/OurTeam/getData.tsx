import TestImage from "../../../../public/people-test.jpg";


export const getData = (data: any[]) => data.map(({ attributes }: any) => ({
	person: {
		image: TestImage.src,
		name: attributes.FullName,
		job: attributes.Category,
	},
	description: attributes.Description,
	socialNetworks: {
		facebook: attributes.Whatsapp,
		linkedin: attributes.Whatsapp,
		whatsapp: attributes.Whatsapp
	}
}))
import TestImage from "../../../../public/people-test.jpg";

const testData = {
	person: {
		image: TestImage.src,
		name: "Sean Farmer",
		job: "Job title",
	},
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	socialNetworks: {
		facebook: "Job title",
		linkedin: "Job title",
		whatsapp: "Job title"
	}
}

export const getShortData = [testData, testData, testData]

export const getFullData = [
	testData, testData, testData,
	testData, testData, testData,
	testData, testData, testData,
	testData, testData, testData,
]

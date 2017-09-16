import {
	getRandomInt,
	getRandomArbitrary
} from 'utils';

export function fetchProduceDetail(name) {
	return {
		price: 10.23,
		delta: 0.2,
		deltaPercentage: 3.4
	}
};

const sampleFarmerList = [
	"Henrietta Food",
	"Apple Grand",
	"Kiwi Goo",
	"Durian Derpy",
	"Citrus Pouline",
	"Pear Dope"
];

const sampleFarmerLocation = [
	"Henrietta NY",
	"Derpy Land"
];

export function fetchProduceFarmers(produceName) {
	return sampleFarmerList.map((item, i) => {
		return {
			id: i,
			name: sampleFarmerList[getRandomInt(0, sampleFarmerList.length)],
			location: sampleFarmerLocation[getRandomInt(0, sampleFarmerLocation.length)],
			price: getRandomArbitrary(1, 10).toFixed(3)
		}
	})
};

import {
	getRandomInt,
	getRandomArbitrary
} from 'utils';

import createBrowserHistory from 'history/createBrowserHistory'

export const customHistory = createBrowserHistory()

const sampleProduceList = ["Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"];

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

export function fetchProduceDetail(name) {
	return {
		price: 10.23
	}
};

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


export function fetchFarmerDetail(id) {
	return {
		id,
		name: sampleFarmerList[id],
		location: sampleFarmerLocation[id]
	}
};


export function fetchFarmerProduces(id) {
	return sampleProduceList.map((item) => {
		return {
			name: item,
			price: getRandomArbitrary(1, 10)
				.toFixed(3),
			farmerCount: getRandomInt(10, 45)
		}
	})
};

export function fetchUserWatchlist() {
	return sampleProduceList.map((item) => {
		return {
			name: item,
			price: getRandomArbitrary(1, 10)
				.toFixed(3),
			farmerCount: getRandomInt(10, 45)
		}
	})
};

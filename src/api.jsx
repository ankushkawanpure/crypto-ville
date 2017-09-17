import {
	getRandomInt,
	getRandomArbitrary,
	fetchdata
} from 'utils';

import {liskOption, liskAddress, liskKey} from 'variables';
import lisk from 'lisk-js';
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
const LSK = lisk.api(liskOption);

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
		location: sampleFarmerLocation[id%2]
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

export function fetchLiskdetail() {

    // return new Promise(resolve, reject) {
    //     LSK.getAccount(liskAddress, function ({success, data}) {
		// 	console.log(data);
		// 	resolve(data);
    //     });
    // }

};

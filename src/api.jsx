import {
	getRandomInt,
	getRandomArbitrary
} from 'utils';

import {
	liskOption,
	liskAddress,
	liskPassphrase
} from 'variables';
import lisk from 'lisk-js';
import createBrowserHistory from 'history/createBrowserHistory'

export const customHistory = createBrowserHistory()

const sampleWatchList = [
	"Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"
];

const sampleProduceList = [
	"Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"
];

const sampleFarmerList = [
	"Henrietta Food",
	"Apple Grand",
	"Kiwi Goo",
	"Durian Derpy",
	"Citrus Pouline",
	"Pear Dope"
];

const sampleFarmerLocation = [
	"Henrietta, NY",
	"Seracuse, NY",
	"Seattle, WA",
	"Eugene, OR"
];

let LSK = lisk.api(liskOption);


export function fetchProduceDetail(name) {
	return {
		price: getRandomArbitrary(1, 3)
			.toFixed(3)
	}
};

export function fetchProduceFarmers(produceName) {
	return sampleFarmerList.map((item, i) => {
		return {
			id: i,
			name: sampleFarmerList[getRandomInt(0, sampleFarmerList.length)],
			location: sampleFarmerLocation[getRandomInt(0, sampleFarmerLocation.length)],
			price: getRandomArbitrary(1, 3)
				.toFixed(3)
		}
	})
};


export function fetchFarmerDetail(id) {
	return {
		id,
		name: sampleFarmerList[id],
		location: sampleFarmerLocation[id % 2]
	}
};


export function fetchFarmerProduces(id) {
	return sampleProduceList.map((item) => {
		return {
			name: item,
			price: getRandomArbitrary(1, 3)
				.toFixed(3),
			farmerCount: getRandomInt(10, 45)
		}
	})
};

export function addToWatchlist(item){
	if (!sampleWatchList.includes(item)) {
		sampleWatchList.unshift(item);
	}
}

export function fetchUserWatchlist() {
	return sampleWatchList.map((item) => {
		return {
			name: item,
			price: getRandomArbitrary(1, 3)
				.toFixed(3),
			farmerCount: getRandomInt(3, 6)
		}
	})
};

export function fetchLiskAcountDetail() {
	return new Promise(function (resolve, reject) {
		LSK.getAccount(liskAddress, function (resp) {
			if(!resp.success) {
				return reject(resp.error)
			}

			resolve(resp.account)
		});
	});
};

export function sendPayment(address, amount) {
	const realAmount = amount * 10e7;

	return new Promise(function(resolve, reject) {

		LSK.sendRequest('transactions', { secret: liskPassphrase, amount: realAmount, recipientId: address } , function (resp) {
			LSK.lastQuery = resp;
			if (!resp.success) {
				return reject(resp.error)
			}

			resolve(resp.transactionId)
		});
	});
};

export function fetchUserData() {

	// The fetch's `then` gets a Response instance back
	fetch('http://localhost:3001/users', {
			mode: 'cors'
		})
		.then(function (responseObj) {
			console.log('status: ', responseObj.status);
			console.log(responseObj);
		});

}

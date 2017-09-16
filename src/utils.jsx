export function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

export function extractMoneyValue(value) {
	const tmp = (value + "").split(".");
	return {
		valueFormated: tmp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
		valueString: tmp[0].replace(/\B(?=(\d{3})+(?!\d))/g, "-,-"),
		floatingPoint: tmp[1]
	}
}

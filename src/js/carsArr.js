import Papa from 'papaparse';

let carsarr;

const response = fetch('/data.csv')
	.then(response => response.text())
	.then(v => Papa.parse(v))
	.catch(err => console.log(err))

response.then(v => {
	v.data.splice(0,2);
	carsarr = v.data;
	Alpine.start();
	// console.log(carsarr)
});

document.addEventListener('alpine:init', (data) => {

Alpine.data('arrCars', () => ({

	fill() {
		document.querySelector('.model').selectedIndex = 1;
		this.model = 'Solaris';
		document.querySelector('.year').selectedIndex = 1;
		this.year = '2020-';
		document.querySelector('.volume').selectedIndex = 1;
		this.volume = '1.4';
		document.querySelector('.type').selectedIndex = 1;
		this.type = 'Бензиновый';
	},

	selectNull(selector) {
		this.filter[selector] = null;
		document.querySelector('.'+selector).selectedIndex = 0;
	},

	filter: {
		model: null,
		year: null,
		volume: null,
		type: null,
	},

	col: {
		model: 8,
		year: 10,
		volume: 11,
		type: 12,
		price: 13,
	},

	set model(value) {
		this.filter.model = value;
		this.selectNull('year');
		this.selectNull('volume');
		this.selectNull('type');
	},
	get model() {
		return this.filter.model;
	},
	get models() {
		return [... new Set(carsarr.map(x => x[this.col.model]).flat())];
	},

	set year(value) {
		this.filter.year = value;
		this.selectNull('volume');
		this.selectNull('type');
	},
	get year() {
		return this.filter.year;
	},
	get years() {
		var arrs = carsarr.filter(
			i => i[this.col.model] === this.model
		);
		return [... new Set(arrs.map(x => x[this.col.year]).flat())];
	},

	set volume(value) {
		this.filter.volume = value;
		this.selectNull('type');
	},
	get volume() {
		return this.filter.volume;
	},
	get volumes() {
		var arrs = carsarr.filter(
			i => i[this.col.model] === this.model && i[this.col.year] === this.year
		);
		return [... new Set(arrs.map(x => x[this.col.volume]).flat())]
	},

	set type(value) {
		this.filter.type = value;
	},
	get type() {
		return this.filter.type;
	},
	get types() {
		var arrs = carsarr.filter(
			i => i[this.col.model] === this.model && i[this.col.year] === this.year && i[this.col.volume] === this.volume
		);
		return [... new Set(arrs.map(x => x[this.col.type]).flat())]
	},

	get prices() {
		var arrs = carsarr.filter(
			i => i[this.col.model] === this.model && i[this.col.year] === this.year && i[this.col.volume] === this.volume && i[this.col.type] === this.type
		);
		return arrs.map(x => x.slice(this.col.price)).flat();

	},

}))

})
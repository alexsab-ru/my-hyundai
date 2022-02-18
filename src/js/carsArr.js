import Papa from 'papaparse';


let list = [],
	results = [],
	urls = ['calc.csv', 'faq.csv', 'feedback.csv', 'specials.csv'],
	calcArr = [],
	faqsArr = [],
	feedbacksArr = [],
	specialsArr = [];

// Loop through all URLs
urls.forEach(function(url, i) {
	list.push(
		// For each URL, fetch it with the fetch API, store the returned promise in list
		fetch('/inc/'+window.path+'/data/' + url)
		// Additionally, when the request is finished, store the result in results
		.then(response => {
			results[i] = response.text().then( v => Papa.parse(v) ).catch( err => console.log(err) );
			return results[i];
		})
	);
});

// Create a new promise, that resolves, when all promises in list are resolved (i.e., all requests finished)
Promise
	.all(list)
	.then(function() {
		results.forEach( function(file,i) {
			file.then(v => {
				switch(urls[i]) {
					case 'calc.csv':
						v.data.splice(0,2);
						calcArr = v.data;
						break;
					case 'faq.csv':
						v.data.splice(0,1);
						faqsArr = v.data;
						break;
					case 'feedback.csv':
						v.data.splice(0,1);
						feedbacksArr = v.data;
						break;
					case 'specials.csv':
						v.data.splice(0,1);
						specialsArr = v.data;
						break;
					default:
						break;
				}
				// console.log("v.data", v.data);
			})
		} );
	})
	.then(()=>{
		Alpine.start();
		// console.log('all requests finished!'); // Enjoy the fully populated results!
	});



document.addEventListener('alpine:init', (data) => {

Alpine.data('faqData', () => ({
	faqs: faqsArr,
}));

Alpine.data('specialsData', () => ({
	specials: specialsArr,
}));

Alpine.data('feedbackData', () => ({
	feedbacks: feedbacksArr,
	swiper: null,
}));

Alpine.data('calcData', () => ({

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
		return [... new Set(calcArr.map(x => x[this.col.model]).flat())];
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
		var arrs = calcArr.filter(
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
		var arrs = calcArr.filter(
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
		var arrs = calcArr.filter(
			i => i[this.col.model] === this.model && i[this.col.year] === this.year && i[this.col.volume] === this.volume
		);
		return [... new Set(arrs.map(x => x[this.col.type]).flat())]
	},

	get prices() {
		var arrs = calcArr.filter(
			i => i[this.col.model] === this.model && i[this.col.year] === this.year && i[this.col.volume] === this.volume && i[this.col.type] === this.type
		);
		return arrs.map(x => x.slice(this.col.price)).flat();

	},

}))

})
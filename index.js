const fetch = require('node-fetch')

const api = require('./api.js')


//api.accreditamento();

api.getEs('1')
.then(res => res.json())
.then(({message, data}) => {
	const result = []
	data.forEach(item => {
	 if((item % 3) === 0) result.push(item);
	})
	api.postEs(result, '1')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)


api.getEs('2')
.then(res => res.json())
.then(({message, data}) => {
	const result = []
	data.forEach(item => {
		if (item[item.length - 1] === "E"){
			item = item.toLowerCase();
			result.push(item);
		}
	})
	api.postEs(result, '2')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)

api.getEs('3')
.then(res => res.json())
.then(({message, data}) => {
	let result = 0;
	data.forEach(item => {
		if(item.length < 5) result += item.length;
	})
	api.postEs(result, '3')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)
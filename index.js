const fetch = require('node-fetch')

const api = require('./api.js')


//api.accreditamento();

/*api.getEs('1')
.then(res => res.json())
.then(({message, data}) => {
	let result = 0
	data.forEach(item => {
		result = result + item
	})
	api.postEs(result, '1')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)
*/

/*api.getEs('2')
.then(res => res.json())
.then(({message, data}) => {
	const result = []
	let min = parseInt(data[0])
	data.forEach(item => {if(item < min) min = item})
	data.forEach(item => result.push(item * min))
	api.postEs(result, '2')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)*/

api.getEs('3')
.then(res => res.json())
.then(({message, data}) => {
	const result = []
	data.forEach(item => {if(parseInt(item) <= 3) result.push(item)})
	api.postEs(result, '3')
	.then(res => res.ok ? console.log('Done') : console.log('Errore!'))
	.catch(console.log)
})
.catch(console.log)
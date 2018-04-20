const fetch = require('node-fetch')

const apiUrl = 'http://192.168.1.231:8080'

const accreditamento = () => {
	fetch(`${apiUrl}/accreditamento`,  { 
	    method: 'POST',
	    headers: { 
	    	'Content-Type': 'application/json'
	    },
	        body: JSON.stringify({
	    		nome: 'Emanuele Zanni'
	    })
    })
	.then(res => {
		if(res.ok) {
			console.log('Accreditamento done!')
			return
		}
		throw new Error(res.message)
	})
	.catch(console.log)
}

const es1 = () => 
	fetch(`${apiUrl}/esercizi/1`, {
		headers: {
			'x-data' : true
		}
	})
	.then(res => res.json())
	.then(({message, data}) => {
		let result
		data.forEach(item => {
			result = result + item
		})
		fetch(`${apiUrl}/esercizi/1`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json' 
			},
			body: JSON.stringify({
				data: result
			})
		})
		.then(res => {
			if(res.ok){
				console.log('Bravo!')
				return
			}
			console.log(res.statusCode)
		})
		.catch(console.log)
	})
	.catch(console.log)

//accreditamento();
es1();
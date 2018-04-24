const fetch = require('node-fetch')

const e = module.exports

const apiUrl = 'http://192.168.1.231:8080'

e.accreditamento = () => {
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

e.getEs = (exNum) =>
	fetch(`${apiUrl}/esercizi/${exNum}`, {
		headers: {
			'x-data' : true
		}
	})

e.postEs = (result, exNum) => 
	fetch(`${apiUrl}/esercizi/${exNum}`, {
		method : 'POST',
		headers: {
			'content-type' : 'application/json'
		},
		body : JSON.stringify({
			data: result
		})
	})
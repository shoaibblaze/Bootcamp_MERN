const request = require('request');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/future.json',
  qs: {q: 'London', dt: '2022-12-25'},
  headers: {
    'X-RapidAPI-Key': '4b21af8b80msh6aed20bd8485075p1353d4jsn6a2a6f7bc72d',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
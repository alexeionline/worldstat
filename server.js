var express = require('express')
var app = express()
var pages = ['population', 'area', 'cities'];

app.use(express.static('.'))

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

app.use('/:path', function (req, res) {
	if (pages.indexOf(req.params.path) !== -1) {
		res.sendFile(__dirname+'/index.html');
	} else {
		res.redirect('/population');
	}
});


// var a = $('.h1 tr').map(function(i, tr) { 

// var name = $(tr).find('td').eq(1).find('a').text();
// var country = $(tr).find('td').eq(7).find('a').text();
// var population = $(tr).find('td').eq(3).contents()[1] ? $(tr).find('td').eq(3).contents()[1].nodeValue.replace(new RegExp(/\,/, 'g'), '') : '';

// return {n: name + " (" + country +")" , v: population}; 

// })
// 
// 
// // client
// <BrowserRouter>
//   <App/>
// </BrowserRouter>

// // server (not the complete story)

// if (context.url) {
//   // Somewhere a `<Redirect>` was rendered
//   redirect(301, context.url)
// } else {
//   // we're good, send the response
// }
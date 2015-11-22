 
console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

tweet();
setInterval(tweet, 1000*20);

function tweet(){
	function makeid()
		{
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}
	//var r = Math.floor(Math.random() * 100 + 1);
	var tweet = {
		status: 'Here are random letters: ' + makeid() + ' '
	}


	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Something went wrong.");
			console.log(data)
		} else {
			console.log("Tweet Successful.");
		}
		
	}
	console.log(makeid)
}
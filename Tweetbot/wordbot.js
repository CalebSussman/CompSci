 
console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

tweet();
setInterval(tweet, 1000*20);

function tweet(){
	var words = require('./wordlist')

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

console.log(word);
	//var r = Math.floor(Math.random() * 100 + 1);
	var tweet = {
		status: 'Here is a random word: ' + word + ' '
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
	console.log(word);
}
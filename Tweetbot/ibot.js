console.log('The image bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var exec = require('child_process').exec;

var cmd = 'processing-java --sketch=`pwd`/draw --run'

exec(cmd, procesing);

function processing(){
	console.log('finished');
}



/*function tweetIt() {

	var tweet = {
	  status: 'txt'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wrong!");
	  } else {
	    console.log("Tweet successful");
	  }
	}
}*/;
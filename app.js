const Twit = require('twit');

const T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

const stream = T.stream('statuses/filter', { track: 'moon' });

stream.on('tweet', function (tweet) {
  const id = tweet.id_str;
  const username = "@" + tweet.user.screen_name;

	T.post('statuses/update', { status: username + "That's no moon..", in_reply_to_status_id: tweet.id });
});

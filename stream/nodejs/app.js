'use strict'


var te_client = require('./te_client'),
	Client = new te_client({
		url: 'ws://stream.tradingeconomics.com/',
		key: 'guest', //API_CLIENT_KEY
		secret: 'guest' //API_CLIENT_SECRET
		//reconnect: true
	});



Client.subscribe('calendar'); //recive stream data for calendar events

Client.subscribe('EURUSD');



Client.on('message', function(msg){
	console.log('\n Data from TradingEconomics stream: ', msg.topic);
	console.log(msg);

	//parse/save msg to DB
});

//...



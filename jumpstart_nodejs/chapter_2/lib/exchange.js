'use strict';

var $ = require('jquery'),
	BinaryHeap = require('./BinaryHeap');

var BUY = "buys", SELL = "sells";

function createBinaryHeap(orderType){
	return new BinaryHeap(function(x){
		return x;
	}, orderType);
}

function createExchange(exchangeData) {
	var cloned = $.extend(true, {}, exchangeData);
	cloned.trades = [];
	init(cloned, BUY);
	init(cloned, SELL);
	return cloned;

	function init(exchange, orderType){
		if(!exchange[orderType]){
			exchange[orderType] = {};
			exchange[orderType].volumes = {};
			var options = {};
			if (BUY == orderType) options.max = true;

			exchange[orderType].prices = createBinaryHeap(options);
		}
	}
}
var idle = {};

idle.debug = false;

idle.timer = 100; //Default, 1/100 of a second.

idle.secondsToTick = function(number){
	if(idle.loop.obj !== false){
		return ((number * idle.timer) / 1000).toFixed(2); //This lets us have a variable rate on the timer so that we can hopefully let users tweak their own performance to balance between the satisfaction of constantly ticking numbers and the life of their battery/performance of their processor.
	}else{
		//While this branch seems useless, it lets us reuse the same code and objects for turn based and timer based operations. Which means we can reuse logic for idle games and DnD tools/GPX code.
		return number;
	}
}

idle.resources = [];

idle.tick = function(){
	for(i in idle.resources){
		idle.resources[i].tick();
	}
	if(idle.debug == true){
		console.log('Tick Complete: ' + idle.resources.length + ' calculations.');
	}
}

//Resource constructor
idle.Resource = function (name){
	this.name = name;
	this.count = 0;
	this.multi = 1;
	this.producers = [];
	return this;
}

//Producer constructor
idle.Producer = function(options){
	this.name = options.name
	this.count = 0;
	this.multi = 1;
	this.baseCost = options.cost;
	this.cost = options.cost;
	this.buyResource = options.buyResource;
	this.rate = options.rate;
	this.produces = options.produces;
	this.id = options.id;
	if(options.consumes !== undefined && options.consumes !== false){
		this.consumes = options.consumes;
	}else{
		this.consumes = [];
	}
	options.produces.producers.push(this);
	return this;
}

idle.Producer.prototype.consume = function(options){
	//This sets up a consumer relationship between two resources;	
	var obj = {
		rate: options.rate,
		resource: options.resource,
		multi: options.multi
	};
	this.consumes.push(obj);
}

idle.Producer.prototype.bMult = 1.15;

//So, we need a way to calculate cost over multiples
idle.Producer.prototype.cost = function(number){
	var calcMult = this.bMult;
	if(number > 0){
		calcMult = Math.pow(calcMult, number);
	}else{
		calcMult = 1 - calcMult;
		calcMult = Math.pow(calcMult, (number * -1));
	}
	return this.cost * calcMult;
}

idle.Producer.prototype.buy = function(){
	if(this.buyResource.count >= this.cost){
		this.buyResource.count += this.cost * -1;
		this.count++;
		this.cost *= this.bMult;
		this.cost = Number(this.cost.toFixed(2));
	}
}

idle.Producer.prototype.sell = function(){
	if(this.count > 0){
		/*
		Name: Stephen Kennedy
		Date: 8/21/19
		Comment: So, the calculation for a sellback of the producer should be half what we paid. Since we increment the cost after we do the buy, we need to reverse that;
		*/
		var oldCost = this.cost * (1 - (this.bMult - 1));
		var refund = oldCost * .5;
		this.buyResource.count += refund;
		this.cost = oldCost;
		this.count--;
	}
}

/*idle.Producer.prototype.produce = function(){
	
}*/

idle.Resource.prototype.tick = function(){
	var add = 0;
	for(var i in this.producers){
		var enough = true;
		var p = this.producers[i];
		if(p.count > 0){
			for (var c in p.consumes){
				var con = p.consumes[c];
				if(con.resource.count < (idle.secondsToTick(con.rate) * con.multi)){
					enough = false;
				}else{
					if(idle.debug == true){
						console.log(con.resource.name + ' -= ' + (idle.secondsToTick(con.rate) * con.multi));
					}
					con.resource.count -= (idle.secondsToTick(con.rate) * con.multi);
				}
			}
			if(enough == true){
				add += p.count * idle.secondsToTick(p.rate) * p.multi;
			}
		}
	}
	add *= this.multi;
	if(idle.debug == true){
		console.log(this.name + ' += ' + add);
	}
	if(this.count == NaN){ //To account for incorrectly inited values
		this.count = 0;
	}
	this.count += Number(add.toFixed(6));
	this.count = Number(this.count.toFixed(6));
}

idle.Resource.prototype.register = function(){
	idle.resources.push(this);
}



//Loop logic
idle.loop = {};
idle.loop.obj = false;
idle.loop.start = function(){
	idle.loop.obj = setInterval(idle.tick, idle.timer);
}
idle.loop.stop = function(){
	clearInterval(idle.loop.obj);
}
idle.loop.restart = function(){
	idle.loop.stop();
	idle.loop.start();
}
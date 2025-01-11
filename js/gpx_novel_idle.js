//idle.timer = 1000;
var gpx_idle = {};

gpx_idle.loop = setInterval(statDraw, idle.timer);

var fame = new idle.Resource('fame');
fame.count = 0;
fame.tick = function(){
	var add = 0;
	fame.count = hero.fame;
	for(var i in this.producers){
		var enough = true;
		var p = this.producers[i];
		if(p.count > 0){
			for (var c in p.consumes){
				var con = p.consumes[c];
				if(con.resource.count < (idle.secondsToTick(con.rate) * con.multi)){
					if(idle.debug == true){
						console.log('Not enough ' + con.resource.name);
					}
					enough = false;
				}else{
					if(idle.debug == true){
						console.log(con.resource.name + ' -= ' + (idle.secondsToTick(con.rate) * con.multi));
						console.log(con.resource.name + ' current ' + con.resource.count);
					}
					con.resource.count += Number(idle.secondsToTick(con.rate) * con.multi) * -1;
					if(con.resource.name == 'fame'){
						hero.fame = con.resource.count;
					}else{
						hero.i = con.resource.count;
					}
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
	hero.fame = this.count;
}
fame.register();

var inspo = new idle.Resource('insperation');
inspo.count = 0;
inspo.tick = function(){
	var add = 0;
	inspo.count = hero.i;
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
					con.resource.count += (idle.secondsToTick(con.rate) * con.multi) * -1;
					if(con.resource.name == 'fame'){
						hero.fame = con.resource.count;
					}else{
						hero.i = con.resource.count;
					}
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
	hero.i = this.count;
}
inspo.register();

gpx_idle.muse = new idle.Producer({
	name: 'muse(s)',
	id: 'muse',
	rate: 0.1,
	produces: inspo,
	cost: 10,
	buyResource: fame
});

gpx_idle.library = new idle.Producer({
	name: 'librarian(s)',
	id: 'library',
	rate: 1,
	produces: inspo,
	cost: 100,
	buyResource: fame
});

gpx_idle.politics = new idle.Producer({
	name: 'politician(s)',
	id: 'politics',
	rate: 10,
	produces: inspo,
	cost: 1000,
	buyResource: fame
});

gpx_idle.army = new idle.Producer({
	name: 'army',
	id: 'army',
	rate: 100,
	produces: inspo,
	cost: 10000,
	buyResource: fame
});

gpx_idle.poet = new idle.Producer({
	name: 'poet(s)',
	id: 'poet',
	rate: 0.1,
	produces: fame,
	cost: 20,
	buyResource: fame
});

gpx_idle.poet.consume({
	rate: 5,
	multi: 1,
	resource: inspo,
});

gpx_idle.novelist = new idle.Producer({
	name: 'novelist(s)',
	id: 'novelist',
	rate: 0.5,
	produces: fame,
	cost: 200,
	buyResource: fame
});

gpx_idle.novelist.consume({
	rate: 25,
	multi: 1,
	resource: inspo
});

gpx_idle.reporter = new idle.Producer({
	name: 'reporter(s)',
	id: 'reporter',
	rate: 5,
	produces: fame,
	cost: 2000,
	buyResource: fame
});

gpx_idle.reporter.consume({
	rate: 125,
	multi: 1,
	resource: inspo
});

gpx_idle.marketer = new idle.Producer({
	name: 'marketing firm(s)',
	id: 'marketer',
	rate: 50,
	produces: fame,
	cost: 20000,
	buyResource: fame
});

gpx_idle.marketer.consume({
	rate: 625,
	multi: 1,
	resource: inspo
});

gpx_idle.buyMenu = function(){
	wWrite('Stepping into your office, you push aside various rejection letters and death threats to look at your collection of business ledgers and resumes.<br>');
	mClear();
	for( var i in gpx_idle ){
		var o = gpx_idle[i];
		if(idle.debug == true){
			console.log(o);
		}
		if(o.rate != undefined && o.count != undefined && o.count > 0){
			wWrite('You have ' + o.count + ' ' + o.name + ' producing ' + (o.rate * o.count * o.multi * o.produces.multi).toFixed(2) + ' ' + o.produces.name + ' per second.<br>', false);
		}
	}
	//gpx_idle.loop = setInterval(gpx_idle.menu, idle.timer);
	gpx_idle.menu();
	//mWrite('gpx_idle.clearDesk', 'Return to your desk', false);
}

gpx_idle.menu = function(){
	mClear();
	for( var i in gpx_idle ){
		var o = gpx_idle[i];
		if(o.rate != undefined && o.count != undefined && o.buyResource.count >= o.cost){
			mWrite('gpx_idle.' + o.id + '.buy', 'Buy a ' + o.name + ' (' + o.cost.toFixed(2) + ' ' + o.buyResource.name + ').', false);
		}
	}
	if(gpx_idle.upgrades != undefined){
		for( var i in gpx_idle.upgrades ){
			
		}
	}
	mWrite('gpx_idle.clearDesk', 'Return to your desk', false);
}

gpx_idle.clearDesk = function(){
	//clearInterval(gpx_idle.loop);
	atDesk();
}

idle.Producer.prototype.buy = function(){
	if(this.buyResource.count >= this.cost){
		this.buyResource.count += this.cost * -1;
		this.count++;
		this.cost *= this.bMult;
		if(this.buyResource.name == 'fame'){
			hero.fame = this.buyResource.count;
		}else{
			hero.i = this.buyResource.count;
		}
	}
	gpx_idle.buyMenu();
}

idle.loop.start();
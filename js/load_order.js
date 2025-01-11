//At the beginning of this document, we do not have jquery loaded, so we will rely on vanilla JS DOM calls for our manipulation

//First, we need to let the user know what is going on
var load = '<div class="spinner"><i class="fa fa-cog"></i></div><div><h2 id="info" class="loading"></h2></div>';
var main = document.getElementById('main');
var images = {
			'Courtyard' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspd1F0X3M1TG93ek0",
			'Forest' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspSFRQUm1UZGk4R00",
			'Glade' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspMGJjLWVNN1IzVnc",
			'Home' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspdE1PdTlPdkZSRDA",
			'Market' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspTUM5RkIyZnVwY28",
			'Mountain' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspREtQTDVKUmZpNXM",
			'Porch' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspM0dRTVZoLUViTmM",
			'Ruins' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspNlNpOXFHX2JTU1E",
			'Town' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspMk92UWc2T2VpRVU",
			'Village' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspWEE3NjNXWGR3OGM",
			'Temple' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspck8yMUJmVkx2aEU",
			'Fire' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspcUJiMkhRb0ZsSUk",
			'Fog' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspUTUyLWJVU3FaQmM",
			'LightningStrike' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspZm54Yl9BaGpiMVU",
			'Muggy' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspLUtmOGRmdUVkbUE",
			'Rain' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspekE5SnJKOGpaaWM",
			'Snow' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspVG1QRTM3UDJxcmc",
			'Wind' : "http://drive.google.com/uc?export=view&id=0BydWpN0x3nspbUNzX3hmTmJlNDA"
};
var loadedImgs = [];
var loadArray = [];

var scripts = {
	'jQuery' : 'JS/jquery.min.js',
	'jQuery UI': 'JS/jquery.ui.min.js'
}
var scriptArray = [];

var totalToLoad = Object.keys(images).length + Object.keys(scripts).length;
var totalLoaded = 0;

main.innerHTML = load;

var info = document.getElementById('info');

//Now we load our JavaScript Dependencies

for(i in scripts){
	scriptArray.push(i);
}
scriptLoad(0);

function scriptLoad(index){
	totalLoaded += 1;
	var script = scriptArray[index];
	console.log('Script: '+script);
	info.innerHTML = 'Loading ' + script + ' ('+ ((totalLoaded / totalToLoad) * 100) +'%)';
	loadjs([scripts[script]], script);
	loadjs.ready(script, {
		success: function(){
			if(scriptArray[index + 1] != undefined){
				scriptLoad(index + 1);
			}
			else{
				imgLoad();
			}
		},
		error: function(){
			info.innerHTML = 'Load Error: '+script+' Doc';
		}
	});
}

function imgLoad(){
	main = $('#main');
	info = $('#info');
	
	for(i in images){
		loadArray.push(i);
	}
	preload(0);
	
}

function preload(index){
	if(index != loadArray.length){
		totalLoaded += 1;
		var i = loadArray[index];
		var image = images[i];
		var name = i;
		
		info.html('Loading Image: ' + name + ' ('+ ((totalLoaded / totalToLoad) * 100) +'%)');
			
		loadedImgs[i] = new Image();
		loadedImgs[i].src = image;
		$(loadedImgs[i]).on('load',function(){
			preload(index + 1);
		});
	}else{
		mainLoad();
	}
}

//Loading after JQuery UI moved to own function to keep things from getting too ridiculously nested
function mainLoad(){
	info.html('Depenencies loaded');
	
	//Before we do anything else, let's build out our screenspace
	
	var screen = '<div id="output"></div><div id="menu"></div>';
	var popups = '<div id="character" class="popup"><h4><i class="fa fa-times-circle-o"></i></h4><div class="contents"></div></div><div id="info" class="popup"><h4><i class="fa fa-times-circle-o"></i></h4><div class="contents"></div></div><div id="inv" class="popup"><h4><i class="fa fa-times-circle-o"></i></h4><div class="contents"></div></div><div id="submenu" class="popup"><h4><i class="fa fa-times-circle-o"></i></h4><div class="contents"></div></div>';
	
	main.html(screen);
	$('#sub').html(popups);
	
	loadjs(['JS/gpx_r_main_branch.js'], 'main');
	loadjs.ready('main', {
		success: function(){
			console.log('loaded');
			$('html').addClass('ready');
		},
		error: function(){
			$('#output').html('Error loading gpx_r_main.js');
		}
	});
}
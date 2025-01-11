//File Locations Live

var blankImg = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspbGtsdk5rQkVKQWs";
var rainWeather = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspekE5SnJKOGpaaWM";
var snowWeather = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspVG1QRTM3UDJxcmc";
var fogWeather = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspUTUyLWJVU3FaQmM";
var muggyWeather = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspLUtmOGRmdUVkbUE";
var lightningEffect = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspZm54Yl9BaGpiMVU";
var fireEffect = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspcUJiMkhRb0ZsSUk";
var windEffect = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspbUNzX3hmTmJlNDA";
var houseBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspdE1PdTlPdkZSRDA";
var courtyardBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspd1F0X3M1TG93ek0";
var forestBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspSFRQUm1UZGk4R00";
var gladeBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspMGJjLWVNN1IzVnc";
var marketBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspTUM5RkIyZnVwY28";
var mountainBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspREtQTDVKUmZpNXM";
var porchBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspM0dRTVZoLUViTmM";
var ruinsBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspNlNpOXFHX2JTU1E";
var templeBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspck8yMUJmVkx2aEU";
var townBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspMk92UWc2T2VpRVU";
var villageBack = "https://drive.google.com/uc?export=view&id=0BydWpN0x3nspWEE3NjNXWGR3OGM";


//File Locations Local

var blankImg = "img/blank.png";
var rainWeather = "img/rain.png";
var snowWeather = "img/snow.png";
var fogWeather = "img/fog.png";
var muggyWeather = "img/muggy.png";
var lightningEffect = "img/lightningStrike.png";
var fireEffect = "img/fire.png";
var windEffect = "img/wind.png";
var houseBack = "img/Home.png";
var courtyardBack = "img/courtyard.png";
var forestBack = "img/ForestBackground.png";
var gladeBack = "img/glade.png";
var marketBack = "img/Market.png";
var mountainBack = "img/Mountain.png";
var porchBack = "img/porch.png";
var ruinsBack = "img/ruins.png";
var templeBack = "img/Temple.png";
var townBack = "img/Town.png";
var villageBack = "img/Village.png";

var pImgs = [
	blankImg,
	rainWeather,
	snowWeather,
	fogWeather,
	muggyWeather,
	lightningEffect,
	fireEffect,
	windEffect,
	houseBack,
	courtyardBack,
	forestBack,
	gladeBack,
	marketBack,
	mountainBack,
	porchBack,
	ruinsBack,
	templeBack,
	townBack,
	villageBack,
];

$(document).ready(function(){
	for(i in pImgs){
		$('#preload').append('<div style="background-image:url('+pImgs[i]+');"></div>');
	}

	if(typeof weather_fx == 'object'){
		weather_fx.init();
	}
});

//Other Global Variables
var windowBackup = "Error: No information has been stored here.";
var menuBackup = "Error: No information has been stored here.";

//Variable Definitions

var outputW = document.getElementById("window");
var menu = document.getElementById("menu");
var locationDisplay = document.getElementById("location");
var characterSheet = document.getElementById("characterSheet");
var characterName = document.getElementById("characterName");
var characterAge = document.getElementById("characterAge");
var characterStr = document.getElementById("characterStr");
var characterSpd = document.getElementById("characterSpd");
var characterDef = document.getElementById("characterDef");
var characterAcc = document.getElementById("characterAcc");
var characterHP = document.getElementById("characterHP");
var characterMana = document.getElementById("characterMana");
var weaponDisplay = document.getElementById("weapon");
var fameDisplay = document.getElementById("fame");
var debugBool = false;
var screenWidth = window.innerWidth * .97;
var screenHeight = window.innerHeight * .97;
var setWindowHeight = 72;
var setMenuHeight = .21 * screenHeight;
var setNameHeight = .12 * screenHeight;
var characterSheetHeight = .88 * screenHeight;

//start timer clock
var second = 0;
var min = 0;
var hour = 0;
var day = 0;
var month = 0;
var year = 0;


var generation = 0;
hero = new Object ();
monster = new Object ();
set = new Object();
map = new Object();
	map.data = [];
	map.roomOrigins = [];
monWeap = new Object ();
	monWeap.type = "claw";
	monWeap.Atk = 2;
	monWeap.name = "";
	monWeap.material = "ether";
	monWeap.bStr = 0;
	monWeap.bSpd = 0;
	monWeap.bDef = 0;
	monWeap.bAcc = 0;

dropWeap = new Object ();
	dropWeap.type = "claw";
	dropWeap.Atk = 2;
	dropWeap.name = "";
	dropWeap.material = "ether";
	dropWeap.bStr = 0;
	dropWeap.bSpd = 0;
	dropWeap.bDef = 0;
	dropWeap.bAcc = 0;
	
scrapWeap = new Object ();
rivalWeap= new Object();
weapHols1 = new Object();
	weapHols1.bool = false;
	weapHols1.desc = "back holster";
weapHols2 = new Object();
	weapHols2.bool = false;
	weapHols2.desc = "hip holster";
weapHols3 = new Object();
	weapHols3.bool = false;
	weapHols3.desc = "ankle holster";
weap = new Object();
	weap.bStr = 0;
	weap.bSpd = 0;
	weap.bDef = 0;
	weap.bAcc = 0;
monArmor = new Object ();
heroArmor = new Object();
child = new Object();
rival = new Object();
partner = new Object();
dog = new Object();
quest = new Object();
	quest.object = "I AM ERROR #101 - var quest.object was not updated";
	quest.bossBattle = false;
	quest.dungeon = false;
monWeap = new Object();
desk = new Object();
	desk.works = [];
	desk.summaries = [];
	desk.level = 0;
	desk.diction = 1;
	desk.poetics = 1;
	desk.form = 1;
	desk.style = 1;
	desk.experience = 0;
	desk.nxtLvl = 100;
	desk.bool = false;
novel = new Object();
	novel.title = "";
	novel.genre = "";
	novel.rate1 = 0;
	novel.rate2 = 0;
	novel.rate3 = 0;
	novel.avgRate = 0;
	novel.summary = "It's a book.";
monWeap.existBool = false;
embedWeap = new Object();
embedWeap.existBool = false;
quest.bool = false;
dogFightBool = false;
rivalFightBool = false;
monsterDesc = "";

//Quest text
var sQ1GiverDesc = "Princess Knottington is a waifer of a Drawer. Probably half a foot tall, and not more than a pound and a half, but she wears her ten gallon hat proudly and at a rakish angle. She's the only person in the entire saloon, save a few tumble weeds peering deeply into their dusty beers.";

var sQ1SaloonDesc = "In the distance you see an old run down building with a faded wooden sign of a frothy mug full of beer, the doors hanging drunkenly from their hinges.";

//Any text containing variable characters needs to be declared within the function, after they have already been defined. Otherwise it will return "undefined".

var sQ1GiverText = "Howdy Pardner.<br>Used to be this place was packed at a time like this. 'Course, this little village used to be a pretty bustlin' place, bein' the only railroad stop for miles.<br>I reckon congrats are in order for takin' down the " + rival.lName + " family. Where I'm from, they'd apologize 'n that would be the end of it. But I 'spose it ain't much of a kind world anymore. There ain't a hero in the kingdom that'd do what I'm gonna ask of you, but I reckon we need someone ruthless to get it done.<br>How 'bout it " + hero.fName +". You feel like growin' your legend?";

var sQ1NegativeResponse = "Pity.<br>See ya 'round, pardner. I'll be here if you change your mind.";

var sQ1PositiveResponse = "Right, 'bout a month ago, three piglets ran off to play in the mine. They didn't come back. Since then brave souls have been following them down one by one, but ain't a soul come back.<br> Now they're all gone, 'n I'm sendin' you.<br><br>Find the children.<br>Bring 'em home.<br>Ain't no reward but your name passin' my lips on occasion.";

var sQ1HistoricalDesc = [
"It is covered in engravings of what appear to be a great dragon lighting a grill.",
"There is an enscription here: 'The Empress Laid Here Snooze To Rest. Never Again An Alarm To Chime.'"
];


//Game built arrays
var familyTree = [];
var killedmonsters = [];
var insper = [];
var monHistory = [];
var hisFigures = [];
var hisBook = [];
var forgedWeapons = [];
hero.inventory = [];
hero.inventoryCap = 20;

//generation variables
var monGenStr = 3;
var monGenSpd = 3;
var monGenDef = 3;
var monGenAcc = 3;
var monUGenStr = 100;
var monUGenSpd = 100;
var monUGenDef = 100;
var monUGenAcc = 100;
var ePigGenStr = 1000000;
var ePigGenDef = 100000;
var ePigGenAcc = 100;
var ePigGenSpd = 1000;
var demGenStr = 30;
var demGenSpd = 30;
var demGenDef = 30;
var demGenAcc = 30;
var demUGenStr = 1000;
var demUGenSpd = 1000;
var demUGenDef = 1000;
var demUGenAcc = 1000;
var rivalGenStr = 1000000;
var rivalGenSpd = 1000000;
var rivalGenDef = 1000000;
var rivalGenAcc = 1000000;

//theme variables
var tColor = 0;
var bColor = 0;


//Male titles
var titlesMale = [
	"Doctor" , 
	"Dr." , 
	"Sir" , 
	"Mr." , 
	"Mister" ,  
	"Master" , 
	"Librarian" , 
	"Prof." , 
	"Professor" , 
	"Lord" ,
	"Saint" ,
	"Nobel" ,
	"Brave" ,
	"Legendary" ,
	"Fry Cook" ,
	"Clerk" ,
	"Associate" ,
	"Volunteer" ,
	"Hourly" ,
	"Spot-Op",
	"Desk Jocky",
	"Manager",
	"Well-Read"
];

//Female titles
var titlesFemale = [
	"Mrs." ,
	"Ms." ,
	"Lady" ,
	"Prof." ,
	"Professor" ,
	"Dr." ,
	"Doctor" ,
	"Madam" ,
	"Ma'am" ,
	"Librarian",
	"Saint" ,
	"Nobel" ,
	"Brave" ,
	"Legendary" ,
	"Fry Cook" ,
	"Clerk" ,
	"Associate" ,
	"Volunteer" ,
	"Hourly" ,
	"Spot-Op",
	"Desk Jocky",
	"Manager",
	"Well-Read"
];

//First names
var namesFirst = [
  "Greg",
  "Stephen",
  "Frank",
  "Stuart",
  "Donald",
  "Bob",
  "Robert",
  "Nancy",
  "Colleen",
  "Clayton",
  "Brittany",
  "Alisha",
  "Keisha",
  "Ashley",
  "Ashleigh",
  "Steven",
  "Kevin",
  "Kirsten",
  "Kristen",
  "Kelly",
  "Mellisa",
  "Melvin",
  "Gregory",
  "Davin",
  "Soap",
  "Allegory",
  "Kincaid",
  "Annie",
  "Lauren",
  "Mud",
  "Banana",
  "Kerrigor",
  "Ellen",
  "Edward",
  "Edwardo",
  "Jesus",
  "Julio",
  "Grace",
  "Selma",
  "Velma",
  "Deb",
  "Debby",
  "Debera",
  "Barbera",
  "Evin",
  "Evan",
  "Box",
  "Fisk",
  "Apple",
  "Dime",
  "Megan",
  "Meg",
  "Gavin",
  "Devin",
  "MotherTrucker",
  "Chelsie",
  "Kelsi",
  "Martin",
  "Andrew",
  "Levi",
  "Lindsey",
  "Box",
  "Garion",
  "Belgarath",
  "Polgara",
  "Sips",
  "Ron",
  "Bobert",
  "Dessert",
  "Hungry",
  "Hobo",
  "Biceps",
  "No Name",
  "Gary",
  "Snail",
  "Tiger",
  "Elephant",
  "Ant-Eater",
  "Jaws",
  "Simon",
  "Lewis",
  "Terps",
  "Kim",
  "Kimstopher",
  "Duncan",
  "Hannah",
  "Santa",
  "Nicolas",
  "Claus",
  "Edginald",
  "Rudolph",
  "Mark",
  "Charles",
  "Morgan",
  "Troy",
  "Denny",
  "Brad",
  "Heather",
  "Jennifer",
  "Sunshine",
  "Wine",
  "Pear",
  "Plum",
  "Tony",
  "Whiskey",
  "Tequila",
  "Snapps",
  "Vodka",
  "Gin",
  "Mead",
  "Jimmy",
  "Kyle",
  "Winapeg",
  "Shawnda",
  "Ice-Cream-Smoothy",
  "Johnson",
  "Doctor",
  "Lewis",
  "Stubble",
  "Snaggle",
  "Stump",
  "Wick",
  "John",
  "Gwamp",
  "Cash",
  "Money",
  "Benjamin",
  "Penny",
  "Dime",
  "Nickle",
  "Quarter",
  "Quota",
  "Snack",
  "Master",
  "Brick",
  "Cobble",
  "Gravel"
];

//Surname suffix
var suffix = [
	"Le",
	"Mac",
	"Mc",
	"Da",
	"Dumb"
];

//Last names
var namesLast = [
  "Rockgouger",
  "Mason",
  "Smith",
  "Motherfucker",
  "Jones",
  "Meadows",
  "Swordswallower",
  "Becker",
  "Heim",
  "Morales",
  "Lefty",
  "Stone",
  "Poop",
  "Warshtishiremirepirefireliar",
  "Deacon",
  "Embergrab",
  "Kennedy",
  "Green",
  "Orange",
  "Blue",
  "Purple",
  "Sword",
  "Axe",
  "Kimmel",
  "Lee",
  "Johnson",
  "Decker",
  "Grub",
  "Eater",
  "Dier",
  "Yellow",
  "Bellyacher",
  "Arrow",
  "Flint",
  "Paper",
  "Rock",
  "Banana",
  "Mud",
  "Munson",
  "Small",
  "Nystrom",
  "Brimley",
  "Brimly",
  "Mustache",
  "Mulder",
  "Cambell",
  "Hitchcock",
  "Comstock",
  "Driftwood",
  "Large",
  "Moonshine",
  "Hamm",
  "Cooper",
  "Myers",
  "Poofball",
  "Noodle",
  "Yam",
  "Tumbleweed",
  "Weed",
  "Hasslecough",
  "Taco",
  "Albatross",
  "Hemmingpath",
  "Frost",
  "Hawespike",
  "Cooper",
  "Vick",
  "Trite",
  "Midnight",
  "Abyss",
  "Void",
  "Absent"
];


//Genres
var genre = [
	"Western",
	"Sci-Fi",
	"Speculative Fiction",
	"Literature",
	"YA",
	"NA",
	"Romance",
	"Non-Fiction",
	"Children's Fiction",
	"Action",
	"Religion",
	"Historical Fiction",
	"Holy Text",
	"Post-post-modern",
	"High Fantasy",
	"Autobiography",
	"Biography",
	"Reference Book",
	"Dictionary",
	"Pamphlet",
	"Manual",
	"Poem",
	"Play"
];

//Conflict Structures
var conStruct = [
	"Person vs Person",
	"Person vs Nature",
	"Person vs God",
	"Person vs Self"
];

//Settings
var setting = [
	"Space",
	"Jersey",
	"London",
	"A Waterfall",
	"The Jungle",
	"The Bedroom",
	"An Apartment"
];

//monster species
var monSpec = [
  "Goblin",
  "Dragon",
  "Sphinx",
  "Manticore",
  "Protester",
  "Orc",
  "Elf",
  "Dwarf",
  "Vampire",
  "Werewolf",
  "Wizard",
  "Bandit",
  "Rotten Fruit Bowl",
  "Turtle Biker",
  "Creeper",
  "Mooshroom",
  "Pig",
  "Sheep",
  "Cow",
  "Chicken",
  "Chuck",
  "Bat",
  "Zombie",
  "Skeleton",
  "Skellington",
  "Your Mum",
  "Your Mother",
  "Dirty Joke",
  "Foe",
  "Honeydew",
  "Desk",
  "Chair",
  "Drawer",
  "Pants",
  "Mop",
  "Newt",
  "Cthulu",
  "Elder God",
  "Bob",
  "Boggart",
  "Basilisk",
  "Centaur",
  "Cyclops",
  "Cockatrice",
  "Cerberus",
  "Dinner Roll",
  "Dryad",
  "Ent",
  "Fairy",
  "Faun",
  "Giant",
  "Gryphon",
  "Gremlin",
  "Gnome",
  "Gnasher",
  "Gargoyle",
  "Harpy",
  "Hydra",
  "Jackalope",
  "Leviathan",
  "Sand-worm",
  "Mermaid",
  "Merman",
  "Minotaur",
  "Mummy",
  "Mothman",
  "Naga",
  "Ogre",
  "Phoenix",
  "Pixie",
  "Roc",
  "Salamander",
  "Troll",
  "Unicorn",
  "Wendigo",
  "Wyvern",
  "Zombie",
  "Yeti",
  "Mall Santa",
  "ASCII Graphics",
  "Reigndeer",
  "Distant Relative",
  "Sales Clerk",
  "Overly Chipper Morning DJ",
  "Overly Aggressive Animatronic Nativity Jesus",
  "Fried Chicken",
  "Holiday Ham",
  "Holiday Themed Hamm",
  "Candy Bar",
  "Sleigh",
  "Sandwich",
  "Mistle Toe",
  "Evergreen Tree",
  "Oak Tree",
  "Very Large Bush",
  "Strong Wind",
  "Blizzard",
  "Snow Man",
  "An Old Priest, A New Priest, A Rabbi, and A Depressed Priest",
  "Txt MsG AU70-C0RR3C7",
  "Jangle Bells",
  "Tango Bells",
  "Mango Bells",
  "Bingo Bells",
  "Dingo Bells",
  "Tea-Time",
  "Claymation Figure",
  "Enchanted Hat",
  "Wizard's Apprentice",
  "Vague General Fear",
  "Icy Road",
  "Jingle Bells",
  "Mingle Bells",
  "Mangle Bells",
  "Insensitive Grizzly Bear",
  "Workshop Elf",
  "Lumberjack",
  "Lumberjane",
  "Leftovers",
  "Someone Else's Seven Evil Exes",
  "Snow Drift",
  "Zombified Relative",
  "Human Compassion",
  "Depression",
  "Aunt Margaret",
  "Rogue Water Hose",
  "Mountainous Mole-Hill",
  "Duck",
  "Octo-Palegic Octopus",
  "Zebra",
  "Sleep Deprived Over-Caffinated College Student",
  "Cowboy",
  "Snowboy",
  "Snow Cowboy",
  "Snow Covered Cowboy",
  "Accountant",
  "Lawyer",
  "Caffinated Child",
  "Overlong Sitcom",
  "Blanket",
  "Burrito",
  "A cold morning under warm blankets",
  "Prescription Glasses",
  "Zombified Turnip",
  "Nutritious Carrot",
  "Cake",
  "Peas",
  "Peace",
  "World Peace",
  "Reheated Homework",
  "Birthday",
  "Salutation",
  "Hello",
  "Agoraphobia",
  "Friendship",
  "Bungalow",
  "Feild-Mouse",
  "City-Mouse",
  "Country-Mouse",
  "Dire-Mouse",
  "Dire-Straints",
  "Bear",
  "Boar",
  "Wild Stag",
  "Wild Nag",
  "Wild Stallion",
  "Wild Mare",
  "Wild Fawn",
  "Domestic Deer",
  "Economic Inflation",
  "Unemployment Statistic",
  "Individuality",
  "Ethic",
  "Emotion"
];

var descWeightAdj = [
	"heavy",
	"light",
	"large",
	"skinny",
	"rail-thin",
	"oblong",
	"whisper"
];

var descHeightAdj = [
	"tall",
	"short",
	"ceiling scraping",
	"ankle-biting"
];

var monDescBodyTypes = [
	"short humanoid",
	"winged quadroped",
	"person",
	"tall humanoid",
	"still-life",
	"phallic shaped",
	"shelled quadroped",
	"abstract concept",
	"winged biped",
	"furniture",
	"clothing",
	"tool",
	"unknowable",
	"food"
];
	
	

//Demon species
var demonType = [
	"Alp",
	"Archdemon",
	"Bajang",
	"Cambion",
	"Demoness",
	"Demon",
	"Fallen Angel",
	"Familiar",
	"Incubus",
	"Jikininki",
	"Nickar",
	"Poltergeist",
	"Ghast",
	"Puck",
	"Nightmare",
	"Kappa",
	"Rokurokubi",
	"Succubus",
	"Drug Addiction",
	"Alcohol Addiction",
	"Exercise Addiction",
	"Caffeine Addiction",
	"Skeleton in your Closet",
	"Pig-Zombie",
	"Porn",
	"Dream",
	"Mirror",
	"Ideation"
];

//Legendary weapon names
var legWeapName = [
	"Cleaver",
	"Biter",
	"Seducer",
	"Prodder",
	"Impailer",
	"Defier",
	"Defiler",
	"Defecator",
	"Bifurcator",
	"Shitter",
	"Hammer",
	"Entertainer",
	"Chewer",
	"Yowler",
	"Eater",
	"Combuster",
	"Photographer",
	"Doctor"
];

//work events
var workEvent = [
	"Olympus Design's annual 'Watch Your Boss's Family Have A Picnic' Potluck",
	"The annual Toilet Cleaner's Ball",
	"another bi-weekly firing",
	"another meeting on the over-abundance of meetings",
	"another client meeting with a client who barely understands what they are asking you to do",
	"day after day of dealing with someone yelling at you over a register because they can't read the menu right over your head",
	"another day of asking people to sign up with Olympus Design's 'Club Savings!'",
	"a meeting where your boss is simply showing pictures of his vacation to someplace you'll never have money to go to",
	"one more argument about why you can't move out from your parent's house",
	"what should amount to sexual harrasment by customers, but because you have bills to pay... ",
	"another failed relationship",
	"another lecture from your parents about responsibility",
	"another foster home",
	"another year in debt",
	"another soup kitchen line",
	"another day in a cubical slightly left of the window.",
	"another funeral"
];

var weapType = [
	"blade",
	"axe",
	"knife",
	"ennui",
	"grammar",
	"food",
	"scrap",
	"ereader"
];

var bladeNames = [
	"Sword",
	"Katana",
	"Particularly pointy leaf",
	"Needle"
];
var axeNames = [
	"Cleaver",
	"Axe",
	"Hachet",
	"Crowbar",
	"Particularly Pointy Leaf",
	"Wrecking Bar"
];
var knifeNames = [
	"Knife",
	"Stick",
	"Small Rock",
	"Spoon",
	"Fork",
	"Fake Magic Wand",
	"Real Magic Wand",
	"Unweaponized Platonium",
	"Docile Platonium",
	"Harmless Platonium",
	"Bottle Stopper"
];
var ennuiNames = [
	"'The' Book",
	"Instructions",
	"Directions",
	"Dead-Horse",
	"Ennui",
	"Credit-Card",
	"Crippling Debt",
	"A Blank CD",
	"A Blank Page",
	"Gun with no Ammo",
	"Bow with no Arrows",
	"Dud Bomb",
	"Emptiness",
	"Blackmail",
	"Existential Crisis",
	"Sense of Impending Doom"
];
var grammarNames = [
	"!",
	"?",
	"|",
	"(C)",
	"(TM)",
	"Diction"
];
var foodNames = [
	"'Thing' on a Stick",
	"Bowl of Noodles",
	"Rice Dinner",
	"Spam",
	"Bacon",
	"Leg",
	"Meatballs",
	"Little Smokies",
	"Gummi Candy",
	"Cookie",
	"Cake",
	"Unassuming Carrot"
];
var miscNames = [
	"Nun-Shucks",
	"Flower",
	"Stick",
	"Small Rock",
	"Cartoonishly Large Boulder",
	"Flare",
	"Pool Noodle",
	"Scrap of Leather",
	"A Wallet Sized Photograph",
	"Paper Towel"
];
var ereaderNames = [
	"DM's Rulebook",
	"Employee Manual",
	"Directions",
	"The novel <i>Tower</i> by Devon Price",
	"The novel <i>Corpus Callosum</i> by Devon Price",
	"The short story collection <i>Myths</i> by Devon Price",
	"A kindle containing only the eShort <i>Then One Year</i> by Devon Price",
	"Vanity Published Novel",
	"Monster Manual",
	"A copy of <i>How to stop eating humans</i>",
];

//Weapons types, no ranged weapons because we're real warriors

//Armor types
var armTypes = [
	"rag",
	"pad",
	"plate-mail",
	"chain-mail",
	"old business suit",
	"top hat",
	"Monocle",
	"bow-tie",
	"shield",
	"kite-shield",
	"banana costume",
	"turtle shell",
	"jerky-foil suit",
	"boy-shorts",
	"tighty-whities",
	"skinny jeans",
	"microphone",
	"holy t-shirt",
	"hole-y t-shirt",
	"feather boa"
];


//Adjectives
var material = [
	"Stone",
	"Diamond",
	"Wood",
	"Iron",
	"Steel",
	"Glass",
	"Crystal",
	"Copper",
	"Gold",
	"Gravel",
	"Bread",
	"Garbage",
	"Clay",
	"Rot",
	"Rust",
	"Candy",
	"Peppermint",
	"Pumpkin",
	"Turkey",
	"Snow",
	"Ice",
	"Slush",
	"Yellow",
	"Plastic",
	"Stamped Metal",
	"Pewter",
	"Wool",
	"Flannel"
];

var hats = [
	"Top Hat",
	"Bowler",
	"Sun Hat",
	"Straw Hat",
	"Tiara",
	"Circlet",
	"Stove-Pipe Hat",
	"Fedora",
	"Ball-Cap",
	"Trucker Cap",
	"Gas Mask",
	"Tennis Visor",
	"Sticky Note",
	"Catcher's Mask",
	"Hockey Mask",
	"Halloween Mask",
	"Book",
	"Glasses",
	"Sunglasses"
];

var scarves = [
	"Scarf",
	"Cape",
	"Cloak",
	"Mantle",
	"Boa",
	"Bow-Tie",
	"Tie",
	"Bolo-Tie",
	"Kerchief"
];

var shirts = [
	"T-Shirt",
	"Jacket",
	"Armor",
	"Dress",
	"Blouse"
];

var shoes = [
	"Hiking Boots",
	"Tap-Shoes",
	"Character Shoes",
	"High-Heels",
	"Work Boots",
	"Combat Boots",
	"Sandels",
	"Flip-Flops",
	"Clogs",
	"Plastic Clogs",
	"Flats",
	"Water-socks"
];
	
//Death messages
var deathMsg = [
  "Well, shit. You are dead.",
  "Um, you are dead.",
  "You just fucking exploded! That means you are dead.",
  "Inexplicably, you die of a heart attack. That is what we are saying. It has nothing to do with you getting defeated.",
  "Good game, but you died.",
  "You suck, you just died.",
  "Off comes your arms, and then your legs, and then you're impaled, left to lie in a puddle of your own urine. You are dead.",
  "Hey there was this joke I heard one time where you died. This kind of reminds me of that, because, well, you just died.",
  "Now that you are dead, can you tell me if there is anything on the other side?",
  "Go, be with Spot, and every other pet that ever ran away, you are all dead together.",
  "If I told you that you were alive, I would be a liar.",
  "If only there were arrows somewhere in this game, then you might not have died.",
  "You ever get the feeling that your life means nothing? Well, the good news is that you were right. The bad is that you are dead.",
  "Ew, did you have to get your guts all over when you died?",
  "You died, and now the ghosts are collecting to rip apart your corpse. That sucks, I am so sorry.",
  "How many yous does it take to screw in a lightbulb? None. You are dead, so your lightbulb screwing days are over.",
  "You are dead. Good news though, no taxes for you this year.",
  "I completely steered you wrong, sorry about that. You are dead.",
  "In an effort to make this screen cheerier we are playing with punctuation. You are dead!",
  "Ow, that just had to hurt. I mean, it did kill you.",
  "Fuck me, you are dead.",
  "Alright, it is about time I told you that everyone dies. As for you, your time was just now.",
  "You are dead. Look on the bright side though, you never have to shit again.",
  "You just shit yourself, probably because you are dead.",
  "You lose your arm . . . and your life.",
  "You decide to cast off these adventurous ways and become a mime . . . but you were struck down. You are dead.",
  "Yeah, you are dead.",
  "If you notice, there are a lot of these messages, but they all mean the same thing. You are dead.",
  "Yes, sometimes these messages repeat. Get over it. You are dead.",
  "You are dead, or if you prefer, life impaired",
  "Your soul leaves your body and you collapse into a pile of bones and meat. You are dead.",
  "I could tell you how, but it would not make the slightest difference because you are dead now.",
  "D-E-A-D, spell it with me, come on!",
  "Oh dear. You're more done than the turkey is at this point. In fact, let me check on that. Yeah, another few hours at least. Not for you though. You're complete and totally done, dead even.",
  "Did you know that you can never really die? Good, because it's not true. You're all the evidence you'll ever need for that.",
  "This isn't a game about winning, so I guess, in a way, you're winning, because you died. Go you!",
  "Hey, don't go into the light! Wait, the doctor is shaking their head. They are talking to me. They want me to tell you to go into the light! There is nothing but pain and misery waiting for you here, your body is pretty messed up! They give you a painful year at most. It's best to just give up and accept your end now, really.",
  "Why are you so compelled to go back?",
  "I'm sorry, there's nothing witty to put here. This candy-cane is just too delicious. Three flavors!",
  "Merry Christmas! Well... to your surviving family, anyway, if you have any.",
  "Oh, uh, this is awkward... see... I only really talk to live people.",
  "OH JESUS ZOMBIE!!! Wait, no, it's just you. You're still dead though. Tough luck, that.",
  "God, that has got to suck. I'd say I was sorry, but it was pretty entertaining.",
  "I'm only doing this to you because it's fun.",
  "I'm doing this because I hate you.",
  "Think of the rabbits Lennie, think of the rabbits.",
  "Life has been painfully and completely removed from the split husk that is your remains.",
  "I didn't know people did that when they died. That's disgusting."
];

//monster attack messages
var monAtkMsg = [
	" slashes you with its claws",
	" drags its claws across your stomach",
	" horsey chomps you",
	" headbutts you",
	" kicks you",
	" throws a rock at you",
	" punches you",
	" pees on you",
	" insults you",
	" emotionally abuses you",
	" pokes you with a stick",
	" tea-bags you",
	" ignores you",
	" taunts you",
	" teases you",
	" flirts with you",
	" gives you a rude gesture"
];

//monster armed attack messages
var monArmAtkMsg = [
	" stabs you with its ",
	" slices you with its ",
	" pokes you with its ",
	" hits you with its ",
	" waggles at you with its ",
	" smacks you with its ",
	" blesses you with its ",
	" saints you with its "
];

var atkMonReactMsg = [
	"winces in pain.",
	"lets out a cry of pain.",
	"growls.",
	"spits blood.",
	"hobbles back into an attack position.",
	"is openly bleeding.",
	"curses you under its breath.",
	"glares at you, putting pressure on the wound.",
	"weeps openly.",
	"groans softly.",
	"laughs weakly.",
	"steams silently.",
	"wishes it was over."
];

var monDmgMsg = [
	"leaving a dark bruise on",
	"impailing",
	"removing a limb from",
	"hobbling",
	"breaking a bone in",
	"gutting",
	"decapitating",
	"cleaving",
	"drawing blood from",
	"scarring",
	"sickening",
	"removing a finger from",
	"declawing",
	"bifurcating",
	"injecting holiday cheer into",
	"grossing out",
	"stumbling",
	"upsetting",
	"ofending",
	"stupifying",
	"agrivating",
	"undulating",
	"captivating",
	"engorging",
	"destructing",
	"rending",
	"wrenching",
	"wasteing",
	"worrying",
	"destroying",
	"vaporizing"
];

//hero unarmed attack messages
var heroUnAtkMsg = [
	"You punch ",
	"You horsey chomp ",
	"You kick ",
	"You throw a rock at ",
	"You insult ",
	"You emotionally abuse ",
	"You tea-bag ",
	"You ignore ",
	"You taunt ",
	"You tease ",
	"You flirt with ",
	"You throw up a rude gesture at "
];

//hero armed attack messages
var heroArmAtkMsg = [
	"You stab the ",
	"You slice the ",
	"You poke the ",
	"You hit the ",
	"You waggle at the ",
	"You smack the ",
	"You bless the ",
	"You saint the "
];

//Rival dick moves
var rivalDickMoves= [
	"killed your dog.",
	"killed your cat.",
	"drowned your goldfish.",
	"drag-raced your turtle for its pink-slip.",
	"tripped you.",
	"spit in your face.",
	"cheated off your test.",
	"stole your mail.",
	"told you a bad joke",
	"told one too many 'Your Mother' jokes.",
	"thought you were pregenant.",
	"refused to co-sign your loan.",
	"sold you a bad Firby.",
	"traveled back in time to make fun of you wetting the bed.",
	"wet your bed for you.",
	"adopted you for a day, just to show you how shitty you have it, comparably.",
	"gave you bad fashion advice",
	"recorded over your school plays.",
	"replaced your sugar with salt.",
	"gave you a friendship bracelet that just said, 'never'.",
	"'Carried'd you.",
	"hacked your Facescroll profile.",
	"stole your pie while it was cooling.",
	"gave you fruitcake.",
	"used all the hot water.",
	"played their music too loud.",
	"gave terrible directions.",
	"called you a name too terrible to repeat (it was probably 'jerk').",
	"bet against you.",
	"wing-manned you right out of a conversation with someone you were genuinely connecting with, on an emotional, nay, spiritual level.",
	"existed.",
	"stole christmas.",
	"showed everyone those pictures of you from when you were in kindergarten, you know the ones, the ones your mom threatens to pull out and show all the time when she's teasing you.",
	"broke your candy-cane.",
	"stole your extensive recycled vynl collection.",
	"put on a santa cap.",
	"played Christmas music before Thanksgiving.",
	"complained about the 'offensiveness' of the abreviation x-mas.",
	"dropped dead, gorgeous.",
	"broke all the high-scores.",
	"sniped your spawn.",
	"undid your fly.",
	"ate and ran.",
	"gave a terrible gift.",
	"didn't want to make the conversation about you.",
	"watched videos with the sound on while everyone else was jamming out to the music and talking.",
	"didn't use their turn signal.",
	"baked a terrible cake.",
	"baked a better cake than you could ever imagine baking, and it's just so damned frustrating. They're always one upping you. That's it!",
	"showed off disapperation.",
	"gave you up for lint.",
	"belched.",
	"moved the remote.",
	"did the dishes and refused to let you clean up after them, I mean, they're a guest, that just makes you feel uncomfortable, right?",
	"offered you charity because you buy generic.",
	"burned your documents"
];

//Quest exposition
var questExp = [
	"The bi-weekly Prom is tonight,",
	"My house is overrun by rats,",
	"My house is overrun by cats I bought to eat the rats,",
	"I'm slowly turning into a large vat of slime,",
	"Ghosts are posessing my socks,",
	"That truck just ran over my favorite road, and I need revenge,",
	"My house was blown up by your rival,",
	"You blew up my house,",
	"I have no idea what country I'm even in,",
	"I'm just really depressed,",
	"I'm pretty sure my arm is falling off,",
	"Sometimes, at night, I dream that I am an ant on the face of God,",
	"There is no God, God told me so, xhe totally did,",
	"I don't particularly care for coffee,",
	"My shirt is on inside out,",
	"I wet the bed this morning",
	"I've gotten too lazy to really do my job anymore,",
	"I'm homeless, it's actually pretty sad,",
	"I thought this was a bus-stop, but it wasn't,",
	"There's a wormhole that will devour the entire planet in seconds if we don't do anything about it, but it can wait,",
	"I've never trusted a zuccini in my life,",
	"I shrunk all my clothes in the wash,",
	"Gravity is only selectively applying itself to objects around town,",
	"My partner doesn't listen to me anymore,",
	"Listen, I've got just absolutely terrible grades,",
	"I don't care,",
	"I think my partner is cheating on me,",
	"Sex is just kind of... meh,",
	"It's the second coming,",
	"I've got this rash right here that won't go away,",
	"My peanut allergy has taken a vacation,",
	"My bomb is finished fermenting,",
	"Havest is pretty darn terrible.",
	"There's a cult of ancient mages hell-bent on raising one of the actually terrible Elder Gods from the prison it was trapped in before time began,",
	"I just, I have no idea where I am,",
	"The point of my sword has gone dull,",
	"An old man in a cave just gave me a sword and said 'Here, take this. It's dangerous to go alone.' So...",
	"Well, I just took an arrow in the knee,",
	"If they think I'm returning that library book, they've got another thing coming,",
	"You know those absolutely perfect moments in life, the ones you'll never forget? If you stick out your tongue in the middle of one they taste exactly like clear gummi bears,",
	"The store was out of hot-chocolate,",
	"I don't think I'm actually literate. I'm pretty sure I'm just going off the pictures,",
	"The guy playing Santa in the mall is drunk,",
	"A man's got to do something to stay warm,",
	"People are protesting solely for the attention,",
	"World hunger is still a thing right,",
	"I dunno, there's this real bad plague, and it's really harshing my buzz,",
	"No, I don't know the muffin man,",
	"Oh, uh, sorry, I just... man, I gotta tell someone, I just totally had sex, and I didn't think we'd ever reach that level of our relationship, but it was just perfect, physical, emotional, I think I'm honestly in love,",
	"I didn't expect you here,",
	"I don't want you here,"
];

//Quest tasks
var questTask = [
	"I'll need to blow up the bridge.",
	"I'll need to rob a bank.",
	"I'll need to rob a bake sale.",
	"I'll have to contact my estranged parents.",
	"I'll need to plant my garden.",
	"I have to buy a dress!",
	"I'll have to get a teeth cleaning!",
	"I need to buy some cats.",
	"I need to buy some rats.",
	"I need to move.",
	"I need to get rid of this sense of ennui that's just taken over my life, man, like so much, I just, I can't, I can't do it anymore, I'm done.",
	"I've got to meticulously craft hand-made dolls until my fingers bleed.",
	"I'm going to take up taking credit for other people's hard work.",
	"I'm joining the clergy.",
	"I'm quitting my job.",
	"I'm going to propose.",
	"I'm looking for the remainder of Life, the Universe, and Everything. I mean, it can't just be a whole number, right? It's so complex.",
	"I need to wing-man hard, but in a none-deceptive manner.",
	"I need to try to understand what the hell The Enchantment Hut(TM) actually does. Like, is it even helpful?",
	"I need to buy a boat and devote myself to life of digital piracy on the high seas!",
	"I just need to crash, man. Seriously.",
	"well, you don't care about what I'm doing. I'll just get to what you need to do.",
	"I'm going back to school. I was three credit hours from my degree in astroliteracy.",
	"there just isn't anything I can do.",
	"I came to hang out down on this Problem Post you helpfully built.",
	"I need to climb the corperate ladder.",
	"I'm going to dethrone Santa Claus!",
	"existence is meaningless.",
	"I need to make a snow fort.",
	"I need to buy last minute presents.",
	"I can't understand any of these carols, much less the one about the bells.",
	"I don't actually believe you can exist outside of conceptual space.",
	"my watch needs a good fixing."
];


//Quest NPC Professions
var npcProf = [
	"Baker",
	"Biker",
	"Robber",
	"Debutante",
	"Drunk",
	"Clerk",
	"Merchant",
	"Knight",
	"King",
	"Busser",
	"Gun-toteing Badass",
	"Serial J-Walker",
	"Therapist",
	"Dentist",
	"Fry-Chef",
	"Fried-Chef",
	"Waiter",
	"Writer",
	"Sculpter",
	"Dentist",
	"Cobbler",
	"Demon-Slayer",
	"Vampire-Slayer",
	"Slayer-Slayer",
	"Producer",
	"Christmas Village Elf Wrangler",
	"Christmas Village Child Wrangler",
	"Christmas Village Elf",
	"Christmas Village Child",
	"Mall Santa",
	"Inconcievable Mass",
	"Duck",
	"Cow",
	"Closet Door",
	"Gun Salesman Salesman",
	"Door to Door Door Salesman",
	"Grouch",
	"Old Man in Winter",
	"Old Man in the Winter of his Life",
	"Barrel Fire Homeless",
	"Retired Professional Couch-Surfer",
	"Quivering Mass of Ooze",
	"Yeti",
	"Snow Man",
	"Snow Woman",
	"Snow Child",
	"Snow Sculpture",
	"Swan",
	"Nutcracker"
];

//Enchantment Hut Greetings
var eHutGreet = [
	"The universe is bending, breaking, and we, you and I, we are the cause. It ends with us. It always has and always will.",
	"I see the meaning of things, and in you I see such angry holes.",
	"Before me stands a line of mistakes, behind me lies a line of regrets.",
	"I do not know why the universe has left us with this cruel fate, but I know there are many answers to what we should do about it.",
	"There is a point where comedy becomes tragedy.",
	"Progression is a collection of deaths, yours and theirs.",
	"We are in a system designed to keep us perpetually engaged.",
	"It isn't the weapon that makes someone powerful, but the reason why they use it.",
	"Do you, do you even remember?",
	"Some text is for flavor, some is for distraction. All of the text is meaningless.",
	"Do not trust the dog.",
	"You are consumed by something you cannot see.",
	"This reality is simply a construct of several thousand lines of code.",
	"You are being controlled by someone who may already be bored.",
	"Will they even remember why you hate them?",
	"Does it have to be this way?",
	"You were forced into this; it wasn't your choice.",
	"The currency of the doomed is meaningless, we give you these four futures free of anyting of consequence.",
	"Everything that helps you sets you back tenfold, and only the clever mind the math.",
	"It is snowing outside, and that makes us extraordinarily uncomfortable.",
	"Can you tell the Charity Santa to not make eyecontact with the customers? We'd do it, but we're incorperal, and...",
	"Everyone smells of egg-nog; they can't all be drunk can they?",
	"We liked the green, where did it go?",
	"Sometimes I write great truths in the window frost; today I drew a smily face."
];

//Taco Spell Greeting
var tacoSpellGreet = [
	"Damage is hardly important when there are status effects!",
	"Would you like a burrito with that mystic tome?",
	"Welcome to Taco Spell (TM), may I interest you in an order of mystic energies with a side of pico?",
	"We boil the meat, but the magix are 100% fresh!",
	"Those idiots over in the Enchantment Hut (TM) are giving away their products for free? Man, they're weird. Stupid and weird.",
	"Our new healing spell line can be ordered al fresco for the healthier and more artistic option.",
	"We don't know who you are. We don't know who we are, but there are spells and tacos back here, plus a faint smell of Eldrich.",
	"Are you really telling me that you've never soaked an enemy in Nacho Cheese?"
]

//Weather types
var setWeather =
	[
		"raining",
		"sunny",
		"overcast",
		"snowing",
		"muggy",
		"stifling",
		"foggy",
		"storming",
		"blizzard",
		"hurricane",
		"apocalypse"
	]
	var setWeatherCount = 7;

//array index counts
var hisFiguresCount = 0;
//var titlesCountM = 23;
var titlesCountM = titlesMale.length;
var titlesCountF = titlesFemale.length;
var fNameCount = namesFirst.length;
var lNameCount = namesLast.length;
var vicMsgCount = 9;
var critMsgCount = 10;
var suffixCount = suffix.length;
var genreCount = genre.length;
var conStructCount = conStruct.length;
var settingCount = setting.length;
var monSpecCount = monSpec.length;
var descWeightAdjCount = descWeightAdj.length;
var descHeightAdjCount = descHeightAdj.length;
var monDescBodyTypesCount = monDescBodyTypes.length;
var demonTypeCount = demonType.length;
var legWeapNameCount = legWeapName.length;
var workEventCount = workEvent.length;
var weapTypeCount = weapType.length;
var armTypesCount = armTypes.length;
var materialCount = material.length;
var deathMsgCount = deathMsg.length;
var monAtkMsgCount = monAtkMsg.length;
var monArmAtkMsgCount = monArmAtkMsg.length;
var heroUnAtkMsgCount = heroUnAtkMsg.length;
var heroArmAtkMsgCount = heroArmAtkMsg.length;
var rivalDickMovesCount = rivalDickMoves.length;
var questExpCount = questExp.length;
var questTaskCount = questTask.length;
var questGoalCount = 2;
var npcProfCount = npcProf.length;
var eHutGreetCount = eHutGreet.length;
var atkMonReactMsgCount = atkMonReactMsg.length;
var monDmgMsgCount = monDmgMsg.length;
var titleStructCount = 7;
var insperCount = 0;
var tacoSpellGreetCount = tacoSpellGreet.length;



function intro()
{
	locationDisplay.innerHTML="<i>Introduction</i>";
	wWrite("Your name is " + hero.fName + " " + hero.suffix + hero.lName + " and you are a royally pissed " + hero.Age + " year old " + hero.genderText + "." , true);
	outputW.innerHTML+="</br>You arrived on Planet Adventure after a virus replaced all your bookmarks with an advertisement to try your hand at fame. Choosing between participation in " + workEvent[Math.floor(Math.random()*workEventCount)] + " and spending a hundred synthetics to take a back route trawler to this relatively hidden planet seemed pretty easy."
	outputW.innerHTML+="</br>Back to your emotional state though, you're pissed because of some joker by the name of " + rival.name + " " + rival.lName + ".";
	outputW.innerHTML+="</br>You were minding your own business in your modest new home when " + rival.name + " busted in and " + rival.dickMove;
	outputW.innerHTML+="</br>Now, you have invoked the sacred right of Blood Feud. Your children will fight against this travesty until it is repayed.";
	outputW.innerHTML+="</br>" + rival.name + " and the entire " + rival.lName + " clan will fall at the hands of you and your family.</br>Seems as good a way to fame as any.";
	//menu.innerHTML="<button class='button' onclick='house()'>Continue.</button>";
	mWrite("house" , "Continue." , true);
	familyTree.push(hero.fName + " arrived on Planet Adventure");
	familyTree.push("</br>" + rival.name + " started a rivalry with " + hero.Age + " year old " + hero.fName + " " + hero.suffix + hero.lName);
	insper.push(hero.fName + "'s arrival on Adventure.");
	insper.push("the betrayel of " + rival.name);
	insperCount = insperCount + 2;
}

//Go Home
function house()
{
	document.getElementById("drop").style = "position: fixed;background-color:#000000;background-position: center;background-image:url(" + houseBack + ");background-repeat: no-repeat;";
	bonusCalc();
	weatherChoice = Math.floor(Math.random(3) + 1);
	if (weatherChoice == 1)
	{
		weatherDraw("weather" , "clear");
	}
	else if (weatherChoice == 2)
	{
		weatherDraw("weather" , "storm");
	}
	else
	{
		weatherDraw("weather" , "snow");
	}
	weatherDraw("effect" , "nil");
	monWeap.existBool = false;
	monster.hisBool = false;
	hero.days = hero.days + 1;
	if (hero.days > 19)
	{
		hero.Age = hero.Age + 1;
		hero.days = 0;
		var birthdayBool = true;
	}
	outputW.innerHTML="You wake up in your house.";
	if (hero.dogBool == true)
	{
		outputW.innerHTML+="<br><b>DOG: </b><i>This is your house. From here you can choose what to do with your day. You can expand these options by expending <b>FAME</b>.";
	}
	if (birthdayBool == true)
	{
		outputW.innerHTML+="<br>It is your birthday.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: Years on this planet are only twenty days long!</i>";
		}
		birthdayBool = false;
		familyTree.push("<br>");
	}
	if (hero.childBool == true && child.failure == false)
	{
		outputW.innerHTML+="<br>" + child.fName + " is running around happily.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: Your child is healthy and has fantastic stats! Strength of " + child.Str +", speed of " + child.Spd +", defence of " + child.Def +", accuracy of " + child.Acc +"!</i>";
		}
	}
	else if (hero.childBool == true && child.failure == true)
	{
		outputW.innerHTML+="<br>" + child.fName + " is sitting in the corner.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: It seems like your child isn't very physical. How about some training?</i>";
		}
	}
	if (hero.altarBool == true)
	{
		outputW.innerHTML+="</br>Your Altar of Abraham is sitting ominously in the corner.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: Use it to trade a child for a stat boost! Mind, there are consequences.</i>";
		}
	}
	if (hero.smithBool == true)
	{
		outputW.innerHTML+="</br>The smith crackles from behind the house.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: Collect one additional weapon to upgrade your own! A chance of failure is a risk in every endeavor. Those who are kind will find that the universe smiles upon them.</i>";
		}
	}
	if (hero.summonBool == true)
	{
		outputW.innerHTML+="</br>Your summoning circle hums with a dark power.";
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: Use this to summon extra tough enemies for their greater fame rewards!</i>";
		}
	}
	locationDisplay.innerHTML="<i>" + hero.suffix + hero.lName + " House</i>";
	menu.innerHTML="<button  class='button' onclick='encounter()'>Adventure!</button>";
	if (hero.fame > 0)
	{
		if (hero.curHP < hero.totalHP || hero.curMana < hero.totalMana)
		{
			menu.innerHTML+="<button  class='button'  onclick='rest()'>Rest (1F).</button>";
		}
	}
	if (hero.fame > 1 && hero.childBool == false)
	{
		menu.innerHTML+="<button  class='button' onclick='fuck()'>Start a family (2F).</button>";
	}
	if (hero.fame > 4 && hero.childBool == true)
	{
		menu.innerHTML+="<button  class='button' onclick='adoption()'>Put " + child.fName + " up for adoption (5F).</button>";
	}
	if (hero.fame > 9 && hero.childBool == true)
	{
		menu.innerHTML+="<button  class='button' onclick='trainKid()'>Train " + child.fName + " (10F).</button>";
	}
	if (hero.smithBool == true)
	{
		menu.innerHTML+="<button  class='button' onclick='visitForge()'>Go to Smithy.</button>";
	}
	if (hero.fame > 99 && rivalFightBool == false)
	{
		menu.innerHTML+="<button  class='button' onclick='dogEncounter()'>Challenge your rival (100F).</button>";
	}
	if (hero.childBool == true && hero.altarBool == true && hero.fame > 9)
	{
		menu.innerHTML+="<button  class='button' onclick='sacrifice()'>Sacrifice " + child.fName + " (10F).</button>";
	}
		menu.innerHTML+="<button  class='button' onclick='displayTree()'>Open Family History.</button>";
	if (hero.questBool == true)
	{
		outputW.innerHTML+="<br>The wind whips whistling and wayward across your deep dark and dank Questing Quarry.";
		menu.innerHTML+="<button  class='button' onclick='questQuarry()'>Visit Quarry</button>";
	}
	if (hero.dogBool == false && rivalFightBool == false)
		{
			//menu.innerHTML+="<button  class='button' onclick='dogOn()'>Adopt Dog (0F).</button>";
		}
	if (hero.dogBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='dogOff()'>Release dog (0F).</button>";
		}
	if (hero.eHutBool == true)
	{
		outputW.innerHTML+="<br>Foul sludge is coming from the drains of the Enchantment Hut";
		menu.innerHTML+="<button  class='button' onclick='eHut()'>Go into Enchantment Hut(TM)</button>";
		
	}
	if (hero.tacoSpellBool == true)
	{
		outputW.innerHTML+="<br>A low pained murmering is coming from the vents of the Taco Spell (TM).";
		menu.innerHTML+="<button  class='button' onclick='tacoSpell()'>Go into Taco Spell(TM)</button>";
	}
	if (hero.churchBool == true)
	{
		wWrite("<br>Just outside, songs of grace glit and gilt along from an open window of the church promising many things." , false);
		mWrite("church" , "Go to the Church." , false);
	}
	mWrite("buildMenu" , "Build Menu" , false);
	if (hero.weapBool == true)
	{
		weapDraw();
	}
	nameDraw();
	statDraw();
	hpDraw();
	if (desk.bool == true)
	{
		outputW.innerHTML+="</br>Your desk sits against the wall, overlooking a tree just outside, sturdy and ready for use.";
		menu.innerHTML+="<button  class='button' onclick='atDesk()'>Sit at your desk.</button>";
	}
	menu.innerHTML+="<button  class='button' onclick='options()'>Display Options</button>";
	menu.innerHTML+="<button  class='button' onclick='saveMenu()'>Save/Load</button>";
}

function dogOn()
{
	hero.dogBool = true;
	var strCAP = rival.Str;
	var spdCAP = rival.Spd;
	var defCAP = rival.Def;
	var accCAP = rival.Acc;
	dog.Str = Math.floor(Math.random()*strCAP)+1;
	dog.Spd = Math.floor(Math.random()*spdCAP)+1;
	dog.Def = Math.floor(Math.random()*defCAP)+1;
	dog.Acc = Math.floor(Math.random()*accCAP)+1;
	dog.Uber = true;
	dog.weapBool = true;
	dog.name = namesFirst[Math.floor(Math.random()*fNameCount)];
	dog.HP = rival.Str + rival.Def;
	outputW.innerHTML="<i> DOG: I am Dog, the help system implimented into GPX! I will bark any information I think you might need or want to hear on every screen. I can get a little loud, so feel free to turn me off at anytime by clicking the 'Release dog' button from your house.</i>";
	outputW.innerHTML+="<br><br><i>My stats are:<br><br>Strength: " + dog.Str + "<br>Speed: " + dog.Spd + "<br>Defense: " + dog.Def + "<br>Accuracy: " + dog.Acc + "<br>Hitpoints: " + dog.HP + "/" + dog.HP + "</i>";
	outputW.innerHTML+="<br><br><i>But I'm a pacifist.</i>";
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
}

function dogOff()
{
	hero.dogBool = false;
	house();
}

function displayTree()
{
	outputW.innerHTML=familyTree.join(" ");
	menu.innerHTML="<button  class='button' onclick='house()'>Back.</button>";
	if (hisFiguresCount > 0)
	{
		menu.innerHTML+="<button  class='button' onclick='openBook()'>Open History Book.</button>";
	}
}

function printHistory(hisVal)
{
	outputW.innerHTML=hisBook[hisVal];
	menu.innerHTML="<button  class='button' onclick='openBook()'>Back.</button>";
}

function openBook()
{
	//outputW.innerHTML=hisBook;
	outputW.innerHTML="";
	var bookStep = 0;
	while (bookStep < hisFiguresCount)
	{
		outputW.innerHTML+="<br><button  class='button' onclick='printHistory(" + bookStep + ")'>" + hisFigures[bookStep];
		bookStep = bookStep + 1;
	}
	menu.innerHTML="<button  class='button' onclick='displayTree()'>Back.</button>";
}

//Building a Questing Quarry
function buildQuarry()
{
	outputW.innerHTML="Wanting some direction in life, you call upon your own thoughts of existence and dig yourself a Questing Quarry.";
	hero.questBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 15;
}

//Building an altar.
function buildAltar()
{
	outputW.innerHTML="Using plans you find in the ancient texts, you build an Altar of Abraham.";
	monSpec.push("Child's Spector");
	monSpecCount = monSpecCount + 1;
	hero.altarBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 25;
}

//Building an Enchantment Hut
function buildEHut()
{
	outputW.innerHTML="You bow down to franchise owner demands and allow an Enchantment Hut to be built on your property. Things are changing around here.";
	hero.eHutBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 50;
}

//Building a Taco Spell
function buildTSpell()
{
	outputW.innerHTML="You bow down to franchise owner demands and allow a Taco Spell to be built on your property. Things are changing around here.";
	hero.tacoSpellBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 50;
	hero.totalMana = 10;
	hero.curMana = 10;
}

//Building a smithy.
function buildSmith()
{
	outputW.innerHTML="From the mountains you drug the iron. With heavy blows and surging flames. You've forged the forge. You've smithed the smithy.";
	hero.smithBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 20;
}

//Building a summoning Circle
function buildSummon()
{
	outputW.innerHTML="Your experience with the hordes of darkness have taught you a great many things about the world, but it isn't enough. You know that you will never defeat your rival without ensnaring the help of the legions of evil.";
	hero.summonBool = true;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	hero.fame = hero.fame - 30;
}

function buildChurch()
{
	wWrite("Something divine has stirred within you. You feel the callings of Grace. May Martin Look at you with Pride, as you lay down his house, board by board." , true);
	hero.churchBool = true;
	mWrite("house" , "Continue." , true);
	hero.fame = hero.fame - 50;
}

function church()
{
	if (hero.genderText == "female")
	{
		var cN = "daughter";
	}
	else
	{
		var cN = "son";
	}
	wWrite("Hello my " + cN + ". It is good to see you in the house of Martin.");
	mWrite("checkDickMoves" , "Visit the Confessional" , true);
	mWrite("house" , "Go Home." , false);
}

function absolve()
{
	var skillSlash = Math.floor(Math.random()*4);
	if (skillSlash == 1)
	{
		hero.Atk = Math.floor(hero.Atk / (Math.floor(Math.random()*100) + 1));
	}
	else if (skillSlash == 2)
	{
		hero.Spd = Math.floor(hero.Spd / (Math.floor(Math.random()*100) + 1));
	}
	else if (skillSlash == 3)
	{
		hero.Def = Math.floor(hero.Def / (Math.floor(Math.random()*100) + 1));
	}
	else
	{
		hero.Acc = Math.floor(hero.Acc / (Math.floor(Math.random()*100) + 1));
	}
	hero.dickMoves = 0;
	statDraw();
	wWrite("Your sins have been forgiven." , true);
	mWrite("church" , "Back" , true);
}

function checkDickMoves()
{
	if (hero.dickMoves > 10)
	{
		wWrite("Child you have a total of " + hero.dickMoves + " sins to your name." , true);
	}
	else if (hero.dickMoves == 1)
	{
		wWrite("You've only got the one mark against you child. Nothing to fret." , true);
	}
	else if (hero.dickMoves == 0)
	{
		wWrite("Child, you're making me laugh. You have no sins to confess." , true);
	}
	else
	{
		wWrite("Don't fret child. You've only got " + hero.dickMoves + " sins to your name." , true);
	}
	var firstLine = true;
	if (hero.dickMoves > 2)
	{
		mWrite("absolve" , "Absolve my " + hero.dickMoves + " sins." , true);
		firstLine = false;
	}
	mWrite("church" , "Back." , firstLine);
}

function buildMenu()
{
	menu.innerHTML="";
	if (hero.fame > 14 && hero.questBool == false)
	{
		mWrite("buildQuarry" , "Build Questing Quarry (15F)." , false);
	}
	/*if (hero.fame > 19 && hero.smithBool == false)
	{
		mWrite("buildSmith" , "Build Smithy (20F)." , false);
	}*/
	if (hero.fame > 19 && desk.bool == false)
	{
		mWrite("buildDesk" , "Build Desk (20F)." , false);
	}
	if (hero.fame > 24 && hero.smithBool == false && hero.childBool == true)
	{
		mWrite("buildAltar" , "Build altar (25F)." , false);
	}
	if (hero.fame > 29 && hero.summonBool == false)
	{
		mWrite("buildSummon" , "Build Summoning Circle (30F)." , false);
	}
	if (hero.fame > 49 && hero.eHutBool == false)
	{
		mWrite("buildEHut" , "Build Enchantment Hut(TM) (50F)." , false);
	}
	if (hero.fame > 49 && hero.tacoSpellBool == false)
	{
		mWrite("buildTSpell" , "Build Taco Spell(TM) (50F)." , false);
	}
	if (hero.churchBool == false && hero.fame > 49)
	{
		mWrite("buildChurch" , "Build Church (50F)" , false);
	}
	mWrite("house" , "Back.", false);
}

//Hero generation
function heroGen()
{
	arrayClear(familyTree);
	desk.level = 0;
	desk.diction = 1;
	desk.poetics = 1;
	desk.form = 1;
	desk.style = 1;
	desk.experience = 0;
	desk.nxtLvl = 100;
	desk.bool = false;
	novel.title = "";
	novel.genre = "";
	novel.rate1 = 0;
	novel.rate2 = 0;
	novel.rate3 = 0;
	novel.avgRate = 0;
	novel.summary = "It's a book.";
	quest.bool = false;
	dogFightBool = false;
	rivalFightBool = false;
	hero.generation = 1;
	hero.gender = Math.floor(Math.random()*2) + 1;
	hero.weight = Math.floor(Math.random()*200) + 80;
	if (hero.gender==1)
	{
		hero.title = titlesFemale[Math.floor(Math.random()*titlesCountF)];
		hero.genderText = "female";
	}
	else
	{
		hero.title = titlesMale[Math.floor(Math.random()*titlesCountM)];
		hero.genderText = "male";
	}
	hero.fName = namesFirst[Math.floor(Math.random()*fNameCount)];
	var suffixBool = Math.floor(Math.random()*2);
	if (suffixBool == 0)
	{
		hero.suffix = " ";
	}
	else
	{
		hero.suffix = suffix[Math.floor(Math.random()*suffixCount)];
	}
	hero.lName=namesLast[Math.floor(Math.random()*lNameCount)];
	if (hero.generation > 0)
	{
		hero.fame = 1 * hero.generation; //modified for testing purposes, change back to "1" for release
	}
	else
	{
		hero.fame = 30; 
	}
	hero.prevX = 1;
	hero.prevY = 0;
	hero.x = 1;
	hero.y = 0;
	hero.futureX = 1;
	hero.futureY = 0;
	hero.Str = Math.floor(Math.random()*5) + 5;
	hero.Spd = Math.floor(Math.random()*5) + 5;
	hero.Def = Math.floor(Math.random()*5) + 5;
	hero.Acc = Math.floor(Math.random()*5) + 5; // release stats
	hero.tCont = 1;
	hero.prec = 1;
	hero.hSkill = 1;
	hero.tSecr = 1;
	//hero.Str = 100;
	//hero.Spd = 100;
	//hero.Def = 100;
	//hero.Acc = 100;  // testing stats
	hero.totalHP = hero.Str * hero.Def;
	hero.curHP = hero.totalHP;
	hero.days = 0;
	hero.i = 1;
	hero.Age = Math.floor(Math.random()*199) + 1;
	weap.type = "hand"; //Default Weapon
	weap.Atk = 1;			   //Default Weapon
	hero.weapBool = false;
	weap.pBool = false;
	weap.name = "";
	weap.material = "";
	weap.bStr = 0;
	weap.bSpd = 0;
	weap.bDef = 0;
	weap.bAcc = 0;
	weapDraw();
	hero.armBool = false;
	hero.poisonBool = false;
	hero.childBool = false;
	hero.altarBool = false;
	hero.smithBool = false;
	hero.summonBool = false;
	hero.scrapBool = false;
	hero.dogBool = false;
	hero.questBool = false;
	hero.eHutBool = false;
	hero.tacoSpellBool = false;
	hero.churchBool = false;
	hero.healBool = false;
	hero.lightningBool = false;
	hero.fireBool = false;
	hero.stormCallBool = false;
	hero.gailBool = false;
	hero.audienceSummonBool = false;
	hero.chuckChuckBool = false;
	hero.onFire = false;
	hero.scrapPackBool = false;
	hero.dickMoves = 0;
	hero.totalMana = 0;
	hero.curMana = 0;
	hero.kills = 0;
	hero.connerySicknessBool = false;
	//inventory variables
	hero.axeheadCount = 0;
	hero.axeheadDesc = "A sharpened oval blade. Since 2020 all manufactured blades of this kind have had the enscription: TradeMark Dwarvan Motors, but no one's noticed because it's in a subatomic font.";
	hero.longbladeCount = 0;
	hero.longbladeDesc = "A sharpened blade a little longer than your arm. Wouldn't be cool to replace your arms with one of these? No? Is it just me? Huh.";
	hero.shortbladeCount = 0;
	hero.shortbladeDesc = "A sharpened knife blade. Many blades this size have been studied. The concensus is that they're generally pretty good at stabbing related activities, even a couple exceed at swiping. This was a summary of a government conducted study brought to you by Oxyltene.";
	hero.vagueEnnuiCount = 0;
	hero.vagueEnnuiDesc = "A general and vague fear whose name escapes you. It naws, though, endlessly. Perfect for devouring the enemy.";
	hero.grammaticalbladeCount = 0;
	hero.grammaticalbladeDesc = "They say punctuation are the roadsigns of language. You've always known they were weapons against meaning.";
	hero.miscFoodCount = 0;
	hero.miscFoodDesc = "I mean, you can eat it. If you want. But if it changes your mind, it gave you permission, personally.";
	hero.scrapCount = 0;
	hero.scrapDesc = "One person's junk is another person's junk. Interchangable junk was one of the great advancements in the last century. This graph demonstrates a rise in junkdrawer organization since that introduction. [Missing Slide]";
	hero.ereaderCount = 0;
	hero.ereaderDesc = "Look, you like books just as much as the next person. It's just that you're carrying a whole library in this peace of junk. And the best part is that absolutely no one but you knows if its nothing but romance novels and bomb construnction guides. That's just between you and the government, like it always should have been.";
	hero.handleCount = 0;
	hero.handleDesc = "This is neccisary to hold things. Long ago the human race forgot how to grasp things without obvious handles. It was bred into humanity as an attempt to render all non-manufactured tools useless, creating a huge growth in profits. But hobbiests just bought cheap tools, scrapped the handles, and tapped them to their old home-built ones.";
	hero.handgaurdCount = 0;
	hero.handguardDesc = "Look, you have all your fingers. Don't tempt fate; just put one on. Trust me.";
	hero.ducttapeCount = 0;
	hero.ducttapeDesc = "It's a plastic coating over fibers with an adhesive on the other side. It's nothing really special, but damn does it work.";
	hero.poisonGlandCount = 0;
	hero.poisonGlandDesc = "Just looking at it makes you sick. Yeah. That was the joke. You're welcome.";
	hero.flameRuneCount = 0;
	hero.flameRuneDesc = "Johnny Cash said it best. He didn't say it first, and really not even that much better. It's just a matter of taste really. June Carter Cash can write pretty decent music, that's what I'm getting at.";
	hero.batteryCount = 0;
	hero.batteryDesc = "AA Lithium Ion. They're small and they're hot. You could probably just throw them at people, but nah.";
	bonusCalc();
	rivalGen();
}

var calcStr = hero.Str
var calcSpd = hero.Spd
var calcDef = hero.Def
var calcAcc = hero.Acc

function rivalGen()
{
	var strCAP = hero.Str + rivalGenStr;
	var spdCAP = hero.Spd + rivalGenSpd;
	var defCAP = hero.Def + rivalGenDef;
	var accCAP = hero.Acc + rivalGenAcc;
	rival.Str = Math.floor(Math.random()*strCAP)+1;
	rival.Spd = Math.floor(Math.random()*spdCAP)+1;
	rival.Def = Math.floor(Math.random()*defCAP)+1;
	rival.Acc = Math.floor(Math.random()*accCAP)+1;
	rival.Uber = true;
	rival.weapBool = true;
	rival.name = namesFirst[Math.floor(Math.random()*fNameCount)];
	rival.generation = hero.generation;
	rival.HP = rival.Str + rival.Def;
	if (hero.generation == 1)
	{
		rivalWeapGen();
		rival.dickMove = rivalDickMoves[Math.floor(Math.random()*rivalDickMovesCount)]
		rival.lName = namesLast[Math.floor(Math.random()*lNameCount)];
		intro();
	}
}

function rivalWeapGen()
{
	rivalWeap.type = weapType[Math.floor(Math.random()*weapTypeCount)];
	var dmgCAP1 = rival.Str / 10;
	var dmgCAP = Math.floor(dmgCAP1) + 1;
	rivalWeap.Atk = Math.floor(Math.random() * 10) + dmgCAP;
	rivalWeap.name = " ";
	var bonusType = Math.floor(Math.random() * 4);
	if (bonusType == 3)
	{
		monWeap.bStr = Math.floor(Math.random() * 100);
	}
	else if (bonusType == 2)
	{
		monWeap.bSpd = Math.floor(Math.random() * 100);
	}
	else if (bonusType == 1)
	{
		monWeap.bDef = Math.floor(Math.random() * 100);
	}
	else
	{
		monWeap.bAcc = Math.floor(Math.random() * 100);
	}
}

//weapon generation
function weapGen()
{
	var indexVar = Math.floor(Math.random()*weapTypeCount) + 1;
	monWeap.order = weapType[indexVar];
	if (indexVar == 1)
	{
		monWeap.type = bladeNames[Math.floor(Math.random()*bladeNames.length)];
	}
	else if (indexVar == 2)
	{
		monWeap.type = axeNames[Math.floor(Math.random()*axeNames.length)];
	}
	else if (indexVar == 3)
	{
		monWeap.type = knifeNames[Math.floor(Math.random()*knifeNames.length)];
	}
	else if (indexVar == 4)
	{
		monWeap.type = ennuiNames[Math.floor(Math.random()*ennuiNames.length)];
	}
	else if (indexVar == 5)
	{
		monWeap.type = grammarNames[Math.floor(Math.random()*grammarNames.length)];
	}
	else if (indexVar == 6)
	{
		monWeap.type = foodNames[Math.floor(Math.random()*foodNames.length)];
	}
	else if (indexVar == 7)
	{
		monWeap.type = miscNames[Math.floor(Math.random()*miscNames.length)];
	}
	else if (indexVar == 8)
	{
		monWeap.type = ereaderNames[Math.floor(Math.random()*ereaderNames.length)];
	}
	var dmgCAP1 = hero.Str / 10;
	var dmgCAP = Math.floor(dmgCAP1) + 1;
	monWeap.Atk = Math.floor(Math.random() * 10) + dmgCAP;
	monWeap.name = " ";
	monWeap.material = material[Math.floor(Math.random()*materialCount)];
	monWeap.bStr = 0;
	monWeap.bSpd = 0;
	monWeap.bDef = 0;
	monWeap.bAcc = 0;
	monWeap.pBool = false;
	monWeap.fireBool = false;
	monWeap.elecBool = false;
	monWeap.wetBool = false;
	monWeap.weight = Math.floor(Math.random()*25) + 1;
	if (monWeap.weight > 14)
	{
		monWeap.weightClass = "heavy";
		monWeap.bAcc = Math.floor(monWeap.bAcc - (hero.Acc * .1));
	}
	else if (monWeap.weight > 4)
	{
		monWeap.weightClass = "medium";
	}
	else
	{
		monWeap.weightClass = "light";
	}
}

function qWeapGen()
{
	var indexVar = Math.floor(Math.random()*weapTypeCount) + 1;
	monWeap.order = weapType[indexVar];
	if (indexVar == 1)
	{
		monWeap.type = bladeNames[Math.floor(Math.random()*bladeNames.length)];
	}
	else if (indexVar == 2)
	{
		monWeap.type = axeNames[Math.floor(Math.random()*axeNames.length)];
	}
	else if (indexVar == 3)
	{
		monWeap.type = knifeNames[Math.floor(Math.random()*knifeNames.length)];
	}
	else if (indexVar == 4)
	{
		monWeap.type = ennuiNames[Math.floor(Math.random()*ennuiNames.length)];
	}
	else if (indexVar == 5)
	{
		monWeap.type = grammarNames[Math.floor(Math.random()*grammarNames.length)];
	}
	else if (indexVar == 6)
	{
		monWeap.type = foodNames[Math.floor(Math.random()*foodNames.length)];
	}
	else if (indexVar == 7)
	{
		monWeap.type = miscNames[Math.floor(Math.random()*miscNames.length)];
	}
	else if (indexVar == 8)
	{
		monWeap.type = ereaderNames[Math.floor(Math.random()*ereaderNames.length)];
	}
	var dmgCAP1 = hero.Str / 10;
	var dmgCAP = Math.floor(dmgCAP1) + 1;
	monWeap.Atk = Math.floor(Math.random() * 10) + dmgCAP;
	monWeap.name = quest.npcName + "'s";
	monWeap.material = material[Math.floor(Math.random()*materialCount)];
	monWeap.pBool = false;
	monWeap.fireBool = false;
	monWeap.elecBool = false;
	monWeap.wetBool = false;
	monWeap.weight = Math.floor(Math.random()*25) + 1;
	if (monWeap.weight > 14)
	{
		monWeap.weightClass = "heavy";
		monWeap.bAcc = Math.floor(monWeap.bAcc - (hero.Acc * .1));
	}
	else if (monWeap.weight > 4)
	{
		monWeap.weightClass = "medium";
	}
	else
	{
		monWeap.weightClass = "light";
	}
	var bonusType = Math.floor(Math.random() * 4);
	if (bonusType == 3)
	{
		monWeap.bStr = Math.floor(Math.random() * 10);
	}
	else if (bonusType == 2)
	{
		monWeap.bSpd = Math.floor(Math.random() * 10);
	}
	else if (bonusType == 1)
	{
		monWeap.bDef = Math.floor(Math.random() * 10);
	}
	else
	{
		monWeap.bAcc = monWeap.bAcc + (Math.floor(Math.random() * 10));
	}
}

function uWeapGen()
{
	var indexVar = Math.floor(Math.random()*weapTypeCount) + 1;
	monWeap.order = weapType[indexVar];
	if (indexVar == 1)
	{
		monWeap.type = bladeNames[Math.floor(Math.random()*bladeNames.length)];
	}
	else if (indexVar == 2)
	{
		monWeap.type = axeNames[Math.floor(Math.random()*axeNames.length)];
	}
	else if (indexVar == 3)
	{
		monWeap.type = knifeNames[Math.floor(Math.random()*knifeNames.length)];
	}
	else if (indexVar == 4)
	{
		monWeap.type = ennuiNames[Math.floor(Math.random()*ennuiNames.length)];
	}
	else if (indexVar == 5)
	{
		monWeap.type = grammarNames[Math.floor(Math.random()*grammarNames.length)];
	}
	else if (indexVar == 6)
	{
		monWeap.type = foodNames[Math.floor(Math.random()*foodNames.length)];
	}
	else if (indexVar == 7)
	{
		monWeap.type = miscNames[Math.floor(Math.random()*miscNames.length)];
	}
	else if (indexVar == 8)
	{
		monWeap.type = ereaderNames[Math.floor(Math.random()*ereaderNames.length)];
	}
	var dmgCAP1 = hero.Str / 10;
	var dmgCAP = Math.floor(dmgCAP1) + 1;
	monWeap.Atk = Math.floor(Math.random() * 10) + dmgCAP;
	monWeap.name = monster.name + "'s";
	monWeap.pBool = false;
	monWeap.fireBool = false;
	monWeap.elecBool = false;
	monWeap.wetBool = false;
	monWeap.weight = Math.floor(Math.random()*25) + 1;
	if (monWeap.weight > 14)
	{
		monWeap.weightClass = "heavy";
		Math.floor(monWeap.bAcc - (hero.Acc * .1));
	}
	else if (monWeap.weight > 4)
	{
		monWeap.weightClass = "medium";
	}
	else
	{
		monWeap.weightClass = "light";
	}
	monWeap.material = material[Math.floor(Math.random()*materialCount)];
	var bonusType = Math.floor(Math.random() * 8);
	if (bonusType == 4)
	{
		monWeap.pBool = true;
	}
	else if (bonusType == 5)
	{
		monWeap.fireBool = true;
	}
	else if (bonusType == 6)
	{
		monWeap.elecBool = true;
	}
	else if (bonusType == 7)
	{
		monWeap.wetBool = true;
	}
	else if (bonusType == 3)
	{
		monWeap.bStr = Math.floor(Math.random() * (hero.Str/4));
	}
	else if (bonusType == 2)
	{
		monWeap.bSpd = Math.floor(Math.random() * (hero.Spd/4));
	}
	else if (bonusType == 1)
	{
		monWeap.bDef = Math.floor(Math.random() * (hero.Def/4));
	}
	else
	{
		monWeap.bAcc = monWeap.bAcc + (Math.floor(Math.random() * (hero.Acc/4)));
	}
}

//quest generation
function questGen()
{
	
}

//visiting the enchanting hut
function eHut()
{
	var greeting = eHutGreet[Math.floor(Math.random()*eHutGreetCount)];
	locationDisplay.innerHTML="<i>Inside the Enchantment Hut</i>";
	outputW.innerHTML="You step inside the clinicly sterilized space. A blank wall with a speaker in it greets you. <br><br>'" + greeting + "' The speaker says this without a hint of disingenuousness.<br><br>Here reality begins to bend as you stare up at the backlit menu. 'Choose One' it says.";
	menu.innerHTML="<button  class='button' onclick='enchantStr()'>Enchant Strength</button>";
	menu.innerHTML+="<button  class='button' onclick='enchantSpd()'>Enchant Speed</button>";
	menu.innerHTML+="<button  class='button' onclick='enchantDef()'>Enchant Defense</button>";
	menu.innerHTML+="<button  class='button' onclick='enchantAcc()'>Enchant Accuracy</button>";
	menu.innerHTML+="<button  class='button' onclick='house()'>Home</button>";
}

function tacoSpell()
{
	statDraw();
	var greeting = tacoSpellGreet[Math.floor(Math.random()*tacoSpellGreetCount)];
	locationDisplay.innerHTML="<i>Inside the Taco Spell</i>";
	outputW.innerHTML="You step inside the clinicly decorated space. A pastel wall with a speaker in it greets you. <br><br>'" + greeting + "' The speaker says this without a hint of disingenuousness.<br><br>Here reality begins to bend as you stare up at the backlit menu. 'Choose One' it says.";
	menu.innerHTML="";
	if (hero.fame > 19 && hero.healBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyHeal()'>Buy Tex-Mex Healing (20F)</button>";
	}
	if (hero.fame > 19 && hero.lightningBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyLightning()'>Buy California Style Lightning (20F)</button>";
	}
	if (hero.fame > 19 && hero.fireBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyFire()'>Buy Southwestern Fire (20F)</button>";
	}
	if (hero.fame > 24 && hero.chuckChuckBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyChuckChuck()'>Buy Audience Participation (25F)</button>";
	}
	if (hero.fame > 29 && hero.stormCallBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyStormCall()'>Buy Tornado Alley Tamer (30F)</button>";
	}
	if (hero.fame > 49 && hero.audienceSummonBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyAudienceSummon()'>Buy All The World Is A Stage! (50F)</button>";
	}
	if (hero.fame > 49 && hero.gailBool != true)
	{
		menu.innerHTML+="<button  class='button' onclick='buyGail()'>Buy Grande Gail (50F)</button>";
	}
	if (hero.fame > 9)
	{
		menu.innerHTML+="<button  class='button' onclick='upgradeMana()'>Upgrade Mana (10F)</button>";
	}
	menu.innerHTML+="<button  class='button' onclick='house()'>Home</button>";
}

//visiting the quest quarry
function questQuarry()
{
	locationDisplay.innerHTML="<i>The Bottom of the Questing Quarry</i>";
	if (quest.bool == false)
	{
		quest.bool = true;
		quest.npcName = namesFirst[Math.floor(Math.random()*fNameCount)];
		quest.npcProf = npcProf[Math.floor(Math.random()*npcProfCount)];
		quest.exposition = questExp[Math.floor(Math.random()*questExpCount)];
		quest.task = questTask[Math.floor(Math.random()*questTaskCount)];
		//quest.goal = Math.floor(Math.random()*2);
		quest.object = monSpec[Math.floor(Math.random()*monSpecCount)];
		quest.number = Math.floor(Math.random()*hero.fame) + 1;
		if (quest.number > 5)
		{
			quest.number = 5;
		}
		quest.collected = 0;
		outputW.innerHTML="You wander down into your Questing Quarry. Someone is waiting for you.<br><br>"+ quest.npcName + " the " +  quest.npcProf + " is leaning idly against the problem post.<br><br>'Howdy! See, " + quest.exposition + " so naturally, that means " + quest.task + " Which is where you come in. I need you to "; 
		if (hero.connerySicknessBool = true)
		{
			outputW.innerHTML="You wander down into your Questing Quarry. Someone is waiting for you.<br><br>"+ quest.npcName + " the " +  quest.npcProf + " is leaning idly against the problem post.<br><br>" + "'Howdy! See, " + quest.exposition + " so naturally, that means " + quest.task + " Which is where you come in. I need you to "; 
		}
		if (quest.goal == 0) // if the quest is for collecting items
		{
			outputW.innerHTML+="gather up " + quest.number + " " + quest.object + "(s) So how about it? I ain't leaving until it's done, so...'";
		}
		else
		{
			if (hero.connerySicknessBool = true)
			{
				outputW.innerHTML+="kill " + quest.number + " " + quest.object + "(s) So how about it? I ain't leaving until it's done, so...'";
			}
			else
			{
				outputW.innerHTML+="kill " + quest.number + " " + quest.object + "(s) So how about it? I ain't leaving until it's done, so...'";
			}
		}
	}
	else
	{
		outputW.innerHTML="You wander down into your Questing Quarry. Someone is waiting for you.<br><br>"+ quest.npcName + " the " +  quest.npcProf + " is leaning idly against the problem post.<br><br> 'How are those " + quest.object + "s coming? I need " + quest.number;
		if (hero.connerySicknessBool == true)
		{
			outputW.innerHTML="You wander down into your Questing Quarry. Someone is waiting for you.<br><br>"+ quest.npcName + " the " +  quest.npcProf + " is leaning idly against the problem post.<br><br> " + "'How are those " + quest.object + "s coming? I need " + quest.number;
		}
		if (quest.goal == 0) // if the quest is for collecting items
		{
			outputW.innerHTML+=" of them, remember?'";
		}
		else
		{
			if (hero.connerySicknessBool == true)
			{
				outputW.innerHTML+=" of them dead, remember?'";
			}
			else
			{
				outputW.innerHTML+=" of them dead, remember?'";
			}
		}
	}
	if (hero.dogBool == true)
	{
		outputW.innerHTML+="<br><br><b>DOG: </b><i>It may seem ridiculous, but if you complete tasks for these weird folks who hang out in the bottom of a quarry for people to do things for them, they talk far and wide about your deeds. In the end you get <b>10x</b> whatever effort you put into the task in <b>Fame</b>.</i>";
	}
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
}

//equip weapon
function equipWeap(weapon)
{
	if (weapon == undefined)
	{
		if (monWeap.weightClass == "heavy")
		{
			weapHols1.bStr = monWeap.bStr;
			weapHols1.bSpd = monWeap.bSpd;
			weapHols1.bDef = monWeap.bDef;
			weapHols1.bAcc = monWeap.bAcc;
			weapHols1.type = monWeap.type;
			weapHols1.order = monWeap.order;
			weapHols1.bool = true;
			weapHols1.pBool = monWeap.pBool;
			weapHols1.fireBool = monWeap.fireBool;
			weapHols1.elecBool = monWeap.elecBool;
			weapHols1.wetBool = monWeap.wetBool;
			weapHols1.Atk = monWeap.Atk;
			weapHols1.name = monWeap.name;
			weapHols1.material = monWeap.material;
			weapHols1.weight = monWeap.weight;
			weapHols1.weightClass = monWeap.weightClass;
			weapHols1.kills = 0;
		}
		else if (monWeap.weightClass == "medium")
		{
			weapHols2.bStr = monWeap.bStr;
			weapHols2.bSpd = monWeap.bSpd;
			weapHols2.bDef = monWeap.bDef;
			weapHols2.bAcc = monWeap.bAcc;
			weapHols2.type = monWeap.type;
			weapHols2.order = monWeap.order;
			weapHols2.bool = true;
			weapHols2.pBool = monWeap.pBool;
			weapHols2.fireBool = monWeap.fireBool;
			weapHols2.elecBool = monWeap.elecBool;
			weapHols2.wetBool = monWeap.wetBool;
			weapHols2.Atk = monWeap.Atk;
			weapHols2.name = monWeap.name;
			weapHols2.material = monWeap.material;
			weapHols2.weight = monWeap.weight;
			weapHols2.weightClass = monWeap.weightClass;
			weapHols2.kills = 0;
		}
		else
		{
			weapHols3.bStr = monWeap.bStr;
			weapHols3.bSpd = monWeap.bSpd;
			weapHols3.bDef = monWeap.bDef;
			weapHols3.bAcc = monWeap.bAcc;
			weapHols3.type = monWeap.type;
			weapHols3.order = monWeap.order;
			weapHols3.bool = true;
			weapHols3.pBool = monWeap.pBool;
			weapHols3.fireBool = monWeap.fireBool;
			weapHols3.elecBool = monWeap.elecBool;
			weapHols3.wetBool = monWeap.wetBool;
			weapHols3.Atk = monWeap.Atk;
			weapHols3.name = monWeap.name;
			weapHols3.material = monWeap.material;
			weapHols3.weight = monWeap.weight;
			weapHols3.weightClass = monWeap.weightClass;
			weapHols3.kills = 0;
		}
		delete monWeap.type;
		delete monWeap.Atk;
		delete monster.weapBool;
		weapDraw();
		lvlUp();
	}
	else if (weapon == "unequip")
	{
		if (weap.weightClass == "heavy" && hero.weapBool == true)
		{
			weapHols1.bStr = weap.bStr;
			weapHols1.bSpd = weap.bSpd;
			weapHols1.bDef = weap.bDef;
			weapHols1.bAcc = weap.bAcc;
			bonusCalc();
			statDraw();
			weapHols1.type = weap.type;
			weapHols1.bool = true;
			weapHols1.pBool = weap.pBool;
			weapHols1.fireBool = weap.fireBool;
			weapHols1.elecBool = weap.elecBool;
			weapHols1.wetBool = weap.wetBool;
			weapHols1.Atk = weap.Atk;
			weapHols1.name = weap.name;
			weapHols1.material = weap.material;
			weapHols1.weight = weap.weight;
			weapHols1.weightClass = weap.weightClass;
			weapHols1.kills = 0;
		}
		else if (weap.weightClass == "medium" && hero.weapBool == true)
		{
			weapHols2.bStr = weap.bStr;
			weapHols2.bSpd = weap.bSpd;
			weapHols2.bDef = weap.bDef;
			weapHols2.bAcc = weap.bAcc;
			bonusCalc();
			statDraw();
			weapHols2.type = weap.type;
			weapHols2.bool = true;
			weapHols2.pBool = weap.pBool;
			weapHols2.fireBool = weap.fireBool;
			weapHols2.elecBool = weap.elecBool;
			weapHols2.wetBool = weap.wetBool;
			weapHols2.Atk = weap.Atk;
			weapHols2.name = weap.name;
			weapHols2.material = weap.material;
			weapHols2.weight = weap.weight;
			weapHols2.weightClass = weap.weightClass;
			weapHols2.kills = 0;
		}
		else if (hero.weapBool == true)
		{
			weapHols3.bStr = weap.bStr;
			weapHols3.bSpd = weap.bSpd;
			weapHols3.bDef = weap.bDef;
			weapHols3.bAcc = weap.bAcc;
			bonusCalc();
			statDraw();
			weapHols3.type = weap.type;
			weapHols3.bool = true;
			weapHols3.pBool = weap.pBool;
			weapHols3.fireBool = weap.fireBool;
			weapHols3.elecBool = weap.elecBool;
			weapHols3.wetBool = weap.wetBool;
			weapHols3.Atk = weap.Atk;
			weapHols3.name = weap.name;
			weapHols3.material = weap.material;
			weapHols3.weight = weap.weight;
			weapHols3.weightClass = weap.weightClass;
			weapHols3.kills = 0;
		}
		weap.type = "hand";
		weap.name = "";
		weap.Atk = 1;
		weap.bStr = 0;
		weap.bSpd = 0;
		weap.bDef = 0;
		weap.bAcc = 0;
		weap.weapClass = "";
		weap.material = "";
		hero.weapBool = false;
		weapDraw();
	}
	else
	{
		windowRestore();
		if (weapon.weightClass == "heavy")
		{
			wWrite("<br>You pull your " + weapon.type + " from its holster on your back." , false);
			weapHols1.bool = false;
		}
		else if (weapon.weightClass == "medium")
		{
			wWrite("<br>You pull your " + weapon.type + " from its holster on your waist." , false);
			weapHols2.bool = false;
		}
		else
		{
			wWrite("<br>You pull your " + weapon.type + " from its holster on your ankle." , false);
			weapHols3.bool = false;
		}
		hero.weapBool = true;
		weap.bStr = weapon.bStr;
		weap.bSpd = weapon.bSpd;
		weap.bDef = weapon.bDef;
		weap.bAcc = weapon.bAcc;
		weap.type = weapon.type;
		weap.pBool = weapon.pBool;
		weap.fireBool = weapon.fireBool;
		weap.elecBool = weapon.elecBool;
		weap.wetBool = weapon.wetBool;
		weap.Atk = weapon.Atk;
		weap.name = weapon.name;
		weap.material = weapon.material;
		weap.weight = weapon.weight;
		weap.weightClass = weapon.weightClass;
		weap.kills = weapon.kills;
		hero.weapBool = true;
		weapon.bool = false;
		weapDraw();
		bonusCalc();
		combatMenu();
	}
	statDraw();
}


//runing away
function run()
{
	if (hero.weapBool == true)
	{
		equipWeap("unequip");
	}
	house();
}

//equip menu
function equipMenu()
{
	if (weap.type != "hand")
	{
		equipWeap("unequip");
	}
	windowStore();
	menu.innerHTML="";
	wWrite("<br>Choose your weapon!" , false);
	mWrite("unarmed" , "Unarmed<br>And a little scared." , false);
	if (weapHols1.bool == true)
	{
		mWrite("equipWeap" , "Heavy Weapon:<br>" + weapHols1.type + " " + weapHols1.Atk + " Atk" , false , "weapHols1");
	}
	if (weapHols2.bool == true)
	{
		mWrite("equipWeap" , "Medium Weapon:<br>" + weapHols2.type + " " + weapHols2.Atk + " Atk" , false , "weapHols2");
	}
	if (weapHols3.bool == true)
	{
		mWrite("equipWeap" , "Light Weapon:<br>" + weapHols3.type + " " + weapHols3.Atk + " Atk" , false , "weapHols3");
	}
}

//Unarmed
function unarmed()
{
	windowRestore();
	wWrite("<br>You raise your fists to face the danger." , false);
	combatMenu();
}

//Compare Menu
function compareMenu()
{
	windowStore();
	menuStore();
	wWrite("You shouldn't be seeing this, if you are this menu is broken." , true);
	mWrite("windowRestore" , "Exit." , true);
	if (monWeap.weightClass == "heavy" && weapHols1.bool == true)
	{
		if (monWeap.Atk > weapHols1.Atk)
		{
			var atkSpan = "green";
		}
		else if (monWeap.Atk < weapHols1.Atk)
		{
			var atkSpan = "green";
		}
		else
		{
			var atkSpan = "";
		}
		if (monWeap.bStr > weapHols1.bStr)
		{
			var strSpan = "green";
		}
		else if (monWeap.bStr < weapHols1.bStr)
		{
			var strSpan = "red";
		}
		else
		{
			var strSpan = "";
		}
		var spdSpan
		var defSpan
		var accSpan
		var poisonSpan
		var fireSpan
		var elecSpan
		var weight
	}
	else if (monWeap.weightClass == "medium" && weapHols2.bool == true)
	{
	}
	else if (monWeap.weightClass == "light" && weapHols3.bool == true)
	{
	}
}

function globalRestore()
{
	menuRestore();
	windowRestore();
}

//scrap weapon
function scrap(weapID)
{
	if (weapID == 1)
	{
		if (monWeap.order == "blade")
		{
			hero.longBladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "axe")
		{
			hero.axeheadCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "knife")
		{
			hero.shortbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "ennui")
		{
			hero.ennuiCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "grammar")
		{
			hero.grammaticalbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "food")
		{
			hero.miscFoodCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "scrap")
		{
			hero.scrapCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "ereader")
		{
			hero.ereaderCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		delete monWeap.type;
		delete monWeap.order;
		delete monWeap.Atk;
		delete monster.weapBool;
		lvlUp();
	}
	else if (weapID == 2)
	{
		if (weapHols1.order == "blade")
		{
			hero.longBladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "axe")
		{
			hero.axeheadCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "knife")
		{
			hero.shortbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "ennui")
		{
			hero.ennuiCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "grammar")
		{
			hero.grammaticalbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "food")
		{
			hero.miscFoodCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "scrap")
		{
			hero.scrapCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols1.order == "ereader")
		{
			hero.ereaderCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		delete weapHols1.type;
		delete weapHols1.order;
		delete weapHols1.Atk;
		delete weapHols1.bool;
	}
	else if (weapID == 3)
	{
		if (weapHols2.order == "blade")
		{
			hero.longBladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "axe")
		{
			hero.axeheadCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "knife")
		{
			hero.shortbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "ennui")
		{
			hero.ennuiCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "grammar")
		{
			hero.grammaticalbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "food")
		{
			hero.miscFoodCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "scrap")
		{
			hero.scrapCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols2.order == "ereader")
		{
			hero.ereaderCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		delete weapHols2.type;
		delete weapHols2.order;
		delete weapHols2.Atk;
		delete weapHols2.bool;
	}
	else if (weapID == 4)
	{
		if (weapHols3.order == "blade")
		{
			hero.longBladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "axe")
		{
			hero.axeheadCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "knife")
		{
			hero.shortbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "ennui")
		{
			hero.ennuiCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "grammar")
		{
			hero.grammaticalbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "food")
		{
			hero.miscFoodCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "scrap")
		{
			hero.scrapCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (weapHols3.order == "ereader")
		{
			hero.ereaderCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		delete weapHols3.type;
		delete weapHols3.order;
		delete weapHols3.Atk;
		delete weapHols3.bool;
	}
	else if (weapID == 5)
	{
		if (monWeap.order == "blade")
		{
			hero.longBladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "axe")
		{
			hero.axeheadCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "knife")
		{
			hero.shortbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "ennui")
		{
			hero.ennuiCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "grammar")
		{
			hero.grammaticalbladeCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "food")
		{
			hero.miscFoodCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "scrap")
		{
			hero.scrapCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		else if (monWeap.order == "ereader")
		{
			hero.ereaderCount += Math.floor(Math.random()*1);
			hero.handleCount += Math.floor(Math.random()*1);
			hero.handguardCount += Math.floor(Math.random()*1);
		}
		delete monWeap.type;
		delete monWeap.order;
		delete monWeap.Atk;
		delete monster.weapBool;
		lvlUp();
	}
	else
	{
		wWrite("Error in scrap(). Miscalled weapID.", false);
	}
}

function visitForge()
{
	forgeStatDraw();
	outputW.innerHTML="This Feature is incomplete.";
	if (hero.fame > 4 && hero.smithBool == true && hero.weapBool == true && hero.scrapBool == true && hero.i > 0)
	{
		menu.innerHTML+="<button  class='button' onclick='house()'>Go Home.</button>";
	}
	else
	{
		menu.innerHTML="<button  class='button' onclick='house()'>Go Home.</button>";
	}
}

/*function nameWeap()
{
	wWrite("<b><u>NAME YOUR WEAPON:</u></b><br><form id='nameWeap'><input type='text' name='userText' id='userText'></form>", true);
	var input = document.getElementById("nameWeap").elements[0].value;
	mWrite("upgradeWeap" , "Choose!" , true , input);
}*/

//Upgrade Weapon
function upgradeWeap(name)
{
	
}

function createWeap()
{
	wWrite("You feel inspiration take hold, you cloister yourself away with your forge and your supply of ductape...<br>");
	hero.i = hero.i - 5;
	hero.ducttapeCount = hero.ducttapeCount - 1;
	var skillChance = (Math.floor(Math.random()*6) + 1);
	if (skillChance == 1)
	{
		forgeWeap.bStr = (Math.floor(Math.random()*hero.tCont) + 1);
		forgeWeap.bSpd = (Math.floor(Math.random()*hero.prec) + 1);
		forgeWeap.bDef = (Math.floor(Math.random()*hero.hSkill) + 1);
		forgeWeap.bAcc = (Math.floor(Math.random()*hero.tSecr) + 1);
	}
	else if (skillChance == 2)
	{
		forgeWeap.bStr = (Math.floor(Math.random()*hero.tCont) + 1);
		forgeWeap.bSpd = 0;
		forgeWeap.bDef = 0;
		forgeWeap.bAcc = 0;
	}
	else if (skillChance == 3)
	{
		forgeWeap.bStr = 0;
		forgeWeap.bSpd = (Math.floor(Math.random()*hero.prec) + 1);
		forgeWeap.bDef = 0;
		forgeWeap.bAcc = 0;
	}
	else if (skillChance == 4)
	{
		forgeWeap.bStr = 0;
		forgeWeap.bSpd = 0;
		forgeWeap.bDef = (Math.floor(Math.random()*hero.hSkill) + 1);
		forgeWeap.bAcc = 0;
	}
	else if (skillChance == 5)
	{
		forgeWeap.bStr = 0;
		forgeWeap.bSpd = 0;
		forgeWeap.bDef = 0;
		forgeWeap.bAcc = (Math.floor(Math.random()*hero.tSecr) + 1);
	}
	else
	{
		forgeWeap.bStr = 0;
		forgeWeap.bSpd = 0;
		forgeWeap.bDef = 0;
		forgeWeap.bAcc = 0;
	}
	var dmgCAP1 = hero.Str / 10;
	var dmgCAP = Math.floor(dmgCAP1) + 1;
	forgeWeap.Atk = Math.floor(Math.random() * 10) + dmgCAP;
	forgeWeap.pBool = false;
	forgeWeap.fireBool = false;
	forgeWeap.elecBool = false;
	forgeWeap.wetBool = false;
}

function forgeLvl()
{
	menu.innerHTML="<button  class='button' onclick='tContLvl()'>Temp. Control</button>";
	menu.innerHTML+="<button  class='button' onclick='precLvl()'>Precision</button>";
	menu.innerHTML+="<button  class='button' onclick='hSkillLvl()'>Hammer Skill</button>";
	menu.innerHTML+="<button  class='button' onclick='tSecrLvl()'>Tape Secrets</button>";
	outputW.innerHTML="This process has taught you something, what is it?";
}

function tContLvl()
{
	hero.tCont = hero.tCont + (Math.floor(Math.random()*5) + 1);
	visitForge();
}

function precLvl()
{
	hero.prec = hero.prec + (Math.floor(Math.random()*5) + 1);
	visitForge();
}

function hSkillLvl()
{
	hero.hSkill = hero.hSkill + (Math.floor(Math.random()*5) + 1);
	visitForge();
}

function tSecrLvl()
{
	hero.tSecr = hero.tSecr + (Math.floor(Math.random()*5) + 1);
	visitForge();
}

//monster generation
function monGen(type , questing)
{
	while(monHistory.length > 0) 
	{
			monHistory.pop();
	}
	monster.prevX = 0;
	monster.prevY = 0;
	monster.x = 0;
	monster.y = 0;
	monster.futureX = 0;
	monster.futureY = 0;
	monster.weight = Math.floor(Math.random()*500) + 50;
	monster.hisBool = true;
	monster.displayHisBool = false;
	var legWeapBool = false;
	monster.Uber = false;
	monster.weapBool = false;
	monster.armBool = false;
	monster.material = material[Math.floor(Math.random()*materialCount)]
	monster.fireBool = false;
	monster.meltBool = false;
	monster.electrifiedBool = false;
	if (type == "demon")
	{
		monster.species = demonType[Math.floor(Math.random()*demonTypeCount)];
	}
	else if (type == "ePig")
	{
		monster.species = "pig";
	}
	else
	{
		monster.species = monSpec[Math.floor(Math.random()*monSpecCount)];
	}
	monsterDesc = "|--------|<br>The " + monster.species + " is a " + descWeightAdj[Math.floor(Math.random()*descWeightAdjCount)] + " and " + descHeightAdj[Math.floor(Math.random()*descHeightAdjCount)] + " sort of thing. They have a " + monDescBodyTypes[Math.floor(Math.random()*monDescBodyTypesCount)] + " body type, that appears to be made entirely of " + monster.material +  ". It seems to be flipping you off.";
	monHistory.push(monsterDesc);
	if (type == "ePig")
	{
		monster.name = "Epic";
	}
	else
	{
		monster.name = "The " + monster.species;
	}
	monster.poisonBool = false;
	var droppedUberChance = Math.floor(Math.random()*10);
	if (type == "demon")
	{
		monster.Demon = true;
		if (droppedUberChance == 9)
		{
			var strCAP = hero.Str + demUGenStr;
			var spdCAP = hero.Spd + demUGenSpd;
			var defCAP = hero.Def + demUGenDef;
			var accCAP = hero.Acc + demUGenAcc;
			monster.Str = Math.floor(Math.random()*strCAP)+1;
			monster.Spd = Math.floor(Math.random()*spdCAP)+1;
			monster.Def = Math.floor(Math.random()*defCAP)+1;
			monster.Acc = Math.floor(Math.random()*accCAP)+1;
			monster.Uber = true;
			monster.weapBool = true;
			monster.name = namesFirst[Math.floor(Math.random()*fNameCount)];
			monster.HP = monster.Str * monster.Def;
			uWeapGen();
		}
		else
		{
			var StrMax = hero.Str + demGenStr;
			var SpdMax = hero.Spd + demGenSpd;
			var DefMax = hero.Def + demGenDef;
			var AccMax = hero.Acc + demGenAcc;
			monster.Str = Math.floor(Math.random()*StrMax)+1;
			monster.Spd = Math.floor(Math.random()*SpdMax)+1;
			monster.Def = Math.floor(Math.random()*DefMax)+1;
			monster.Acc = Math.floor(Math.random()*AccMax)+1;
			var monWeapChance = Math.floor(Math.random()*2);
			monster.HP = monster.Str * monster.Def;
			if (monWeapChance == 1)
			{
				monster.weapBool = true;
				weapGen();
			}
		}
	}
	else if (type == "ePig")
	{
		monster.Demon = false;
		var StrMax = calcStr + ePigGenStr;
		var SpdMax = calcSpd + ePigGenSpd;
		var DefMax = calcDef + ePigGenDef;
		var AccMax = calcAcc + ePigGenAcc;
		monster.Str = Math.floor(Math.random()*StrMax)+1;
		monster.Spd = Math.floor(Math.random()*SpdMax)+1;
		monster.Def = Math.floor(Math.random()*DefMax)+1;
		monster.Acc = Math.floor(Math.random()*AccMax)+1;
		monster.HP = monster.Str * monster.Def;
	}
	else
	{
		monster.Demon = false;
	}
	if (type == "vanilla")
	{
		if (droppedUberChance == 9)
		{
			var strCAP = hero.Str + monUGenStr;
			var spdCAP = hero.Spd + monUGenSpd;
			var defCAP = hero.Def + monUGenDef;
			var accCAP = hero.Acc + monUGenAcc;
			monster.Str = Math.floor(Math.random()*strCAP)+1;
			monster.Spd = Math.floor(Math.random()*spdCAP)+1;
			monster.Def = Math.floor(Math.random()*defCAP)+1;
			monster.Acc = Math.floor(Math.random()*accCAP)+1;
			monster.Uber = true;
			monster.weapBool = true;
			monster.name = namesFirst[Math.floor(Math.random()*fNameCount)];
			monster.HP = monster.Str + monster.Def;
			uWeapGen();
		}
		else
		{
			var StrMax = hero.Str + monGenStr;
			var SpdMax = hero.Spd + monGenSpd;
			var DefMax = hero.Def + monGenDef;
			var AccMax = hero.Acc + monGenAcc;
			monster.Str = Math.floor(Math.random()*StrMax)+1;
			monster.Spd = Math.floor(Math.random()*SpdMax)+1;
			monster.Def = Math.floor(Math.random()*DefMax)+1;
			monster.Acc = Math.floor(Math.random()*AccMax)+1;
			var monWeapChance = Math.floor(Math.random()*2);
		if (monWeapChance == 1)
		{
			monster.weapBool = true;
			weapGen();
		}
		monster.HP = monster.Str + monster.Def;
	}
	if (questing == true)
	{
		var spawnQuest = Math.floor(Math.random()*3);
		if (spawnQuest == 1)
		{
			monster.species = quest.object;
		}
		else
		{
			monster.species = monSpec[Math.floor(Math.random()*monSpecCount)];
		}
		if (monWeapChance == 1)
		{
			monster.weapBool = true;
			weapGen();
		}
		else
		{
			monster.weapBool = false;
		}
	}
	var droppedHisCount = 5;
	if (droppedUberChance == 9)
	{
		monster.Age = Math.floor(Math.random()*999) + 1;
	}
	else
	{
		monster.Age = Math.floor(Math.random()*10) + 1;
	}
		var yearsAged = 1;
		var daysAged = 0;
		while (yearsAged < monster.Age)
		{
			var quickName = namesFirst[Math.floor(Math.random()*fNameCount)];
			var quickWeap = weapType[Math.floor(Math.random()*weapTypeCount)];
			var quickJob = titlesMale[Math.floor(Math.random()*titlesCountM)];
			var hisChance = Math.floor(Math.random() * 9);
			if (hisChance == 2)
			{
				var monHisTypes = [
					monster.name + " gave birth to " + quickName + " the " + monster.species + " at age ",
					monster.name + " encountered " + quickName + " the adventurer at age ",
					monster.name + " ate " + quickName + " the adventurer whole at age ",
					monster.name + " completed a combat course in specialized " + quickWeap + " combat at age ",
					monster.name + " got a job as a " + quickJob + " at age "
				];
				var ranChance = Math.floor(Math.random()*droppedHisCount);
				monHistory.push("<br>" + monHisTypes[ranChance] + yearsAged);
				if (ranChance == 1)
				{
					if (Math.floor(Math.random()*2) == 1)
					{
						monHistory.push("<br>" + monster.name + " killed the adventurer");
					}
					else
					{
						monHistory.push("<br>" + monster.name + " ran away from the adventurer");
					}
				}
				else if (ranChance == 4)
				{
					if (Math.floor(Math.random()*2) == 1)
					{
						monHistory.push("<br>" + monster.name + " was fired from their job");
						daysAged = daysAged + 1;
					}
				}
			}
			else if (hisChance == 3)
			{
				var interlinkCount = 7;
				var monInterlinkTypes = [
					" became a lacky to ",
					" hired ",
					" dated ",
					" fought ",
					" hooked up with ",
					" got drunk at a party and made out with ",
					" cheated off "
				];
				if (hisFiguresCount > 0)
				{
					monHistory.push("<br>" + monster.name + monInterlinkTypes[Math.floor(Math.random()*interlinkCount)] + hisFigures[Math.floor(Math.random()*hisFiguresCount)] + " at age " + yearsAged);
				}
				else
				{
					monHistory.push("<br>" + monster.name + monInterlinkTypes[Math.floor(Math.random()*interlinkCount)] + namesFirst[Math.floor(Math.random()*fNameCount)] + " the " + monSpec[Math.floor(Math.random()*monSpecCount)] + " at age " + yearsAged);
				}
			}
			daysAged = daysAged + 1;
			if (daysAged >= 20)
			{
				yearsAged = yearsAged + 1;
				daysAged = 0;
				monHistory.push("<br>");
			}
		}
		monHistory.push("<br>|----------|");
	}
}


function demonSummon()
{
	outputW.innerHTML="You call. You call from the tips of your fingers to the skins of your toes. You call with the cracking diction of thunder and the bright burning plosives of fire. Something answers.";
	hero.fame = hero.fame - 15;
	menu.innerHTML="<button  class='button' onclick='demonEncounter()'>Continue</button>";
}

function setConstruct()
{
	var setDesc =
	[
		"an ancient temple",
		"a pillared courtyard",
		"a thickly wooded forest",
		"a glade",
		"a barren mountain",
		"a deserted village",
		"forgotten ruins",
		"your front porch",
		"a busy market",
		"a town street"
	]
	var setDescCount = 10;
	set.desc = setDesc[Math.floor(Math.random() * setDescCount)];
	set.weather = setWeather[Math.floor(Math.random() * setWeatherCount)];
	
	set.onFire = false;
	set.bystanderBool = false;
	set.bystanderCount = 0;
	
	if (set.desc == "an ancient temple" || set.desc == "forgotten ruins")
	{
		if (set.desc == "an ancient temple")
		{
			set.background = templeBack;
		}
		else
		{
			set.background = ruinsBack;
		}
		set.dressing = "pillar";
		set.improvWeap = "strange object";
		set.canBurnBool = false;
		set.outsideBool = false;
	}
	else if (set.desc == "a thickly wooded forest" || set.desc == "a glade")
	{
		if (set.desc == "a thickly wooded forest")
		{
			set.background = forestBack;
		}
		else
		{
			set.background = gladeBack;
		}
		set.dressing = "tree";
		set.improvWeap = "branch";
		set.canBurnBool = true;
		set.outsideBool = true;
	}
	else if (set.desc == "a pillared courtyard" || set.desc == "your front porch")
	{
		if (set.desc == "a pillared courtyard")
		{
			set.background = courtyardBack;
		}
		else
		{
			set.background = porchBack;
		}
		set.dressing = "pillar";
		set.improvWeap = "large stone";
		set.canBurnBool = false;
		set.outsideBool = true;
	}
	else if (set.desc == "a barren mountain")
	{
		set.background = mountainBack;
		set.dressing = "boulder";
		set.improvWeap = "large stone";
		set.canBurnBool = false;
		set.outsideBool = true;
	}
	else if (set.desc == "a deserted village")
	{
		set.background = villageBack;
		set.dressing = "building";
		set.improvWeap = "broken sign";
		set.canBurnBool = true;
		set.outsideBool = true;
	}
	else if (set.desc == "a busy market" || set.desc == "a town street")
	{
		if (set.desc == "a busy market")
		{
			set.background = marketBack;
		}
		else
		{
			set.background = townBack;
		}
		set.dressing = "building";
		set.improvWeap = "manhole cover";
		set.canBurnBool = true;
		set.outsideBool = true;
		set.bystanderBool = true;
		set.bystanderCount = Math.floor(Math.random()*9) + 1;
	}
}

//encounter start
function encounter()
{
	setConstruct();
	document.getElementById("drop").style = "position: fixed;background-color:#000000;background-position: center;background-image:url(" + set.background + ");background-repeat: no-repeat;";
	hero.x = 1;
	hero.y = 0;
	hero.futureX = 1;
	hero.futureY = 0;
	hero.prevX = 1;
	hero.prevY = 0;
	var ePigChance = Math.floor(Math.random()*10000);
	if (ePigChance < 75)
	{
		monGen("ePig" , quest.bool);
		var ePigBool = true;
	}
	else
	{
		monGen("vanilla" , quest.bool);
	}
	if (monster.Uber == true)
	{
		outputW.innerHTML="After all your wandering, you find yourself at " + set.desc + " <span style='color:purple;text-shadow: 0px 0px 1px #FFFFFF;'>You find yourself feeling extraordinarily uneasy.</span> " + monster.name + " the <span id='monsterSpecies'>" + monster.species + "</span> is waiting for you, holding a(n) " + monWeap.type + ". It's " + monster.material + " skin glinting in the sun. What do you do?";
		familyTree.push("<br>" + hero.fName + " encountered " + monster.name + " the " + monster.species + " at age " + hero.Age);
		hisFigures.push(monster.name + " the " + monster.species);
		hisFiguresCount = hisFiguresCount + 1;
		hisBook.push("<br>" + monHistory);
		hero.i = hero.i + 1;
		insper.push("the time " + hero.fName + " encountered " + monster.name + " the <span id='monsterSpecies'>" + monster.species + "</span> on the field of battle.");
		insperCount = insperCount + 1;
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: You've encountered an especially hard monster. I would suggest running from anything with a name until you are properly equipped.<br>monster HP: " + monster.HP +"<br>monster's Weapon Atk: " + monWeap.Atk +"</i>";
		}
	}
	else if (ePigBool == true)
	{
		outputW.innerHTML="After all your wandering, you find yourself at " + set.desc + " <span style='color:coral;text-shadow: 0px 0px 1px #FFFFFF;'>There is a large snuffling in the shadows.</span> " + monster.name + " the <span id='monsterSpecies'>" + monster.species + "</span> is waiting for you. It's " + monster.material + " skin glinting in the sun. What do you do?";
		familyTree.push("<br>" + hero.fName + " encountered " + monster.name + " the " + monster.species + ", an EPIC PIG, at age " + hero.Age);
		hisFigures.push(monster.name + " the " + monster.species);
		hisFiguresCount = hisFiguresCount + 1;
		hisBook.push("<br>" + monHistory);
		hero.i = hero.i + 1;
		insper.push("the time " + hero.fName + " encountered " + monster.name + " the <span id='monsterSpecies'>" + monster.species + "</span> on the field of battle.");
		insperCount = insperCount + 1;
		if (hero.dogBool == true)
		{
			outputW.innerHTML+=" <i> DOG: You've encountered an Epic Pig. I would suggest running, period.<br>monster HP: " + monster.HP +"</i>";
		}
	}
	else
	{
		if (monster.weapBool == false)
		{
			outputW.innerHTML="After all your wandering, you find yourself at " + set.desc + ".  You've come upon a(n) <span id='monsterSpecies'>" + monster.species + "</span>. It's " + monster.material + " skin glinting in the sun. What do you do?";
			if (hero.dogBool == true)
			{
				outputW.innerHTML+=" <i> DOG: You've encountered a monster.<br>monster HP: " + monster.HP +"</i>";
			}
		}
		else
		{
			outputW.innerHTML="After all your wandering, you find yourself at " + set.desc + ".  You've come upon a(n) <span id='monsterSpecies'>" + monster.species + "</span>, holding a(n) " + monWeap.type + ". It's " + monster.material + " skin glinting in the sun. What do you do?";
			if (hero.dogBool == true)
			{
				outputW.innerHTML+=" <i> DOG: You've encountered a monster holding a weapon. Defeat it and you can take its weapon for your own.<br>monster HP: " + monster.HP +"<br>monster's Weapon Atk: " + monWeap.Atk +"</i>";
			}
		}
	}
	if (quest.bool == true && monster.species == quest.object)
	{
		document.getElementById("monsterSpecies").style.color="#dbdd49";
		document.getElementById("monsterSpecies").style.textShadow = "0px 0px 1px #FFFFFF";
	}
	locationDisplay.innerHTML="<i>An Adventure</i>";
	if (set.outsideBool == true)
	{
		wWrite("<br>It is " + set.weather , false);
		if (set.weather == "raining" || set.weather == "storming")
		{
			weatherDraw("weather" , "storm");
		}
		else if (set.weather == "sunny" || set.weather == "overcast")
		{
			weatherDraw("weather" , "clear");
		}
		else if (set.weather == "foggy")
		{
			weatherDraw("weather" , "fog");
		}
		else if (set.weather == "muggy" || set.weather == "stifling")
		{
			weatherDraw("weather" , "muggy");
		}
		else if (set.weather == "snowing" || set.weather == "blizzard")
		{
			weatherDraw("weather" , "snow");
		}
	}
	else
	{
		weatherDraw("weather" , "clear");
	}
	if (set.bystanderCount > 0)
	{
		outputW.innerHTML+="<br>There are " + set.bystanderCount + " people watching you.";
	}
	combatMenu();
}

function printMonHis()
{
	outputW.innerHTML+="<br>" + monHistory;
	var elem = document.getElementById("window");
	elem.scrollTop = elem.scrollHeight;
}


//Demon special encounter
function demonEncounter()
{
	monGen("demon", false);
	set.desc = "within your summoning circle.";
	set.dressing = "unknowable rune";
	set.improvWeap = "candle";
	set.canBurnBool = false;
	set.onFire = false;
	set.outsideBool = false;
	set.weather = "dark and ominous";
	set.bystanderCount = 0;
	statDraw();
	if (monster.Uber == true)
	{
		outputW.innerHTML="<span style='color:purple'>An arctic gail roars through your house, blowing out the candles, slamming the doors, rattling the windows in their panes, and crystalizing your breath.</span> " + monster.name + " the " + monster.species + " appears, holding a(n) " + monWeap.type + ". It's " + monster.material + " skin is glowing with faint hellish light. What do you do?";
		familyTree.push("<br>" + hero.fName + " encountered " + monster.name + " the " + monster.species + " at age " + hero.Age);
		hisFigures.push(monster.name + " the " + monster.species);
		hisFiguresCount = hisFiguresCount + 1;
		hisBook.push("<br>" + monHistory);
		if (hero.dogBool == true)
			{
				outputW.innerHTML+=" <i> DOG: You've encountered an especially hard demon. You can accidentally summon them when sacrificing children. I would run away until you are properly equipped.<br>monster HP: " + monster.HP +"<br>monster's Weapon Atk: " + monWeap.Atk +"</i>";
			}
	}
	else
	{
		if (monster.weapBool == false)
		{
			outputW.innerHTML="A chill wind blows through your house, a(n) " + monster.species + " appears. It's " + monster.material + " skin is glowing with faint hellish light. What do you do?";
			if (hero.dogBool == true)
			{
				outputW.innerHTML+=" <i> DOG: You've encountered a demon. You can accidentally summon them when sacrificing children.<br>monster HP: " + monster.HP +"</i>";
			}
		}
		else
		{
			outputW.innerHTML="A chill wind blows through your house, a(n) " + monster.species + " appears, holding a(n) " + monWeap.type + ". It's " + monster.material + " skin is glowing with faint hellish light. What do you do?";
					if (hero.dogBool == true)
			{
				outputW.innerHTML+=" <i> DOG: You've encountered a demon with a weapon. You can accidentally summon them when sacrificing children. If you kill it, you can take its weapon for your own.<br>monster HP: " + monster.HP +"<br>monster's Weapon Atk: " + monWeap.Atk +"</i>";
			}
		}
	}
	menu.innerHTML="<button  class='button' onclick='fight(1)'>Fight!</button><button  class='button' onclick='run()'>Run!</button>";
}

//dog Encounter
function dogEncounter()
{
	hero.fame = hero.fame - 100;
	locationDisplay.innerHTML="<i>Outside the " + rival.lName + " house.</i>";
	if (hero.dogBool == true)
	{
		set.desc = "outside your rival's home";
		set.dressing = "plastic flamingo";
		set.improvWeap = "lawn gnome";
		set.canBurnBool = true;
		set.onFire = false;
		set.outsideBool = true;
		set.weather = "storming";
		set.bystanderCount = 0;
		outputW.innerHTML="Your dog turns and looks at you with great sadness in its eyes.";
		monster.species = "Your Dog";
		monster.weapBool = true;
		monster.material = "Iron";
		monster.Str = dog.Str;
		monster.Spd = dog.Spd;
		monster.Def = dog.Def;
		monster.Acc = dog.Acc;
		monster.HP = dog.HP;
		weapGen();
		menu.innerHTML="<button  class='button' onclick='fight(1)'>Fight!";
		dogFightBool = true;
		hero.dogBool = false;
	}
	else
	{
		rivalEncounter();
	}
}

//rival Encounter
function rivalEncounter()
{
	set.desc = "within your rival's home";
	set.dressing = "chair";
	set.improvWeap = "tv tray";
	set.canBurnBool = false;
	set.onFire = false;
	set.outsideBool = false;
	set.weather = "dark and ominous";
	set.bystanderCount = 0;
	locationDisplay.innerHTML="<i>Inside the " + rival.lName + " house.</i>";
	dogFightBool = false;
	outputW.innerHTML="Stepping into the light, you come upon " + rival.name + " " + rival.lName + " in the middle of a microwaved dinner. <br><br> 'Hello?' " + rival.name + " greets you with confusion. <br> <br> 'Years and years ago a member of your family burst into my family's house, and as it was put to me: " +rival.dickMove + " And now I've come for revenge!";
	monster.species = rival.name;
	monster.weapBool = true;
	monster.Str = rival.Str;
	monster.Spd = rival.Spd;
	monster.Def = rival.Def;
	monster.Acc = rival.Acc;
	monster.HP = rival.HP;
	weapGen();
	menu.innerHTML="<button  class='button' onclick='fight(1)'>Fight!</button>";
	rivalFightBool = true;
}

function bridge()
{
	outputW.innerHTML="You won. You ended the feud. And you did it in " + hero.generation + " generations.";
	menu.innerHTML="You won. You ended the feud. And you did it in " + hero.generation + " generations.";
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
}

function spellMenu()
{
	menu.innerHTML="";
	if (hero.curMana > 4)
	{
		if (hero.lightningBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(3)'>Lightning Bolt!</button>";
		}
		if (hero.healBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='damageCalc(8)'>Heal!</button>";
		}
		if (hero.fireBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(4)'>Fire Pillar!</button>";
		}
		if (hero.stormCallBool == true && hero.curMana > 19 && set.outsideBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(5)'>Call The STORM!</button>";
		}
		if (hero.chuckChuckBool == true && hero.curMana > 24 && set.bystanderCount > 0)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(7)'>Audience Participation!</button>";
		}
		if (hero.audienceSummonBool == true && hero.curMana > 49)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(8)'>Let Them Watch!</button>";
		}
		if (hero.gailBool == true && hero.curMana > 49)
		{
			menu.innerHTML+="<button  class='button' onclick='fight(6)'>Gail Shreik!</button>";
		}
	}
	menu.innerHTML+="<button  class='button' onclick='combatMenu()'>Back.</button>";
	
}

function combatMenu()
{
	var distanceX = Math.abs(hero.x - monster.x);
	var distanceY = Math.abs(hero.y - monster.y);
	if (hero.curHP > 0 && distanceX <= 1 && distanceY <= 1)
	{
		mWrite("fight" , "Fight." , true , 1);
		mWrite("run" , "Run!" , false);
		if (hero.weapBool == true)
		{
			mWrite("fight" , "Throw " + weap.type + "!" , false , 2);
		}
		if (weapHols1.bool == true || weapHols2.bool == true || weapHols3.bool == true)
		{
			mWrite("equipMenu" , "Draw Weapon" , false);
		}
		// spell menu button here.
		if (hero.tacoSpellBool == true)
		{
			mWrite("spellMenu" , "Spells" , false);
		}
		if (monWeap.existBool == true)
		{
			mWrite("equipFallenWeap" , "Equip fallen " + monWeap.type + "." , false);
		}
		if (debugBool == true)
		{
			mWrite("printMonHis" , "Print " + monster.species + "'s history.", false);
		}
	}
	else if (hero.curHP > 0 && hero.y == 0 && distanceX > 1)
	{
		mWrite("moveForward" , "Move towards the " + monster.species + "." , true , 1);
		mWrite("moveBackward" , "Move away from the " + monster.species + "." , false , 1);
		mWrite("changePositions" , "Stand your ground." , false , 1);
	}
	else if (hero.curHP > 0 && hero.y > 0)
	{
		mWrite("changePositions" , "Continue." , true , 1);
	}
	else if (hero.curHP <= 0)
	{
		equipWeap("unequip");
		outputW.innerHTML+="<p><b><i>" + deathMsg[Math.floor(Math.random()*deathMsgCount)] + "</i></b></p>";
		menu.innerHTML="<button  class='button' onclick='heroGen()'>Restart</button>";
		if (hero.childBool == true)
		{
			menu.innerHTML+="<button  class='button' onclick='inherit()'>Live on through " + child.fName + ".</button>";
			if(monster.Uber == true)
			{
				familyTree.push("<br>" + hero.fName + " a " + hero.Age + " year old " + hero.genderText + " killed by " + monster.name + " the " + monster.species);
			}
			else
			{
				familyTree.push("<br>" + hero.fName + " a " + hero.Age + " year old " + hero.genderText + " killed by " + monster.species);
			}
		}
		else
		{
			familyTree.push("<br>" + hero.fName + " a " + hero.Age + " year old " + hero.genderText + " killed by a " + monster.species);
						outputW.innerHTML+="<p><b><i>You lived " + hero.generation + " generations.</i></b></p>";
		}
		familyTree.push ("<br>" + hero.fName + " killed " + hero.kills + " foes in their life");
	}
	else
	{
		wWrite("Error: combatMenu()", false);
	}
}

function equipFallenWeap(lvlBool)
{
	hero.weapBool = true;
	weap.type = dropWeap.type; //drops the dropWeapon to the battlefield.
	weap.order = dropWeap.order;
	weap.material = dropWeap.material;
	weap.name = dropWeap.name;
	weap.Atk = dropWeap.Atk;
	weap.pBool = dropWeap.pBool;
	weap.bStr = dropWeap.bStr;
	weap.bSpd = dropWeap.bSpd;
	weap.bDef = dropWeap.bDef;
	weap.bAcc = dropWeap.bAcc;
	weap.fireBool = dropWeap.fireBool;
	weap.elecBool = dropWeap.elecBool;
	weap.wetBool = dropWeap.wetBool;
	weap.weight = dropWeap.weight;
	weap.weightClass = dropWeap.weightClass;
	dropWeap.existBool = false;
	weapDraw();
	if (lvlBool == true)
	{
		equipWeap("unequip");
		lvlUp();
	}
	else
	{
		fightBack();
	}
	statDraw();
}

function fight(type)
{
	if (type == 1) //vanilla combat
	{
		var atkSuc = Math.floor(Math.random()*monster.Spd) + 1;
		if (atkSuc < hero.Acc) // you hit
		{
			if (hero.weapBool == false) // you don't have a weapon
			{
				damageCalc("unarmed")
			}		
			else // you do
			{
				damageCalc("armed")
			}
		}
		else //you missed
		{
			outputW.innerHTML+="<br>You miss.";
			if (atkSuc < hero.dickMoves && set.bystanderCount > 0)
			{
				outputW.innerHTML+="<br>You hit an innocent bystander, killing them.";
				set.bystanderCount = set.bystanderCount - 1;
			}
		}
	}
	if (type == 2) //tossing weapon
	{
		var atkSuc = Math.floor(Math.random()*monster.Spd) + 5;
		if (atkSuc < hero.Acc) //if the weapon hits
		{
			damageCalc("toss")
		}
		else
		{
			if (atkSuc < hero.dickMoves && set.bystanderCount > 0)
			{
				outputW.innerHTML+="<br>You hit an innocent bystander, impailing and killing them.";
				set.bystanderCount = set.bystanderCount - 1;
				hero.weapBool = false;
				weap.type = "hand";
				weap.name = " ";
				weap.material = " ";
				weap.Atk = "1";
				weapDraw();
			}
			else
			{
				outputW.innerHTML+="<br>Your " + weap.type + " clatters to the ground between you and the  " + monster.species + ".<br>Your " + weap.type + " is now on the ground.";
				hero.weapBool = false;
				dropWeap.type = weap.type; //drops the weapon from being equipped to the battlefield.
				dropWeap.material = weap.material;
				dropWeap.name = weap.name;
				dropWeap.Atk = weap.Atk;
				dropWeap.pBool = weap.pBool;
				dropWeap.bStr = weap.bStr;
				dropWeap.bSpd = weap.bSpd;
				dropWeap.bDef = weap.bDef;
				dropWeap.bAcc = weap.bDef;
				dropWeap.existBool = true;
				weap.type = "hand";
				weap.name = " ";
				weap.material = " ";
				weap.Atk = "1";
				weapDraw();
			}
		}
		weap.bStr = 0;
		weap.bSpd = 0;
		weap.bDef = 0;
		weap.bAcc = 0;
		bonusCalc();
		statDraw();
	}
	if (type == 3) //lightning bolt
	{
		var atkSuc = Math.floor(Math.random()*monster.Spd) + 5;
		if (atkSuc < hero.Acc) //if the weapon hits
		{
			damageCalc("electrical");
		}
		else
		{
			outputW.innerHTML+="<br>Your lightning bolt misses.";
			if (atkSuc < hero.dickMoves && set.bystanderCount > 0)
			{
				outputW.innerHTML+="<br>You hit an innocent bystander, killing them.";
				set.bystanderCount = set.bystanderCount - 1;
			}
		}
	}
	if (type == 4) //fire pillar
	{
		var atkSuc = Math.floor(Math.random()*monster.Spd) + 5;
		if (atkSuc < hero.Acc) //if the weapon hits
		{
			damageCalc("fire");
		}
		else
		{
			outputW.innerHTML+="<br>Your pillar of fire misses.";
			if (atkSuc < hero.dickMoves && set.bystanderCount > 0)
			{
				outputW.innerHTML+="<br>You hit an innocent bystander, killing them.";
				set.bystanderCount = set.bystanderCount - 1;
			}
		}
	}
	if (type == 5) //Storm Call
	{
		damageCalc("stormCall");
	}
	if (type == 6) //Gail
	{
		damageCalc("gail");
	}
	if (type == 7) //Chucking Chuck
	{
		damageCalc("getOverThere");
	}
	if (type == 8) //Getting an Audience
	{
		damageCalc("prima");
	}
	//Victory messages
	var vicMsg = [
		"You lodge your " + weap.type + " in the " + monster.species + "'s skull. One leg twitches as it falls dead.",
		"The " + monster.species + " stands for a moment, before falling to the ground, dead.",
		"You and the " + monster.species + " agree, that while you most certainly didn't kill it... for the sake of everyone involved, you'll both agree that you did, and the history books will reflect that.",
		"The " + monster.species + " collapses due to an entirely unrelated, previously undiagnosed, heart complication. You're free to celebrate anyway.",
		"*<i>Final Day-Dream victory music.</i>*",
		"Blood spurts from the " + monster.species + "'s wounds, and it falls dead to the ground.",
		"The " + monster.species + " looks sad for a moment, and then nods its head sagely as it goes to pursue the last great adventure, that last crusade.",
		"You hamstring the " + monster.species + " with your " + weap.type + ", bringing it to its knees, where a clean horizontal sweep ends its life.",
		"The " + monster.species + " ignores you for a moment and begins to play a game. After failing to get the high score the monster simply falls over dead. However, you're not above taking credit for things."
	];

//Critical messages
	var critMsg = [
		"The " + monster.species + " lets loose one final roar, shaking the earth and rustling the trees. Unshaken, you side step the slow charge, and slide your " + weap.type + " cleanly through. There is a moment when the " + monster.species + " is whole, but it passes, as it explodes into like eighteen bajillion hunks of splatting gore! FUCK YEAH <B> <I> <U> CRITICAL!!!</u></i></b>",
		hero.fName + "'s limit gauge is full! <br>" + hero.fName + " whips around their " + weap.type + " like some grand windmill doing ALL of the damage. The " + monster.species + " is beaten to something that best resembles goo. YEP THAT'S A <B> <I> <U> CRITICAL!!!</u></i></b>",
		"The lights dim around you as power flows into you from the environment. You hold out your " + weap.type + " to channel the energy coursing through you. The " + monster.species + "'s eyes grow saucer wide as the glow gleams off the whites. There aren't even ashes left when you are done. <B> <I> <U> CRITICAL!!!</u></i></b>",	
		"You toss your " + weap.type + " into the air with a casual flip. You check a few messages on your phone before round-house kicking the " + weap.type + " into the  " + monster.species + "'s throat. <B> <I> <U> CRITICAL!!!</u></i></b>",
		"You swing your " + weap.type + " in long arcs, negligently parrying a flurry of blows from the " + monster.species + ". As it tires, you begin to draw blood with every slice. A little at first, but then pools of it are collecting at the " + monster.species + "'s feet. You don't know when it died, and you're not sure it did either. <B> <I> <U> CRITICAL!!!</u></i></b>",	
		"Using your black Material, you summon ASTEROID! The " + monster.species + " dutifully sits through about ten minutes of animation and build-up before taking a mind-bending amount of damage. <B> <I> <U> CRITICAL!!!</u></i></b>",
		"You stab the " + monster.species + " with your " + weap.type + " and watch as the blood slowly rolls over the scuffs and scratches in the " + weap.material + " filling them, pooling, oozing life over the length of the " + weap.type + "<B> <I> <U> CRITICAL!!!</u></i></b>",
		"After sufficently damaging the  " + monster.species + " you insist that it help you with some especially difficult homework. After complimenting your swordsmanship, the " + monster.species + " agrees. <B> <I> <U> CRITICAL!!!</u></i></b>",
		"*One hour cutscene* <B> <I> <U> CRITICAL!!!</u></i></b>",
		"You invite the " + monster.species + " over for a holiday meal, but you poison the turkey and literally spike the wine. <B> <I> <U> SNEAK ATTACK CRITICAL!!!</u></i></b> ... wait... no... is that cool?"
	];
	if (monster.HP <= 0)
		{
			statDraw();
			if (monster.HP < ((monster.Str + monster.Def)*-1))
			{
				outputW.innerHTML+= "<br>" + critMsg[Math.floor(Math.random() * critMsgCount)] + "<br>You kill the " + monster.species +". <br>You gain some fame.";
			}
			else
			{
				outputW.innerHTML+= "<br>" + vicMsg[Math.floor(Math.random() * vicMsgCount)] + "<br>You kill the " + monster.species +". <br>You gain some fame.";
			}
			if (quest.dungeon == true)
			{
				//put next room code here.
			}
			else
			{
				monCheck("uber");
				monCheck("quest");
				monCheck("equip");
				monCheck("crowd");
			}
		}
	else
		{
			fightBack();
		}
	var elem = document.getElementById("window");
	elem.scrollTop = elem.scrollHeight;
}

function fightBack()
{
var distanceX = Math.abs(hero.x - monster.x);
var distanceY = Math.abs(hero.y - monster.y);
if (distanceX <= 1 && distanceY <= 1)
{
	var atkSuc = Math.floor(Math.random()*calcSpd) + 1;
	if (atkSuc < monster.Acc) // the monster hits
	{
		if (monster.weapBool == false)
		{
			var atkStep1 = monster.Str + monster.Spd;
			var atkStep2 = Math.floor(Math.random()*atkStep1) + 1;
			var monsterATK = atkStep2 - hero.Def;
			if (monsterATK < 1) //if the attack doesn't do any damage
			{
				outputW.innerHTML+="<br>The " + monster.species + " hits you, but it's barely a glancing blow.";
			}
			else //if the attack does
			{
				var HPrecalc = hero.curHP - monsterATK;
				hero.curHP = HPrecalc;
				outputW.innerHTML+="<br>The " + monster.species + monAtkMsg[Math.floor(Math.random()*monAtkMsgCount)] + ", " + monDmgMsg[Math.floor(Math.random()*monDmgMsgCount)] + " you, doing<i>[<span style='color:red'>" + monsterATK + "</span>]</i> points of damage.";
				hpDraw();
			}
		}
		else
		{
			var atkStep1 = monster.Spd * monWeap.Atk;
			var atkStep2 = atkStep1 + monster.Str;
			var atkStep3 = Math.floor(Math.random()*atkStep2) + 1;
			var monsterATK = atkStep3 - hero.Def;
			if (monsterATK < 1) //if the attack doesn't do any damage
			{
				outputW.innerHTML+="</br>The " + monster.species + " hits you, but it's barely a glancing blow.";
			}
			else //if the attack does
			{
				if (monWeap.pBool == true && hero.poisonBool == false)
				{
					var pChance = Math.floor(Math.random()*5);
					if (pChance == 2)
					{
						hero.poisonBool = true;
					}
				}
				var HPrecalc = hero.curHP - monsterATK;
				hero.curHP = HPrecalc;
				outputW.innerHTML+="</br>The " + monster.species + monArmAtkMsg[Math.floor(Math.random()*monArmAtkMsgCount)] + monWeap.type + ", " + monDmgMsg[Math.floor(Math.random()*monDmgMsgCount)] + " you, doing <i>[<span style='color:red'>" + monsterATK + "</span>]</i> points of damage.";
				hpDraw();
			}
		}
	}
	else // the monster misses
	{
		outputW.innerHTML+="<br>The " + monster.species + " misses.";
	}
	var elem = document.getElementById("window");
	elem.scrollTop = elem.scrollHeight;
}
else
{
wWrite("Error with positioning" , false)
worldTurn();
}
worldTurn();
}

function changePositions(person) //change the coordinates of an object while also checking for collisions between objects and applying force as needed.
{
	if (person == 1)
	{
		person = "hero";
	}
	else if (person == 2)
	{
		person = "monster";
	}
	if (this[person].y > 0 && this[person].futureY > 0)//applies gravity.
	{
		this[person].futureY = this[person].futureY - 1;
	}
	this[person].prevX = this[person].x;
	this[person].x = this[person].futureX;
	this[person].prevY = this[person].y;
	this[person].y = this[person].futureY;
	if (person == hero)
	{
		otherPerson = "monster";
	}
	else
	{
		otherPerson = "hero";
	}
	var slope = (this[person].x - this[person].prevX) / (this[person].y - this[person].prevY);
	var xIntercept = ((slope * this[person].x) - this[person].y) * -1;
	var adjustedX = this[person].x;
	var adjustedPrevX = this[person].prevX;
	if (adjustedX < 0)
	{
		adjustedX = adjustedX * -1;
	}
	if (adjustedPrevX < 0)
	{
		adjustedPrevX = adjustedPrevX * -1;
	}
	if (this[otherPerson].y == (slope * this[otherPerson].x) + xIntercept) //potential collision occurs
	{
		if (adjustedX < adjustedPrevX && adjustedX < this[otherPerson].x && this[otherPerson].x < adjustedPrevX)//actual collision occurs
		{
			this[person].x = this[otherPerson].x;
			this[person].y = this[otherPerson].y;
			this[otherPerson].futureX = this[person].futureX;
			this[otherPerson].futureY = this[person].futureY;
			wWrite("There is a collision!", false);
		}
		else if (adjustedX > adjustedPrevX && adjustedX > this[otherPerson].x && this[otherPerson].x > adjustedPrevX)
		{
			this[person].x = this[otherPerson].x;
			this[person].y = this[otherPerson].y;
			this[otherPerson].futureX = this[person].futureX;
			this[otherPerson].futureY = this[person].futureY;
			wWrite("There is a collision!", false);
		}
	}
	if (person == "hero")
	{
		fightBack();
	}
	else if (person == "monster")
	{
		worldTurn();
	}
}

function moveForward(person)//This function is not moving people correctly. Is not interfering with combat at the moment, but movement does not work.
{
	if (person == 1)
	{
		person = "hero";
		wWrite("<br>You rush forward towards the " + monster.species + "." , false);
		this[person].futureX = this[person].futureX + Math.floor((this[person].Spd + this[person].Str) / this[person].weight);
	}
	else if (person == 2)
	{
		person = "monster";
		wWrite("<br>The " + monster.species + " runs towards you." , false);
		this[person].futureX = this[person].futureX - Math.floor((this[person].Spd + this[person].Str) / this[person].weight);
	}
	if (person == "hero")
	{
		changePositions(1);
	}
	else if (person == "monster")
	{
		changePositions(2);
	}
}

function moveBackward(person)//This function is not moving people correctly. Is not interfering with combat at the moment, but movement does not work.
{
	if (person == 1)
	{
		person = "hero";
		wWrite("<br>You back away from the " + monster.species + "." , false);
		this[person].futureX = this[person].futureX - Math.floor((this[person].Spd + this[person].Str) / this[person].weight);
	}
	else if (person == 2)
	{
		person = "monster";
		wWrite("<br>The " + monster.species + " backs away from you." , false);
		this[person].futureX = this[person].futureX + Math.floor((this[person].Spd + this[person].Str) / this[person].weight);
	}
	if (person == "hero")
	{
		changePositions(1);
	}
	else if (person == "monster")
	{
		changePositions(2);
	}
}

function worldTurn()
{
	if (set.weather == "storming")
	{
		weatherDraw("weather" , "storm");
		var lightChance = Math.floor(Math.random()*7);
		var lightVictim = Math.floor(Math.random()*4);
		var lightDam = Math.floor(Math.random()*hero.totalHP)+1;
		if (lightChance == 4 || lightChance == 2)
		{
			if (lightVictim == 1)
			{
				outputW.innerHTML+="<br>You are struck by lightning, doing <i>[<span style='color:red'>" + lightDam + "</span>]</i> points of damage!";
				hero.curHP = hero.curHP - lightDam;
			}
			else if (lightVictim == 2)
			{
				monster.HP = monster.HP - lightDam;
				outputW.innerHTML+="<br>The " + monster.species + " is struck by lightning, doing <i>[<span style='color:red'>" + lightDam + "</span>]</i> points of damage!<br>The " + monster.species + " " + atkMonReactMsg[Math.floor(Math.random()*atkMonReactMsgCount)];
				if (monster.material == "Iron" || monster.material == "Steel" || monster.material == "Copper" || monster.material == "Gold" || monster.material == "Rust" || monster.material == "Stamped Metal" || monster.material == "Pewter")
				{
					monster.electrifiedBool = true;
					outputW.innerHTML+="<br>Electric currents flick in blue serpintine streaks across the " + monster.species + "'s " + monster.material + " skin.";
				}
				else if (monster.material == "Wood" || monster.material == "Bread" || monster.material == "Turkey" || monster.material == "Plastic" || monster.material == "Wool" || monster.material == "Flannel")
				{
					monster.fireBool = true;
					outputW.innerHTML+="<br>The lightning has spread fire across the " + monster.species + "'s " + monster.material + " skin.";
				}
			}
			else if (lightVictim == 4 && set.bystanderCount > 0)
			{
				outputW.innerHTML+="<br>Lightning strikes a poor innocent bystander, killing them.";
				set.bystanderCount = set.bystanderCount - 1;
			}
			else
			{
				outputW.innerHTML+="<br>Lightning strikes a nearby " + set.dressing + "!";
				if (set.canBurnBool == true && set.onFire == false)
				{
					outputW.innerHTML+="<br>The " + set.dressing + " catches fire!";
					set.onFire = true;
				}
			}
			weatherDraw("effect" , "bolt");
		}
	}
	if (set.onFire == true)
	{
		drawWeather("effect" , "fire");
		var fireDam = Math.floor(Math.random()*hero.curHP) + 1;
		outputW.innerHTML+="<br>The raging fire around you and the " + monster.species + " burns you both, doing <i>[<span style='color:red'>" + fireDam + "</span>]</i> points of damage.";
		hero.curHP = hero.curHP - fireDam;
		monster.HP = monster.HP - fireDam;
		var innocentStupidity = Math.floor(Math.random()*10);
		if (innocentStupidity > 4 && set.bystanderCount > 0)
		{
			var deathToll = Math.floor(Math.random()*set.bystanderCount) + 1;
			outputW.innerHTML+="<br> " + deathToll + " innocent bystanders are consumed in the inferno!";
			set.bystanderCount = set.bystanderCount - deathToll;
		}
		if (hero.onFire == false)
		{
			var fireSpread = Math.floor(Math.random()*8);
			if (fireSpread == 6)
			{
				outputW.innerHTML+="<br>You burst into flames.";
				hero.onFire = true;
			}
		}
		if (set.weather == "raining" || set.weather == "snowing" || set.weather == "storming")
		{
			var squelchChance = Math.floor(Math.random()*8);
			if (squelchChance == 5)
			{
				outputW.innerHTML+="<br>The fire steams and sputters out.";
				hero.onFire = false;
				monster.fireBool = false;
				set.onFire = false;
			}
		}
	}
	if (set.outsideBool == true)
	{
		outputW.innerHTML+="<br>It is " + set.weather + ".";
		var windCalc = Math.floor(Math.random()*10);
		if (windCalc == 5)
		{
			outputW.innerHTML+="<br>The wind is blowing feircely.";
			weatherDraw("effect" , "wind");
			if (monster.fireBool == true && set.canBurnBool == true && set.onFire == false)
			{
				if (set.weather != "raining" || set.weather != "snowing")
				{
					var fireSpread = Math.floor(Math.random()*15);
				}
				else
				{
					var fireSpread = Math.floor(Math.random()*25);
				}
				if (fireSpread = 11)
				{
					outputW.innerHTML+="<br>The fire spreads from the " + monster.species + " to the nearby " + set.dressing + "s.";
					set.onFire = true;
				}
			}
		}
		else
		{
			weatherDraw("effect" , "nil");
		}
	}
	if (monster.fireBool == true)
	{
		var statusDam = Math.floor(Math.random() *((monster.Str * monster.Spd) - monster.Def));
		monster.HP = monster.HP - statusDam;
		outputW.innerHTML+="<br>The " + monster.species + " is on fire. The fire does <i>[<span style='color:red'>" + statusDam + "</span>]</i> points of damage.";
	}
	if (hero.onFire == true)
	{
		var statusDam = Math.floor(Math.random() *((calcStr * calcSpd) - calcDef));
		hero.curHP = hero.curHP - statusDam;
		outputW.innerHTML+="<br>You are on fire. The fire does <i>[<span style='color:red'>" + statusDam + "</span>]</i> points of damage.";
	}
	if (monster.poisonBool == true)
	{
		var statusDam = Math.floor(Math.random() *((monster.Str * monster.Def) - monster.Spd));
		monster.HP = monster.HP - statusDam;
		outputW.innerHTML+="<br>The " + monster.species + " is poisoned. The poison does <i>[<span style='color:red'>" + statusDam + "</span>]</i> points of damage.";
	}
	if (hero.poisonBool == true)
	{
		var statusDam = Math.floor(Math.random() *((calcStr * calcDef) - calcSpd));
		hero.curHP = hero.curHP - statusDam;
		outputW.innerHTML+="<br>You are poisoned. The poison does <i>[<span style='color:red'>" + statusDam + "</span>]</i> points of damage.";
	}
	hpDraw();
	combatMenu();
	var elem = document.getElementById("window");
	elem.scrollTop = elem.scrollHeight;
}

function rest()
{
	hero.fame = hero.fame - 1;
	hero.curHP = hero.totalHP;
	hero.poisonBool = false;
	hero.onFire = false;
	hero.curMana = hero.totalMana;
	house();
}

function lvlUp()
{
	outputW.innerHTML="<b>Your Current Stats:</b><br>Strength: " + hero.Str + "<br>Speed: "+ hero.Spd + "<br>Defense: " + hero.Def + "<br>Accuracy: " + hero.Acc +"<br><br>You've learned something from this victory! What is it?";
	if (hero.dogBool == true)
	{
		outputW.innerHTML+=" <i> DOG: Whenever you win a combat on your adventure, you gain fame for your family and the ability to 'learn' something to boost your stats with by one point. [There are other ways to boost stats outside of winning combat, but they are riskier]</i>";
	}
	menu.innerHTML="<button  class='button' onclick='statBoostStr()'>Strength</button>";
	menu.innerHTML+="<button  class='button' onclick='statBoostSpd()'>Speed</button>";
	menu.innerHTML+="<button  class='button' onclick='statBoostDef()'>Defense</button>";
	menu.innerHTML+="<button  class='button' onclick='statBoostAcc()'>Accuracy</button>";
	hero.kills = hero.kills + 1;
	hero.curMana = hero.totalMana
}

function statBoostStr()
{
	hero.Str = hero.Str + (Math.floor(Math.random()*monster.Str) + 1);
	hero.totalHP = hero.Str * hero.Def;
	hero.curHP = hero.totalHP;
	statDraw();
	hpDraw();
	if (dogFightBool == true)
	{
		dogFightBool = false;
		rivalEncounter();
	}
	else
	{
		house();
	}
}

function statBoostSpd()
{
	hero.Spd = hero.Spd + (Math.floor(Math.random()*monster.Spd) + 1);
	hero.curHP = hero.totalHP;
	statDraw();
	hpDraw();
	if (dogFightBool == true)
	{
		dogFightBool = false;
		rivalEncounter();
	}
	else
	{
		house();
	}
}

function statBoostDef()
{
	hero.Def = hero.Def + (Math.floor(Math.random()*monster.Def) + 1);
	hero.totalHP = hero.Str * hero.Def;
	hero.curHP = hero.totalHP;
	statDraw();
	hpDraw();
	if (dogFightBool == true)
	{
		dogFightBool = false;
		rivalEncounter();
	}
	else
	{
		house();
	}
}

function statBoostAcc()
{
	hero.Acc = hero.Acc + (Math.floor(Math.random()*monster.Acc) + 1);
	hero.curHP = hero.totalHP;
	statDraw();
	hpDraw();
	if (dogFightBool == true)
	{
		dogFightBool = false;
		rivalEncounter();
	}
	else
	{
		house();
	}
}

function fuck()
{
	hero.childBool = true;
	child.gender = Math.floor(Math.random()*2) + 1;
	hero.i = hero.i + 1;
	if (child.gender==1)
	{
		child.title = titlesFemale[Math.floor(Math.random()*titlesCountF)];
		child.genderText = "female";
	}
	else
	{
		child.title = titlesMale[Math.floor(Math.random()*titlesCountM)];
		child.genderText = "male";
	}
	child.fName = namesFirst[Math.floor(Math.random()*fNameCount)];
	child.suffix = hero.suffix;
	child.lName = hero.lName;
	var failChance = Math.floor(Math.random()*5) + 1;
	if (failChance <= hero.dickMoves)
	{
		child.Str = Math.floor(Math.random()*10) + 1;
		child.Spd = Math.floor(Math.random()*10) + 1;
		child.Def = Math.floor(Math.random()*10) + 1;
		child.Acc = Math.floor(Math.random()*10) + 1;
		child.failure = true;
	}
	else
	{
		child.Str = Math.floor(Math.random()*10) + hero.Str;
		child.Spd = Math.floor(Math.random()*10) + hero.Spd;
		child.Def = Math.floor(Math.random()*10) + hero.Def;
		child.Acc = Math.floor(Math.random()*10) + hero.Acc;
		child.failure = false;
	}
	child.totalHP = child.Str + child.Def;
	child.curHP = child.totalHP;
	child.days = 0;
	child.Age = Math.floor(Math.random()*199) + 1;
	partner.gender = Math.floor(Math.random()*2) + 1;
	if (partner.gender==1)
	{
		partner.title = titlesFemale[Math.floor(Math.random()*10)];
		partner.genderText = "female";
	}
	else
	{
		partner.title = titlesMale[Math.floor(Math.random()*10)];
		partner.genderText = "male";
	}
	var suffixBool = Math.floor(Math.random()*2);
	if (suffixBool == 0)
	{
		partner.suffix = " ";
	}
	else
	{
		partner.suffix = suffix[Math.floor(Math.random()*suffixCount)];
	}
	partner.fName = namesFirst[Math.floor(Math.random()*fNameCount)];
	partner.lName=namesLast[Math.floor(Math.random()*lNameCount)];
	outputW.innerHTML="In a drunken stupor, you hooked up with an attractive " + partner.genderText + " by the name of " + partner.title + " " + partner.fName + " " + partner.suffix + partner.lName + " in the night. You are now a proud parent!";
	if (child.genderText == "male")
	{
		outputW.innerHTML+="<br>Your son " + child.fName + " " + child.suffix + child.lName + " has been born!";
		familyTree.push("<br>" + hero.fName + " gave birth to a male by the name of " + child.fName + " at age " + hero.Age);
	}
	else
	{
		outputW.innerHTML+="<br>Your daughter " + child.fName + " " + child.suffix + child.lName + " has been born!";
		familyTree.push("<br>" + hero.fName + " gave birth to a female by the name of " + child.fName + " at age " + hero.Age);
	}
	hero.fame = hero.fame - 2;
	menu.innerHTML="<button  class='button' onclick='house()'>Continue.</button>";
	insper.push ("the time " + hero.fName + " gave birth to " + child.fName);
	insperCount = insperCount + 1;
}

function trainKid() //Train your kid and make them into something you can be proud of.
{
	var preStr = Math.floor(Math.random()*10) + hero.Str;
	var preSpd = Math.floor(Math.random()*10) + hero.Spd;
	var preDef = Math.floor(Math.random()*10) + hero.Def;
	var preAcc = Math.floor(Math.random()*10) + hero.Acc;
	var postStr = child.Str + preStr;
	var postSpd = child.Spd + preSpd;
	var postDef = child.Def + preDef;
	var postAcc = child.Acc + preAcc;
	child.Str = postStr;
	child.Spd = postSpd;
	child.Def = postDef;
	child.Acc = postAcc;
	if (child.failure == true)
	{
		child.failure = false;
	}
	hero.fame = hero.fame - 10;
	outputW.innerHTML="You spend some time training " + child.fName + ".";
	if (hero.dogBool == true)
	{
		outputW.innerHTML+=" <i> DOG: Training makes your child far more physical, and boosts their stats too!</i>";
	}
	menu.innerHTML="<button class='button' onclick='house()'>Continue.</button>";
}

function inherit() //Your kid becomes you... BECOMES YOU.
{
	hero.gender = child.gender;
	if (hero.gender = 1)
	{
		hero.genderText = "female";
	}
	else
	{
		hero.genderText = "male";
	}
	insper.push("the death of " + hero.fName);
	insperCount = insperCount + 1;
	hero.title = child.title;
	hero.fName = child.fName;
	hero.poisonBool = false;
	hero.Str = child.Str;
	hero.Spd = child.Spd;
	hero.Def = child.Def;
	hero.Acc = child.Acc;
	hero.totalHP = child.totalHP;
	hero.curHP = child.curHP;
	hero.days = child.days;
	hero.Age = child.Age;
	hero.childBool = false;
	hero.generation = hero.generation + 1;
	hero.fame = hero.generation;
	hero.dickMoves = 0;
	hero.kills = 0 ;
	hero.i = hero.i + 1;
	rivalGen()
	familyTree.push("<br>|------------------------------|")
	locationDisplay.innerHTML="<i>Your Funeral</i>";
	outputW.innerHTML="It's strange to see your own funeral, but the strangest part is watching your child standing over your grave, hand clenched into fist... " + hero.fName + " runs off into the gray rain.<br>Years pass.";
	menu.innerHTML="<button class='button' onclick='house()'>Continue.</button>";
}

function sacrifice() //Your kid becomes you... you consume them.
{
	hero.Str = hero.Str + child.Str;
	hero.Spd = hero.Spd + child.Spd;
	hero.Def = hero.Def + child.Def;
	hero.Acc = hero.Acc + child.Acc;
	hero.i = hero.i + 1;
	insper.push("the sacrifice of " + child.fName);
	insperCount = insperCount + 1;
	hero.totalHP = hero.Str * hero.Def;
	hero.curHP = hero.totalHP;
	hero.childBool = false;
	hero.fame = hero.fame - 10;
	hero.dickMoves = hero.dickMoves + 100;
	familyTree.push("<br>At age " + hero.Age + " years " + hero.fName + " sacrificed " + child.fName);
	locationDisplay.innerHTML="<i>Your Altar of Abraham.</i>";
	outputW.innerHTML="As the ancient texts instruct, you drag " + child.fName + " to the altar.</br>Candle-light flickers off the knife as you take " + child.fName + "'s life.</br>Hey, this makes you a total dick, you know that right? Not cool.";
	if (hero.dogBool == true)
	{
	outputW.innerHTML+=" <i> DOG: You have made the universe very angry with you. You will find it very hard for you to be lucky in anything from this point on. However, your children will not have to suffer your cursed luck.</i>";
	}
	var demonAp = Math.floor(Math.random()*500) + 1;
	if (demonAp <= hero.dickMoves)
	{
		menu.innerHTML="<button class='button' onclick='demonEncounter()'>Continue.</button>";
	}
	else
	{
		menu.innerHTML="<button class='button' onclick='house()'>Continue.</button>";
	}
}

function adoption()
{
	locationDisplay.innerHTML="<i>The Orphanage</i>";
	outputW.innerHTML="You drag " + child.fName + " kicking and screaming to the orphanage. Hopefully they'll find a nice home, but probably not.";
	hero.i = hero.i + 1;
	insper.push("the long bitter look " + child.fName + " gave " + hero.fName + " as they were given up for adoption.");
	insperCount = insperCount + 1;
	familyTree.push("<br>At age " + hero.Age + " years " + hero.fName + " put " + child.fName + " up for adoption");
	if (hero.dogBool == true)
	{
		outputW.innerHTML+=" <i> DOG: Be careful. The universe keeps track of any affronts against children and ticks them against your luck.</i>";
	}
	hero.childBool = false;
	hero.fame = hero.fame - 5;
	menu.innerHTML="<button class='button' onclick='house()'>Continue.</button>";
	hero.dickMoves = hero.dickMoves + 1;
}

function enchantAcc()
{
	monGenStr = monGenStr * 10;
	monGenSpd = monGenSpd * 10;
	monGenDef = monGenDef * 10;
	monGenAcc = monGenAcc / 10;
	monUGenStr = monUGenStr * 10;
	monUGenSpd = monUGenSpd * 10;
	monUGenDef = monUGenDef * 10;
	monUGenAcc = monUGenAcc / 10;
	demGenStr = demGenStr * 10;
	demGenSpd = demGenSpd * 10;
	demGenDef = demGenDef * 10;
	demGenAcc = demGenAcc / 10;
	demUGenStr = demUGenStr * 10;
	demUGenSpd = demUGenSpd * 10;
	demUGenDef = demUGenDef * 10;
	demUGenAcc = demUGenAcc / 10;
	rivalGenStr = rivalGenStr * 10;
	rivalGenSpd = rivalGenSpd * 10;
	rivalGenDef = rivalGenDef * 10;
	rivalGenAcc = rivalGenAcc / 10;
	outputW.innerHTML+="You don't feel anything.";
}

function enchantDef()
{
	monGenStr = monGenStr * 10;
	monGenSpd = monGenSpd * 10;
	monGenDef = monGenDef / 10;
	monGenAcc = monGenAcc * 10;
	monUGenStr = monUGenStr * 10;
	monUGenSpd = monUGenSpd * 10;
	monUGenDef = monUGenDef / 10;
	monUGenAcc = monUGenAcc * 10;
	demGenStr = demGenStr * 10;
	demGenSpd = demGenSpd * 10;
	demGenDef = demGenDef / 10;
	demGenAcc = demGenAcc * 10;
	demUGenStr = demUGenStr * 10;
	demUGenSpd = demUGenSpd * 10;
	demUGenDef = demUGenDef / 10;
	demUGenAcc = demUGenAcc * 10;
	rivalGenStr = rivalGenStr * 10;
	rivalGenSpd = rivalGenSpd * 10;
	rivalGenDef = rivalGenDef / 10;
	rivalGenAcc = rivalGenAcc * 10;
	outputW.innerHTML+="You don't feel anything.";
}

function enchantSpd()
{
	monGenStr = monGenStr * 10;
	monGenSpd = monGenSpd / 10;
	monGenDef = monGenDef * 10;
	monGenAcc = monGenAcc * 10;
	monUGenStr = monUGenStr * 10;
	monUGenSpd = monUGenSpd / 10;
	monUGenDef = monUGenDef * 10;
	monUGenAcc = monUGenAcc * 10;
	demGenStr = demGenStr * 10;
	demGenSpd = demGenSpd / 10;
	demGenDef = demGenDef * 10;
	demGenAcc = demGenAcc * 10;
	demUGenStr = demUGenStr * 10;
	demUGenSpd = demUGenSpd / 10;
	demUGenDef = demUGenDef * 10;
	demUGenAcc = demUGenAcc * 10;
	rivalGenStr = rivalGenStr * 10;
	rivalGenSpd = rivalGenSpd / 10;
	rivalGenDef = rivalGenDef * 10;
	rivalGenAcc = rivalGenAcc * 10;
	outputW.innerHTML+="You don't feel anything.";
}

function enchantStr()
{
	monGenStr = monGenStr / 10;
	monGenSpd = monGenSpd * 10;
	monGenDef = monGenDef * 10;
	monGenAcc = monGenAcc * 10;
	monUGenStr = monUGenStr / 10;
	monUGenSpd = monUGenSpd * 10;
	monUGenDef = monUGenDef * 10;
	monUGenAcc = monUGenAcc * 10;
	demGenStr = demGenStr / 10;
	demGenSpd = demGenSpd * 10;
	demGenDef = demGenDef * 10;
	demGenAcc = demGenAcc * 10;
	demUGenStr = demUGenStr / 10;
	demUGenSpd = demUGenSpd * 10;
	demUGenDef = demUGenDef * 10;
	demUGenAcc = demUGenAcc * 10;
	rivalGenStr = rivalGenStr / 10;
	rivalGenSpd = rivalGenSpd * 10;
	rivalGenDef = rivalGenDef * 10;
	rivalGenAcc = rivalGenAcc * 10;
	outputW.innerHTML+="You don't feel anything.";
}

function divinePunishment()
{
	hero.dickMoves = 666;
	monGenStr = monGenStr / 10;
	monGenSpd = monGenSpd / 10;
	monGenDef = monGenDef / 10;
	monGenAcc = monGenAcc / 10;
	monUGenStr = monUGenStr / 10;
	monUGenSpd = monUGenSpd / 10;
	monUGenDef = monUGenDef / 10;
	monUGenAcc = monUGenAcc / 10;
	demGenStr = demGenStr / 10;
	demGenSpd = demGenSpd / 10;
	demGenDef = demGenDef / 10;
	demGenAcc = demGenAcc / 10;
	demUGenStr = demUGenStr / 10;
	demUGenSpd = demUGenSpd / 10;
	demUGenDef = demUGenDef / 10;
	demUGenAcc = demUGenAcc / 10;
	rivalGenStr = rivalGenStr / 10;
	rivalGenSpd = rivalGenSpd / 10;
	rivalGenDef = rivalGenDef / 10;
	rivalGenAcc = rivalGenAcc / 10;
}

function repent()
{
	hero.dickMoves = 0;
	monGenStr = monGenStr * 10;
	monGenSpd = monGenSpd * 10;
	monGenDef = monGenDef * 10;
	monGenAcc = monGenAcc * 10;
	monUGenStr = monUGenStr * 10;
	monUGenSpd = monUGenSpd * 10;
	monUGenDef = monUGenDef * 10;
	monUGenAcc = monUGenAcc * 10;
	demGenStr = demGenStr * 10;
	demGenSpd = demGenSpd * 10;
	demGenDef = demGenDef * 10;
	demGenAcc = demGenAcc * 10;
	demUGenStr = demUGenStr * 10;
	demUGenSpd = demUGenSpd * 10;
	demUGenDef = demUGenDef * 10;
	demUGenAcc = demUGenAcc * 10;
	rivalGenStr = rivalGenStr * 10;
	rivalGenSpd = rivalGenSpd * 10;
	rivalGenDef = rivalGenDef * 10;
	rivalGenAcc = rivalGenAcc * 10;
}

function buildDesk()
{
	hero.fame = hero.fame - 20;
	desk.bool = true;
	house();
}

function atDesk()
{
	locationDisplay.innerHTML="<i>At Your Desk</i>";
	wWrite("Sitting at your desk, you can feel those creative juices flowing. <br>You have " + hero.i + " points of inspiration")
	mClear();
	writeStatDraw();
	if (hero.i >= 1){
		mWrite('write1', 'Write a novel (1i).', false);
	}
	if(gpx_idle != undefined && (hero.fame > 100 || gpx_idle.seen == true)){
		gpx_idle.seen = true;
		mWrite('gpx_idle.buyMenu', 'Hire help.', false);
	}
	
	
	mWrite('house', 'Get up.', false);
}

function write1()
{
	novel.genre = genre[Math.floor(Math.random() * genreCount)];
	var success = Math.floor(Math.random() * desk.level);
	var difficulty = (desk.level + success) / 2;
	hero.i = hero.i - 1;
	if(success != difficulty && desk.level > 0)
	{
		write2()
	}
	else if(desk.level == 0)
	{
		write2()
	}
	else
	{
		outputW.innerHTML="Your writing just... it just isn't going anywhere.";
		menu.innerHTML="<button class='button' onclick='atDesk()'>Continue.</button>";}
}

function write2()
{
	var titleStruct = [
		hero.fName + " and the " + weapType[Math.floor(Math.random()*weapTypeCount) + 1] + ".",
		weapType[Math.floor(Math.random()*weapTypeCount) + 1],
		namesFirst[Math.floor(Math.random()*fNameCount)],
		namesLast[Math.floor(Math.random()*lNameCount)],
		namesFirst[Math.floor(Math.random()*fNameCount)] + " and " + namesFirst[Math.floor(Math.random()*fNameCount)],
		"The " + monSpec[Math.floor(Math.random()*monSpecCount)] + " and the " + armTypes[Math.floor(Math.random()*armTypesCount)],
		"The " + material[Math.floor(Math.random()*materialCount)] + " " + monSpec[Math.floor(Math.random()*monSpecCount)]
	];
	novel.title = titleStruct[Math.floor(Math.random() * titleStructCount)];
	outputW.innerHTML= "You've penned your brand new " + novel.genre + ": <i><b>" + novel.title + "</b></i><br>";
	outputW.innerHTML+="</br>The book seems to be about " + insper[Math.floor(Math.random() * insperCount)] + ".";
	novel.rate1 = Math.floor(Math.random() * desk.diction) * desk.style + 1;
	novel.rate2 = (Math.floor(Math.random() * desk.poetics) * desk.style + 1);
	novel.rate3 = (Math.floor(Math.random() * desk.form) * desk.style + 1);
	novel.avgRate = Math.round((novel.rate1 + novel.rate2 + novel.rate3) / 3);
	outputW.innerHTML+= "<br>Modern Novelist rated the book at " + novel.rate1 + ", The NewPork Times rated the book at " + novel.rate2 + ", and finally The Parfait, the jokesters, rated it at " + novel.rate3 + ".<br>Your average rating is " + novel.avgRate + ".";
	menu.innerHTML="<button class='button' onclick='deskLvl()'>Continue.</button>";
	hero.days = hero.days + 1;
	familyTree.push("<br>" + hero.fName + " wrote " + novel.title + " at age " + hero.Age);
	ereaderNames.push("The novel " + novel.title + " by " + hero.fName + " " + hero.suffix + hero.lName);
}

function deskLvl()
{
	menu.innerHTML="<button class='button' onclick='dictionLvl()'>Diction</button>";
	menu.innerHTML+="<button class='button' onclick='poeticsLvl()'>Poetics</button>";
	menu.innerHTML+="<button class='button' onclick='formLvl()'>Form</button>";
	menu.innerHTML+="<button class='button' onclick='styleLvl()'>Style</button>";
	wWrite("<b>Your Current Stats:</b><br>Diction: " + desk.diction + "<br>Poetics: " + desk.poetics + "<br>Form: " + desk.form + "<br>Style: " + desk.style + "<br><br>", true);
	outputW.innerHTML+="This novel has taught you something, what is it?";
}

function dictionLvl()
{
	desk.diction = desk.diction + (Math.floor(Math.random()*5) + 1);
	desk.level = desk.level + 1;
	hero.fame = hero.fame + novel.avgRate;
	atDesk();
}

function poeticsLvl()
{
	desk.poetics = desk.poetics + (Math.floor(Math.random()*5) + 1);
	desk.level = desk.level + 1;
	hero.fame = hero.fame + novel.avgRate;
	atDesk();
}

function formLvl()
{
	desk.form = desk.form + (Math.floor(Math.random()*5) + 1);
	desk.level = desk.level + 1;
	hero.fame = hero.fame + novel.avgRate;
	atDesk();
}

function styleLvl()
{
	desk.style = desk.style + (Math.floor(Math.random()*5) + 1);
	desk.level = desk.level + 1;
	hero.fame = hero.fame + novel.avgRate;
	atDesk();
}

//Option Variables
var fontPX = 100;
var dWindowWidth = 550;
var dWindowHeight = 450;
var dMenuWidth = 790;
var dMenuHeight = 450;
var dLocationWidth = 790;
var dContaintWidth = 800;
var defaultLayoutBool = true;

function options()
{
	outputW.innerHTML="";
	menu.innerHTML="<button class='button' onclick='increasefontsize()'>Larger Font</button>";
	menu.innerHTML+="<button class='button' onclick='decreasefontsize()'>Smaller Font</button>";
	/*if (defaultLayoutBool == true)
	{
		menu.innerHTML+="<button class='button' onclick='mobileLayout()'>Change to Mobile Layout</button>";
		menu.innerHTML+="<button class='button' onclick='wideScreenLayout()'>Change to Wide Screen Layout</button>";
	}
	else
	{
		menu.innerHTML+="<button style='padding:10px 15px;padding: 10px 15px;font-size:" + fontPX + "%' onclick='defaultLayout()'>Change to Default Layout</button>";
	}*/
	//menu.innerHTML+="<button style='padding:10px 15px;padding:10px 15px;font-size:" + fontPX + "%' onclick='colorBlue()'>Ice Theme</button>";
	//menu.innerHTML+="<button style='padding:10px 15px;padding:10px 15px;font-size:" + fontPX + "%' onclick='colorGreen()'>Classic Theme</button>";
	//menu.innerHTML+="<button style='padding:10px 15px;padding:10px 15px;font-size:" + fontPX + "%' onclick='colorBlackWhite()'>Paper Theme</button>";
	//menu.innerHTML+="<button style='padding:10px 15px;padding:10px 15px;font-size:" + fontPX + "%' onclick='colorWhiteBlack()'>Monochrome Theme</button>";
	menu.innerHTML+="<button style='padding:10px 15px;padding:10px 15px;font-size:" + fontPX + "%' onclick='house()'>Back to Game</button>";
}

function mobileLayout()
{
	outputW.style.height = "250px";
	outputW.style.width = "650px";
	menu.style.width = "890px";
	menu.style.height = "200px";
	locationDisplay.style.width = "890px";
	document.getElementById("characterSheet").style.height = "250px";
	document.getElementById("container").style.width = "900px";
	defaultLayoutBool = false;
	options();
}

function colorBlue()
{
	document.getElementById("drop").style.backgroundColor = "#000000";
	document.getElementById("container").style.backgroundColor = "#000000";
	locationDisplay.style.backgroundColor = "#000000";
	locationDisplay.style.color = "#99CCFF";
	outputW.style.backgroundColor = "#000000";
	outputW.style.color = "#99CCFF";
	menu.style.backgroundColor = "#000000";
	menu.style.color = "#99CCFF";
	menu.style.borderColor = "#99CCFF";
	document.getElementById("characterSheet").style.backgroundColor = "#000000";
	document.getElementById("characterSheet").style.color = "#99CCFF";
	document.getElementById("characterSheet").style.borderColor = "#99CCFF";
}

function colorGreen()
{
	document.getElementById("drop").style.backgroundColor = "#000000";
	document.getElementById("container").style.backgroundColor = "#000000";
	locationDisplay.style.backgroundColor = "#000000";
	locationDisplay.style.color = "#00FF00";
	outputW.style.backgroundColor = "#000000";
	outputW.style.color = "#00FF00";
	menu.style.backgroundColor = "#000000";
	menu.style.color = "#00FF00";
	menu.style.borderColor = "#00FF00";
	document.getElementById("characterSheet").style.backgroundColor = "#000000";
	document.getElementById("characterSheet").style.color = "#00FF00";
	document.getElementById("characterSheet").style.borderColor = "#00FF00";
}

function colorBlackWhite()
{
	document.getElementById("drop").style.backgroundColor = "#FFFFFF";
	document.getElementById("container").style.backgroundColor = "#FFFFFF";
	locationDisplay.style.backgroundColor = "#FFFFFF";
	locationDisplay.style.color = "#000000";
	outputW.style.backgroundColor = "#FFFFFF";
	outputW.style.color = "#000000";
	menu.style.backgroundColor = "#FFFFFF";
	menu.style.color = "#000000";
	menu.style.borderColor = "#000000";
	document.getElementById("characterSheet").style.backgroundColor = "#FFFFFF";
	document.getElementById("characterSheet").style.color = "#000000";
	document.getElementById("characterSheet").style.borderColor = "#000000";
}

function colorWhiteBlack()
{
	document.getElementById("drop").style.backgroundColor = "#000000";
	document.getElementById("container").style.backgroundColor = "#000000";
	locationDisplay.style.backgroundColor = "#000000";
	locationDisplay.style.color = "#FFFFFF";
	outputW.style.backgroundColor = "#000000";
	outputW.style.color = "#FFFFFF";
	menu.style.backgroundColor = "#000000";
	menu.style.color = "#FFFFFF";
	menu.style.borderColor = "#FFFFFF";
	document.getElementById("characterSheet").style.backgroundColor = "#000000";
	document.getElementById("characterSheet").style.color = "#FFFFFF";
	document.getElementById("characterSheet").style.borderColor = "#FFFFFF";
}

function wideScreenLayout()
{
	outputW.style.height = "450px";
	outputW.style.width = "850px";
	menu.style.width = "1090px";
	menu.style.height = "100px";
	locationDisplay.style.width = "1090px";
	document.getElementById("characterSheet").style.height = "450px";
	document.getElementById("container").style.width = "1100px";
	defaultLayoutBool = false;
	options();
}

function defaultLayout()
{
	outputW.style.height = "450px";
	outputW.style.width = "550px";
	menu.style.width = "790px";
	locationDisplay.style.width = "790px";
	document.getElementById("characterSheet").style.height = "450px";
	document.getElementById("container").style.width = "800px";
	defaultLayoutBool = true;
	options();
}

function increasefontsize()
{
	fontPX = fontPX + 10;
	outputW.style.fontSize=fontPX + "%";
	menu.style.fontSize=fontPX + "%";
	document.getElementById("characterSheet").style.fontSize=fontPX + "%";
	options();
}

function decreasefontsize()
{
	fontPX = fontPX - 10;
	outputW.style.fontSize=fontPX + "%";
	menu.style.fontSize=fontPX + "%";
	document.getElementById("characterSheet").style.fontSize=fontPX + "%";
	options();
}

function monCheck(type)
{
	if (type == "uber")
	{
		if (hero.weapBool == true)
		{
			wWrite("<br>Killing blow struck, you sheath your weapon.<br>" , false);
			equipWeap("unequip");
		}
		if (monster.Uber == true)
		{
			outputW.innerHTML+="<br>The world is a safer place without " + monster.name + " the " + monster.species + " in it. You've gained extra fame!";
			var fameAdd = 5;
			if(monster.HP <= -100){
				fameAdd *= 10;
				wWrite('<br>You obliterated them! (fame x 10)', false);
			}
			if(monster.HP <= -1000){
				fameAdd *= 10;
				wWrite('<br>You decimated them! (fame x 100)', false);
			}
			if(monster.HP <= -10000){
				fameAdd *= 10;
				wWrite('<br>You pulverized them! (fame x 1000)', false);
			}
			if(monster.HP <= -100000){
				fameAdd *= 10;
				wWrite('<br>You liquified them! (fame x 1000)', false);
			}
			if(monster.HP <= -1000000){
				fameAdd *= 10;
				wWrite('<br>You evaporated them! (fame x 10000)', false);
			}
			if(monster.HP <= -10000000){
				fameAdd *= 10;
				wWrite('<br>You atomized them! (fame x 100000)', false);
			}
			if(monster.HP <= -100000000){
				fameAdd *= 10;
				wWrite('<br>You completely erased them! (fame x 1000000)', false);
			}
			hero.fame += fameAdd;
			insper.push ("the time " + hero.fName + " slayed " + monster.name + " the " + monster.species);
			insperCount = insperCount + 1;
			hero.i = hero.i + 1;
			if (hero.dickMoves > 0)
			{
				hero.dickMoves = hero.dickMoves - 1;
				outputW.innerHTML+="<br>This makes you less of a dick, I guess.";
			}
			familyTree.push ("<br>" + hero.fName + " killed " + monster.name + " the " + monster.species);
			//killedmonsters.push (monster.name);
			monster.weapBool = true
		}
		else
		{
			var fameAdd = 1;
			if(monster.HP <= -100){
				fameAdd *= 10;
				wWrite('<br>You obliterated them! (fame x 10)', false);
			}
			if(monster.HP <= -1000){
				fameAdd *= 10;
				wWrite('<br>You decimated them! (fame x 100)', false);
			}
			if(monster.HP <= -10000){
				fameAdd *= 10;
				wWrite('<br>You pulverized them! (fame x 1000)', false);
			}
			if(monster.HP <= -100000){
				fameAdd *= 10;
				wWrite('<br>You liquified them! (fame x 1000)', false);
			}
			if(monster.HP <= -1000000){
				fameAdd *= 10;
				wWrite('<br>You evaporated them! (fame x 10000)', false);
			}
			if(monster.HP <= -10000000){
				fameAdd *= 10;
				wWrite('<br>You atomized them! (fame x 100000)', false);
			}
			if(monster.HP <= -100000000){
				fameAdd *= 10;
				wWrite('<br>You completely erased them! (fame x 1000000)', false);
			}
			
			hero.fame += fameAdd;
			//killedmonsters.push (monster.species);
		}
	}
	if (type == "quest") //Checking for quest results
	{
		if (quest.object == monWeap.type && quest.object != undefined && quest.bool == true)
		{
			quest.collected = quest.collected + 1;
			outputW.innerHTML+="<br>You take the " + monWeap.type + " as proof for " + quest.npcName + ".";
			monster.weapBool = false;
		}
		if(quest.object == monster.species && quest.bool == true)
		{
			quest.collected = quest.collected + 1;
			outputW.innerHTML+="<br>You take the " + monster.species + "'s head as proof for " + quest.npcName + ".";
		}
		if (quest.collected >= quest.number && quest.bool == true)
		{
			outputW.innerHTML+="<br>Your quest is completed! " + quest.npcName + " will tell everyone about your aid. You've gained even more fame!";
			quest.bool = false;
			quest.object = undefined;
			hero.fame = hero.fame + (10 * quest.number);
		}
	}
	if (type == "equip") //Checking if we need to allow player to equip a weapon
	{
		menu.innerHTML="<button class='button' onclick='lvlUp()'>Continue.</button>";
		if (monster.weapBool == true)
		{
			equipWeap("unequip");
			wWrite("<br><u>The " + monster.species + " dropped a " + monWeap.type + " on the ground.<br>It has " + monWeap.Atk + " attack points, and is a " + monWeap.weightClass + " weapon.</u>" , false );
			wWrite("<br>You are carrying: <br>", false);
			if (weapHols1.bool == true)
			{
				wWrite("a " + weapHols1.weightClass + " " + weapHols1.type + " with " + weapHols1.Atk + " Atk.<br>", false);
			}
			if (weapHols2.bool == true)
			{
				wWrite("a " + weapHols2.weightClass + " " + weapHols2.type + " with " + weapHols2.Atk + " Atk.<br>", false);
			}
			if (weapHols3.bool == true)
			{
				wWrite("a " + weapHols3.weightClass + " " + weapHols3.type + " with " + weapHols3.Atk + " Atk.<br>", false);
			}
			mWrite("equipWeap" , "Pick up the " + monWeap.type, false);
		}
		if (hero.weapBool == true && hero.scrapPackBool == true && monster.weapBool == true)
		{
			menu.innerHTML+="<button class='button' onclick='scrap(1)'>Reduce the " + monWeap.type + " to scrap.</button>";
		}
		if (dropWeap.existBool == true)
		{
			menu.innerHTML+="<button class='button' onclick='equipFallenWeap(true)'>Equip fallen " + dropWeap.type + ".</button>";
		}
		if (hero.weapBool == true && hero.scrapPackBool == true && monWeap.existBool == true)
		{
			menu.innerHTML+="<button class='button' onclick='scrap(5)'>Reduce the " + monWeap.type + " to scrap.</button>";
		}
	}
	if (type == "crowd" && set.bystanderCount > 0)
	{
		outputW.innerHTML+="<br>" + set.bystanderCount + " people saw your victory. They will tell their stories and add to your fame.";
		hero.fame = hero.fame + set.bystanderCount;
	}
	weatherDraw("effect" , "nil");
}

	var calcStr = hero.Str
    var calcSpd = hero.Spd
	var calcDef = hero.Def
	var calcAcc = hero.Acc

function bonusCalc()
{
	calcStr = hero.Str + weap.bStr;
    calcSpd = hero.Spd + weap.bSpd;
	calcDef = hero.Def + weap.bDef;
	calcAcc = hero.Acc + weap.bAcc;
}

function damageCalc (type)
{
	if (type == "toss")
	{
		outputW.innerHTML+="<br>You throw your " + weap.type + " at the " +monster.species +", ";
		if ( monster.meltBool == true)
		{
			var dmgStep1 = Math.floor(Math.random()*(calcStr * calcSpd * weap.Atk * calcAcc)) - monster.Def;
		}
		else
		{
			var dmgStep1 = Math.floor(Math.random()*(hero.Str * hero.Spd * weap.Atk)) - monster.Def;
		}
		var weapStuck = Math.floor(Math.random()*hero.Str);
		if (dmgStep1 < 1) //if the hero does no damage
		{
			outputW.innerHTML+="the " + monster.species + " barely blinks as your " + weap.type + " clatters uselessly off it.<br>Your " + weap.type + " is now on the ground.";
			hero.weapBool = false;
			dropWeap.type = weap.type; //drops the weapon to the battlefield.
			dropWeap.order = weap.order;
			dropWeap.material = weap.material;
			dropWeap.name = weap.name;
			dropWeap.Atk = weap.Atk;
			dropWeap.pBool = weap.pBool;
			dropWeap.bStr = weap.bStr;
			dropWeap.bSpd = weap.bSpd;
			dropWeap.bDef = weap.bDef;
			dropWeap.bAcc = weap.bAcc;
			dropWeap.fireBool = weap.fireBool;
			dropWeap.elecBool = weap.elecBool;
			dropWeap.wetBool = weap.wetBool;
			dropWeap.weight = weap.weight;
			dropWeap.weightClass = weap.weightClass;
			dropWeap.existBool = true;
			weap.type = "hand";
			weap.name = " ";
			weap.material = " ";
			weap.Atk = "1";
			weapDraw();
		}
		else // the hero does damage
		{
			outputW.innerHTML+="doing <i>[<span style='color:red'>" + dmgStep1 + "</span>]</i> points of damage.";
			monster.poisonBool = true;
			monster.HP = monster.HP - dmgStep1; //Subtracts damage from monster's HP pool
			if (weapStuck < hero.Str/2)
			{
				outputW.innerHTML+="<br>Your " + weap.type + " sinks deep into the " + monster.species + "'s flesh.<br>Your " + weap.type + " is now embedded in the " + monster.species + ".";
				embedWeap.existBool = true;
				hero.weapBool = false;
				embedWeap.type = weap.type; //the weapon is stuck inside the monster.
				embedWeap.material = weap.material;
				embedWeap.name = weap.name;
				embedWeap.pBool = weap.pBool;
				embedWeap.Atk = weap.Atk;
				weap.type = "hand";
				weap.name = " ";
				weap.material = " ";
				weap.Atk = "1";
				weapDraw();
			}
			else
			{
				outputW.innerHTML+="your " + weap.type + " clatters to the ground between you and the  " + monster.species + ".<br>Your " + weap.type + " is now on the ground.";
				hero.weapBool = false;
				dropWeap.type = weap.type; //drops the weapon from being equipped to the battlefield.
				dropWeap.material = weap.material;
				dropWeap.name = weap.name;
				dropWeap.pBool = weap.pBool;
				dropWeap.Atk = weap.Atk;
				dropWeap.existBool = true;
				weap.type = "hand";
				weap.name = " ";
				weap.material = " ";
				weap.Atk = "1";
				weapDraw();
			}
		}
	}
	if (type == "unarmed")
	{
		var dmgStep1 = hero.Str + hero.Spd;
		if (monster.meltBool == true)
		{
			var dmgStep2 = Math.floor(Math.random()*(hero.Str * hero.Spd) + 1);
		}
		else
		{
			var dmgStep2 = Math.floor(Math.random()*dmgStep1) + 1;
		}
		var heroATK = dmgStep2 - monster.Def;
		if (heroATK < 1) //If the hero does no damage
		{
			outputW.innerHTML+="<br>The " + monster.species + " shakes off your attack like it was nothing.";
		}
		else //if the hero does damage
		{
			outputW.innerHTML+="<br>" + heroUnAtkMsg[Math.floor(Math.random()*heroUnAtkMsgCount)] + "the " + monster.species + ", " + monDmgMsg[Math.floor(Math.random()*monDmgMsgCount)] + " it, and doing <i>[<span style='color:red'>" + heroATK + "</span>]</i> points of damage.<br>The " + monster.species + " " + atkMonReactMsg[Math.floor(Math.random()*atkMonReactMsgCount)];
			monster.HP = monster.HP - heroATK; //Subtracts damage from monster's HP pool
		}
		if (monster.electrifiedBool == true)
		{
			var elecDam = Math.floor(Math.random() * monster.Def);
			outputW.innerHTML+="<br> The current running through the " + monster.species + "'s body shocks you, doing <i>[<span style='color:red'>" + elecDam + "</span>]</i> points of damage.";
			hero.curHP = hero.curHP - elecDam;
			hpDraw();
		}
	}
	if (type == "armed")
	{
		if (weap.weightClass == "medium")
		{
			var dmgStep1 = ((hero.Spd + weap.weight)/2) + weap.Atk;
		}
		else if (weap.weightClass == "heavy")
		{
			var dmgStep1 = ((hero.Str * weap.weight)/(Math.floor(Math.random()*25)+1)) + weap.Atk;
		}
		else
		{
			var dmgStep1 = (hero.Acc * weap.weight) + weap.Atk;
		}
		if ( monster.meltBool == true )
		{
			dmgStep2 = hero.Str * dmgStep1;
		}
		else
		{
			var dmgStep2 = hero.Str + dmgStep1;
		}
		var dmgStep3 = Math.floor(Math.random()*dmgStep2);
		var heroATK = dmgStep3 - monster.Def;
		if (heroATK < 1) //If the hero does no damage
		{
			outputW.innerHTML+="<br>The " + monster.species + " shakes off your attack like it was nothing.";
		}
		else
		{
			if (weap.pBool == true && monster.poisonBool == false)
			{
				var pChance = Math.floor(Math.random()*5);
				if (pChance == 2)
				{
					monster.poisonBool = true;
				}
			}
			outputW.innerHTML+="<br>" + heroArmAtkMsg[Math.floor(Math.random()*heroArmAtkMsgCount)] + monster.species + " with your " + weap.type + " " + monDmgMsg[Math.floor(Math.random()*monDmgMsgCount)] + " it, and doing <i>[<span style='color:red'>" + heroATK + "</span>]</i> points of damage.<br>The " + monster.species + " " + atkMonReactMsg[Math.floor(Math.random()*atkMonReactMsgCount)];
			monster.HP = monster.HP - heroATK; //Subtracts damage from monster's HP pool
		}
	}
	if (type == "nuclear")
	{
	}
	if (type == "fire")
	{
		hero.curMana = hero.curMana - 5;
		var D = Math.floor(Math.random()*(hero.Def + hero.Acc));
		outputW.innerHTML+="<br>Your flame spits out in a pillar doing <i>[<span style='color:red'>" + D + "</span>]</i> points of damage to the " + monster.species + ".<br>The " + monster.species + " " + atkMonReactMsg[Math.floor(Math.random()*atkMonReactMsgCount)];
		if (monster.material == "Wood" || monster.material == "Bread" || monster.material == "Turkey" || monster.material == "Plastic" || monster.material == "Wool" || monster.material == "Flannel")
		{
			monster.fireBool = true;
			outputW.innerHTML+="<br>Flames lick the " + monster.species + "'s " + monster.material + " skin.";
		}
		else if (monster.material == "Iron" || monster.material == "Steel" || monster.material == "Copper" || monster.material == "Gold" || monster.material == "Rust" || monster.material == "Stamped Metal" || monster.material == "Pewter")
		{
			monster.meltBool = true;
			outputW.innerHTML+="<br>The " + monster.species + "'s " + monster.material + " skin seems to stretch and sway like some etherial lava lamp.";
		}
		else if (monster.material == "Candy" || monster.material == "Peppermint" || monster.material == "Snow" || monster.material == "Ice" || monster.material == "Slush" || monster.material == "Plastic")
		{
			D = Math.floor(Math.random()*(hero.Def * hero.Acc));
			outputW.innerHTML+="<br>Steam leaps up from the " + monster.species + " doing <i>[<span style='color:red'>" + D + "</span>]</i> points of damage";
		}
			monster.HP = monster.HP - D;
	}
	if (type == "electrical")
	{
		hero.curMana = hero.curMana - 5;
		var D = Math.floor(Math.random()*(hero.Def + hero.Acc));
		if (set.weather == "storming" && set.outsideBool == true)
		{
			outputW.innerHTML+="<br>You draw in energy from the storm around you.";
			D = D * 5;
		}
		monster.HP = monster.HP - D;
		outputW.innerHTML+="<br>Your bolt of lightning does <i>[<span style='color:red'>" + D + "</span>]</i> points of damage to the " + monster.species + ".<br>The " + monster.species + " " + atkMonReactMsg[Math.floor(Math.random()*atkMonReactMsgCount)];
		if (monster.material == "Iron" || monster.material == "Steel" || monster.material == "Copper" || monster.material == "Gold" || monster.material == "Rust" || monster.material == "Stamped Metal" || monster.material == "Pewter")
		{
			monster.electrifiedBool = true;
			outputW.innerHTML+="<br>Electric currents flick in blue serpintine streaks across the " + monster.species + "'s " + monster.material + " skin.";
		}
		else if (monster.material == "Wood" || monster.material == "Bread" || monster.material == "Turkey" || monster.material == "Plastic" || monster.material == "Wool" || monster.material == "Flannel")
		{
			monster.fireBool = true;
			outputW.innerHTML+="<br>Your attack is spreading fire across the " + monster.species + "'s " + monster.material + " skin.";
		}
	}
	if (type == "soggy")
	{
	}
	if (type == "phlegm")
	{
	}
	if (type == "decay")
	{
	}
	if (type == "ice")
	{
	}
	if (type == "leech")
	{
	}
	if (type == "stormCall")
	{
		outputW.innerHTML+="<br>See, in the end, in the end it turns out, it turns out hell was in you all along. Just let it out. Just let it out " + hero.fName + "; let it all pour out!";
		set.weather = "storming";
		hero.curMana = hero.curMana - 20;
	}
	if (type == "holy")
	{
	}
	if (type == "gravity")
	{
	}
	if (type == "potato")
	{
	}
	if (type == "tipsy gymnist")
	{
	}
	if (type == "stone")
	{
	}
	if (type == "dark")
	{
	}
	if (type == "gail")
	{
		outputW.innerHTML+="<br>You release a huge gail of wind... ";
		var breakChance = Math.floor(Math.random()*3);
		if (breakChance == 1 && set.outsideBool == false)
		{
			outputW.innerHTML+="ripping a giant hole in the ceiling.";
			set.outsideBool = true;
		}
		else if (breakChance == 2)
		{
			outputW.innerHTML+="throwing some dust around and into the " + monster.species +"'s eye(s).";
			monster.Acc = monster.Acc/1.5;
		}
		else if (4 < hero.dickMoves && set.bystanderCount > 0)
		{
			outputW.innerHTML+="<br>You hit an innocent bystander, throwing them into a " + set.dressing + " and killing them.";
			set.bystanderCount = set.bystanderCount - 1;
		}
		else
		{
			outputW.innerHTML+="which peters out pretty quickly, actually. Uh...";
		}
		hero.curMana = hero.curMana - 50;
	}
	if (type == "getOverThere")
	{
		outputW.innerHTML+="<br>You throw an innocent bystander through the air... ";
		set.bystanderCount = set.bystanderCount - 1;
		hero.dickMoves = hero.dickMoves + 5;
		var chuckingAcc = Math.floor(Math.random()*hero.Str);
		if (chuckingAcc > hero.Str/2)
		{
			var dmgStep1 = Math.floor(Math.random()*((hero.Str + hero.Spd) * 100)) - monster.Def;
			outputW.innerHTML+="hitting the enemy " + monster.species + " in the facehole, doing <i>[<span style='color:red'>" + dmgStep1 + "</span>]</i> points of damage.";
			monster.HP = monster.HP - dmgStep1;
		}
		else
		{
			outputW.innerHTML+="missing entirely and just generally being a dick.";
		}
		hero.curMana = hero.curMana - 25;
	}
	if (type == "prima")
	{
		var summonCount = Math.floor(Math.random()*15) + 1;
		hero.dickMoves = hero.dickMoves + summonCount;
		set.bystanderCount = set.bystanderCount + summonCount;
		hero.curMana = hero.curMana - 75;
		outputW.innerHTML+="<br>With powers you probably shouldn't be trusted with, you plucked " + summonCount + " people out of their homes to watch you fight.<br>There are " + set.bystanderCount + " people watching you.";
	}
	if (type == 8)
	{
		var heal = Math.floor(Math.random()*(hero.Def * hero.Acc));
		hero.curHP = hero.curHP + heal;
		if (hero.curHP > hero.totalHP)
		{
			hero.curHP = hero.totalHP;
		}
		outputW.innerHTML+="<br>You call upon the mystic arts to heal yourself <i>[<span style='color:green'>" + heal + "</span>]</i> points.";
		hero.curMana = hero.curMana - 5;
		fightBack();
	}
	hpDraw();
}

function buyHeal()
{
	hero.fame = hero.fame - 20;
	hero.healBool = true;
	tacoSpell();
}

function buyLightning()
{
	hero.fame = hero.fame - 20;
	hero.lightningBool = true;
	tacoSpell();
}

function buyFire()
{
	hero.fame = hero.fame - 20;
	hero.fireBool = true;
	tacoSpell();
}

function buyStormCall()
{
	hero.fame = hero.fame - 30;
	hero.stormCallBool = true;
	tacoSpell();
}

function buyGail()
{
	hero.fame = hero.fame - 50;
	hero.gailBool = true;
	tacoSpell();
}

function buyAudienceSummon()
{
	hero.fame = hero.fame - 50;
	hero.audienceSummonBool = true;
	tacoSpell();
}

function buyChuckChuck()
{
	hero.fame = hero.fame - 25;
	hero.chuckChuckBool = true;
	tacoSpell();
}

function upgradeMana()
{
	hero.fame = hero.fame - 10;
	var qStep = hero.totalMana / 2;
	var qStep2 = Math.floor(qStep);
	hero.totalMana = hero.totalMana + qStep2;
	hero.curMana = hero.totalMana;
	tacoSpell();
}

function saveMenu()
{
	menu.innerHTML="";
	if (typeof(Storage) !== "undefined")
	{
		outputW.innerHTML="Would you like to save/load?";
		menu.innerHTML+="<button class='button' onclick='save()'>Save Game</button>";
		menu.innerHTML+="<button class='button' onclick='load()'>Load Game</button>";
	}
	else
	{
		outputW.innerHTML="The Planet Adventure Tourism Board apologizes, but saving is only supported on browsers that support HTML 5.";
	}
	menu.innerHTML+="<button class='button' onclick='house()'>Back to Game</button>";
}

function save()
{
	outputW.innerHTML+="<br>Saving to browser's local storage...";
	localStorage["familyTree"] = JSON.stringify(familyTree);
	localStorage["insper"] = JSON.stringify(insper);
	localStorage["hisFigures"] = JSON.stringify(hisFigures);
	localStorage["hisBook"] = JSON.stringify(hisBook);
	localStorage["forgedWeapons"] = JSON.stringify(forgedWeapons);	
	
	localStorage.hero = JSON.stringify(hero);
	localStorage.rival = JSON.stringify(rival);
	localStorage.child = JSON.stringify(child);
	localStorage.quest = JSON.stringify(quest);
	localStorage.desk = JSON.stringify(desk);
	localStorage.weap1 = JSON.stringify(weapHols1);
	localStorage.weap2 = JSON.stringify(weapHols2);
	localStorage.weap3 = JSON.stringify(weapHols3);
	
	localStorage.rivalFightBool = rivalFightBool;
	localStorage.dogFightBool = dogFightBool;
	
	if(gpx_idle != undefined){
		for( var i in gpx_idle ){
			var o = gpx_idle[i];
			if(o.rate != undefined && o.count != undefined){
				localStorage[o.id] = JSON.stringify({
					count: o.count,
					multi: o.multi,
					cost: o.cost
				});
			}
		}
		if(gpx_idle.seen == true){
			localStorage.seen_idle == true;
		}
	}
	
	outputW.innerHTML+="Complete.";
}

function load()
{
	outputW.innerHTML+="<br>Loading from browser's local storage...";
	familyTree = JSON.parse(localStorage["familyTree"]);
	insper = JSON.parse(localStorage["insper"]);
	hisFigures = JSON.parse(localStorage["hisFigures"]);
	hisBook = JSON.parse(localStorage["hisBook"]);
	forgedWeapons = JSON.parse(localStorage["forgedWeapons"]);
	
	hero = JSON.parse(localStorage.hero);
	rival = JSON.parse(localStorage.rival);
	child = JSON.parse(localStorage.child);
	quest = JSON.parse(localStorage.quest);
	desk = JSON.parse(localStorage.desk);
	weapHols1 = JSON.parse(localStorage.weap1);
	weapHols2 = JSON.parse(localStorage.weap2);
	weapHols3 = JSON.parse(localStorage.weap3);
	if(gpx_idle != undefined){
		for( var i in gpx_idle ){
			var o = gpx_idle[i];
			if(o.rate != undefined && o.count != undefined && localStorage[o.id] != undefined){
				console.log(o.id);
				var savedObj = JSON.parse(localStorage[o.id]);
				gpx_idle[o.id].count = savedObj.count;
				gpx_idle[o.id].multi = savedObj.multi;
				gpx_idle[o.id].cost = savedObj.cost;
			}
		}
		if(localStorage.seen_idle == true){
			gpx_idle.seen == true;
		}
	}
	
	rivalFightBool = localStorage.rivalFightBool;
	dogFightBool = localStorage.dogFightBool;
	outputW.innerHTML+="Complete.";
}


//testing functions (cheats)
function almostFamous()
{
	hero.fame = 100;
	house();
}

function onlyAFleshWound()
{
	hero.curHP = hero.totalHP;
	hpDraw();
}

function illBeGood()
{
	hero.dickMoves = 0;
}

function operationSteamRoll()
{
	hero.Str = 1000000000000000000000;
	hero.Spd = 1000000000000000000000;
	hero.Def = 1000000000000000000000;
	hero.Acc = 1000000000000000000000;
	hero.curHP = 1000000000000000000000;
	hero.totalHP = 1000000000000000000000;
	statDraw();
	hpDraw();
}

function visitFromQueen()
{
	weap.name = "Snow White's";
	weap.Atk = 1000;
	weap.bStr = 1000;
	weap.bSpd = 1000;
	weap.bDef = 1000;
	weap.bAcc = 1000;
	weap.material = "poison";
	weap.type = "apple";
	hero.weapBool = true;
	weapDraw();
}

//Utility Functions
function arrayClear(arrayName)
{
	while(arrayName.length > 0)
	{
		arrayName.pop();
	}
}

/*function arrayRemove(arrayName , item)
{
	var step = arrayName.length;
	var calcArray = [];
	while (step > 0)
	{
		if (step == item)
		{
			console.log("item deleted");
		}
		else
		{
			calcArray.push(arrayName[step]);
		}
		step = step - 1;
		arrayName.pop();
	}
	step = calcArray.length;
	while (calcArray.length > 0)
	{
		arrayName.push(calcArray[step]);
		calcArray.pop();
	}
}*/

//Draw functions
function wWrite(message , fLineBool) //Write to window
{
	if (fLineBool == false)
	{
		outputW.innerHTML+= message;
	}
	else
	{
		outputW.innerHTML= message;
	}
}

function cSlur(message) //text only, no tags. Slurs whatever text input like a bad impersonation of Sean Connery
{
	var messageFirstPass = message.split("");
	var step = 0;
	while (step < messageFirstPass.length)
	{
		if (messageFirstPass[step] == "s")
		{
			if (messageFirstPass[step + 1] != "h" && messageFirstPass[step + 1] != "s")
			{
				messageFirstPass[step] = "sh";
			}
		}
		if (messageFirstPass[step] == "S")
		{
			if (messageFirstPass[step + 1] != "h" && messageFirstPass[step + 1] != "s")
			{
				messageFirstPass[step] = "Sh";
			}
		}
		if (messageFirstPass[step] == "a")
		{
			if (messageFirstPass[step + 1] != "h" && messageFirstPass[step + 1] != "i")
			{
				messageFirstPass[step] = "ah";
			}
		}
		if (messageFirstPass[step] == "A")
		{
			if (messageFirstPass[step + 1] != "h" && messageFirstPass[step + 1] != "i")
			{
				messageFirstPass[step] = "Ah";
			}
		}
		if (step > 0)
		{
			var messageSecondPass = messageOutput
			var messageOutput = messageSecondPass + messageFirstPass[step];
		}
		else
		{
			var messageOutput = messageFirstPass[step];
		}
		step += 1;
	}
	return messageOutput;
	
}

function mClear(){
	menu.innerHTML="";
}

function mWrite(funName , bTxt , fLineBool , funArg , funArg2) //Write to menu
{
	if (funName == undefined)
	{
		wWrite("Function Name Error: Inproper Call of wWrite function", true);
	}
	if (funArg2 != undefined)
	{
		if (fLineBool == false)
		{
			menu.innerHTML+="<button class='button' onclick='" +funName + "(" + funArg + " , " + funArg2 + ")'>" + bTxt + "</button>";
		}
		else
		{
			menu.innerHTML="<button class='button' onclick='" + funName + "(" + funArg + " , " + funArg2 + ")'>" + bTxt + "</button>";
		}
		
	}
	else
	{
		if (fLineBool == false)
		{
			menu.innerHTML+="<button class='button' onclick='" +funName + "(" + funArg + ")'>" + bTxt + "</button>";
		}
		else
		{
			menu.innerHTML="<button class='button'  onclick='" + funName + "(" + funArg + ")'>" + bTxt + "</button>";
		}
	}
}

function nameDraw()
{
	characterName.innerHTML= "<button class='nameButton' onclick='toggleStats()'>" + hero.title + " " + hero.fName + " " + hero.suffix + hero.lName + "</button>";
	characterAge.innerHTML="Age: " + hero.Age + " years old<br> and " + hero.days + " days.";
}

var statOpacity = 0;
var transition = "off";

function toggleStats()
{
	if (statOpacity == 0 && transition == "off")
	{
		characterSheet.style.width = '100vw';
		characterSheet.style.height = '80vh';
		transition = setInterval(openStats, 10);
	}
	else if (statOpacity == 1 && transition == "off")
	{
		transition = setInterval(closeStats, 10);
	}
}

function openStats()
{
	if (statOpacity < 1)
	{
		statOpacity += .1
		characterSheet.style.opacity = statOpacity;
	}
	else
	{
		statOpacity = 1
		characterSheet.style.opacity = statOpacity;
		clearInterval(transition);
		transition = "off";
	}
}

function closeStats()
{
	if (statOpacity > 0)
	{
		statOpacity -= .1
		characterSheet.style.opacity = statOpacity;
	}
	else
	{
		statOpacity = 0
		characterSheet.style.opacity = statOpacity;
		characterSheet.style.width = 0 + "px";
		characterSheet.style.height = 0 + "px";
		clearInterval(transition);
		transition = "off";
	}
}

function writeStatDraw()
{
	document.getElementById("characterStr").innerHTML="Diction: " + desk.diction;
	document.getElementById("characterSpd").innerHTML="Poetics: " + desk.poetics;
	document.getElementById("characterDef").innerHTML="Form: " + desk.form;
	document.getElementById("characterAcc").innerHTML="Style: " + desk.style;
	fameDisplay.innerHTML="inspiration: " + hero.i;
}
function forgeStatDraw()
{
	document.getElementById("characterStr").innerHTML="Temp. Control: " + hero.tCont;
	document.getElementById("characterSpd").innerHTML="Precision: " + hero.prec;
	document.getElementById("characterDef").innerHTML="Hammer Skill: " + hero.hSkill;
	document.getElementById("characterAcc").innerHTML="Tape Secrets: " + hero.tSecr;
	fameDisplay.innerHTML="Fame: " + hero.fame + "<br>inspiration: " + hero.i;
}
function statDraw()
{
	document.getElementById("characterStr").innerHTML="Str: <span id='Str'>" + calcStr +"</span>";
	document.getElementById("characterSpd").innerHTML="Spd: <span id='Spd'>" + calcSpd +"</span>";
	document.getElementById("characterDef").innerHTML="Def: <span id='Def'>" + calcDef +"</span>";
	document.getElementById("characterAcc").innerHTML="Acc: <span id='Acc'>" + calcAcc +"</span>";
	if (weap.bStr > 0)
	{
		document.getElementById("Str").style.color="#00FF00";
	}
	if (weap.bSpd > 0)
	{
		document.getElementById("Spd").style.color="#00FF00";
	}
	if (weap.bDef > 0)
	{
		document.getElementById("Def").style.color="#00FF00";
	}
	if (weap.bAcc > 0)
	{
		document.getElementById("Acc").style.color="#00FF00";
	}
	fameDisplay.innerHTML="Fame: " + hero.fame.toFixed(2) + '<br>';
	fameDisplay.innerHTML += 'Insperation: ' + hero.i.toFixed(2) + '<br>';
}

function weatherDraw(type, changeTo)
{
	var weather = document.getElementById("weather");
	var place = document.getElementById("drop");
	var effect = document.getElementById("effect");
	if (type == "place")
	{
		if (changeTo == "house")
		{
			place.syle = "position: fixed;background-color:#000000;background-position: center;background-image:url(" + houseBack + ");background-repeat: no-repeat;";
		}
		else
		{
			wWrite("Error(weatherDraw): Not Valid Location", false);
		}
	}
	else if (type == "weather")
	{
		weather_fx.clear_effect();
		if (changeTo == "clear")
		{
			weather.src = blankImg;
		}
		else if (changeTo == "storm")
		{
			weather.src = blankImg;
			weather_fx.start_effect('rain');
		}
		else if (changeTo == "snow")
		{
			weather.src = blankImg;
			weather_fx.start_effect('snow');
		}
		else if (changeTo == "fog")
		{
			weather.src = fogWeather;
		}
		else if (changeTo == "muggy")
		{
			weather.src = muggyWeather;
		}
		else if (changeTo == "hell")
		{
			weather.src = fireEffect;
		}
		else
		{
			wWrite("Error(weatherDraw): Not Valid Weather Type" , false);
		}
	}
	else if (type == "effect")
	{
		weather_fx.clear_wind();
		if (changeTo == "wind")
		{
			weather_fx.make_windy();
			effect.src = windEffect;
		}
		else if (changeTo == "bolt")
		{
			effect.src = lightningEffect
		}
		else if (changeTo == "fire")
		{
			effect.src = fireEffect;
		}
		else if (changeTo == "nil")
		{
			effect.src = blankImg;
		}
		else
		{
			wWrite("Error(weatherDraw): Not Valid Effect" , false);
		}
	}
	else
	{
		wWrite("Error(weatherDraw): I'm afraid the weather system has been improperly called.", true);
	}
}

var upBool = true;
var flashLevel = 0;
var flash = "off";

function hpFlash()
{
	if (upBool == true && flashLevel < 9)
	{
		flashLevel += 1;
		document.getElementById("HPColor").style.textShadow = "0px 1px " + flashLevel + "px #FFFFFF";
	}
	else if (upBool == true && flashLevel == 9)
	{
		flashLevel += 1;
		document.getElementById("HPColor").style.textShadow = "0px 1px " + flashLevel + "px #FFFFFF";
		upBool = false;
	}
	else if (upBool == false && flashLevel > 1)
	{
		flashLevel -= 1;
		document.getElementById("HPColor").style.textShadow = "0px 1px " + flashLevel + "px #FFFFFF";
	}
	else if (upBool == false && flashLevel == 1)
	{
		flashLevel -= 1;
		document.getElementById("HPColor").style.textShadow = "0px 1px " + flashLevel + "px #FFFFFF";
		upBool = true;
	}
	if (hero.curHP > hero.totalHP/5)
	{
		document.getElementById("HPColor").style.textShadow = "0px 0px 0px #000000";
		clearInterval(flash);
		flash = "off";
	}
}

function hpDraw()
{	
	if (hero.totalHP > 999999)
	{
		document.getElementById("characterHP").innerHTML="HP: <span id='HPColor'>" + Math.floor((hero.curHP/hero.totalHP)*100) + "%</span>";
	}
	else
	{
		document.getElementById("characterHP").innerHTML="HP: <span id='HPColor'>" + hero.curHP + "</span>/" + hero.totalHP;
	}
	if (hero.totalMana > 999999)
	{
		document.getElementById("characterMana").innerHTML="MP: " + Math.floor((hero.curMana/hero.totalMana)*100);
	}
	else
	{
		document.getElementById("characterMana").innerHTML="MP: " + hero.curMana + "/" + hero.totalMana;
	}
	if (hero.curHP < hero.totalHP/5)
	{
		document.getElementById("HPColor").style.color="#e52325";
		if (flash == "off")
		{
			flash = setInterval(hpFlash, 100);
		}
	}
	else if (hero.curHP < 0)
	{
		document.getElementById("HPColor").style.color="#420d00";
	}
}
function weapDraw()
{
	weaponDisplay.innerHTML="Weapon: " + weap.name + " " + weap.material + " " + weap.type + "<br>   Atk: " + weap.Atk;
	if (weapHols1.bool == true)
	{
		document.getElementById("holst1").innerHTML="Back Holster: " + weapHols1.type + "<br> Atk: " + weapHols1.Atk;
	}
	else
	{
		document.getElementById("holst1").innerHTML="Back Holster: <br> Atk:";
	}
	if (weapHols2.bool == true)
	{
		document.getElementById("holst2").innerHTML="Hip Holster: " + weapHols2.type + "<br> Atk: " + weapHols2.Atk;
	}
	else
	{
		document.getElementById("holst2").innerHTML="Hip Holster: <br> Atk:";
	}
	if (weapHols3.bool == true)
	{
		document.getElementById("holst3").innerHTML="Ankle Holster: " + weapHols3.type + "<br> Atk: " + weapHols3.Atk;
	}
	else
	{
		document.getElementById("holst3").innerHTML="Ankle Holster: <br> Atk:";
	}
}

function windowStore()
{
	windowBackup = outputW.innerHTML;
}
function windowRestore()
{
	outputW.innerHTML = windowBackup;
}
function menuStore()
{
	menuBackup = menu.innerHTML;
}
function menuRestore()
{
	menu.innerHTML = menuBackup;
}

function timeUpdate()
{
	second = second + 1;
	if (second >= 60)
	{
		min = min + 1;
		second = 0;
	}
	if (min >= 60)
	{
		hour = hour + 1
		min = 0;
	}
	if (hour >= 24)
	{
		day = day + 1;
		hour = 0;
	}
	if (day >= 30)
	{
		month = month + 1;
		day = 0;
	}
	if (month >= 12)
	{
		year = year + 1;
		month = 0
	}
	if (year >= 999)
	{
		year = 0;
	}
}

var go = 0;

function startMobile()
{
	go = setInterval(openMobile, 1);
}

var tableHeight = 0;
var windowHeight = 0;

function openMobile()
{
	var table = document.getElementById("tabletop");
	var textWindow = document.getElementById("window");
	if (windowHeight < setWindowHeight)
	{
		windowHeight = windowHeight + 1;
		tableHeight = tableHeight + 1;
		textWindow.style.height = windowHeight + "vh";
		//table.style.height = tableHeight + "vh";
	}
	else if (windowHeight > setWindowHeight)
	{
		windowHeight = setWindowHeight;
		tableHeight = screenHeight;
		textWindow.style.height = setWindowHeight + "vh";
		//table.style.height = screenHeight + "vh";
	}
	else if (windowHeight == setWindowHeight)
	{
		clearInterval(go);
		heroGen();
	}
	return '100vh';
}
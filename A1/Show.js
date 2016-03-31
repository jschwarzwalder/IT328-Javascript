var show = {
	name:"Doctor Who", 
	synopsis:"An alien travels around space and time with a companion, and occasionally saves the Earth. He really likes Great Britain, so many companions and adventures center around that country.", 
	year: [1963, 2005],
	watch: [
		"BBC One", 
		"BBC America", 
		"Amazon", 
		"Hulu", 
		"Netflix", 
		"Syfy Universal"
	],
	artists: { 
		doctor: [
			"John Hurt", 
			"William Hartnell", 
			"Patrick Troughton", 
			"Jon Pertwee", 
			"Tom Baker", 
			"Peter Davison", 
			"Colin Baker", 
			"Sylvester McCoy", 
			"Paul McGann", 
			"Christopher Eccleston", 
			"David Tennant", 
			"Matt Smith", 
			"Peter Capaldi" 
		], 
		companion: [
			{ doctor: [9, 10],  character: "Rose Tyler" , actor: "Billie Piper"}, 
			{ doctor: [9, 10],  character: "Captain Jack Harkness" , actor: "John Barrowman"},
			{ doctor: [9, 10],  character: "Mickey Smith" , actor: "Noel Clarke"}, 
			{ doctor: 10,  character: "Jackie Tyler" , actor: "Camille Coduri"}, 
			{ doctor: 10,  character: "Martha Jones" , actor: "Freema Agyeman"}, 
			{ doctor: 10,  character: "Donna Noble" , actor: "Catherine Tate"}, 
			{ doctor: 10,  character: "Astrid Peth" , actor: "Kylie Minogue"},
			{ doctor: 10,  character: "Wilfred Mott" , actor: "Bernard Cribbins"},
			{ doctor: 11,  character: "Amy Pond" , actor: "Karen Gillan"}, 
			{ doctor: 11,  character: "Rory Williams" , actor: "Arthur Darvill"}, 
			{ doctor: [10, 11],  character: "River Song" , actor: "Alex Kingston"}, 
			{ doctor: 11,  character: "Craig Owens" , actor: "James Corden"}, 
			{ doctor: [11,12],  character: "Clara Oswald" , actor: "Jenna Coleman"}, 
		],
		director: [
			"Keith Boak",
			"Eros Lyn",
			"Joe Ahearne",
			"Brian Grant",
			"James Hawes",
			"James Strong",
			"Dan Zeff",
			"Charles Palmer",
			"Richard Clark",
			"Hettie MacDonald",
			"Colin Teague",
			"Douglas Mackinnon",
			"Alice Troughton",
			"Adam Smith",
			"Andrew Gunn",
			"Jonny Campbell",
			"Catherine Morshead",
			"Asheley Way",
			"Toby Haynes",
			"Jeremy Webb",
			"Julian Simpson",
			"Peter Hoar",
			"Richard Senior",
			"Nick Hurran",
			"Steven Hughes",
			"Farren Blackburn",
			"Saul Metzstein",
			"Colm McCarthy",
			"Jamie Payne",
			"Mat King",
			"Stephen Woolfenden",
			"Ben Wheatley",
			"Paul Murphy",
			"Paul Wilmshurt",
			"Sheree Folkson",
			"Rachel Talalay",
			"Daniel O\'Hara",
			"Ed Bazalgette",
			"Daniel Netthelm",
			"Justin Molotnikov",
			"Graeme Harper"				
		],
		writer: [
			"Russell T Davies",
			"Mark Gatiss", 
			"Robert Shearman",
			"Paul Cornell",
			"Steven Moffat",
			"Toby Whithouse",
			"Tom MacRae",
			"Matt Jones",
			"Matthew Graham",
			"Gareth Roberts",
			"Helen Raynor",
			"Stephen Greenhorn",
			"Chris Chibnall",
			"James Moran",
			"Keith Temple",
			"Phil Ford",
			"Simon Nye",
			"Richard Curtis",
			"Stephen Thompson",
			"Neil Gaiman",
			"Neil Cross",
			"Peter Harness",
			"Jamie Mathieson",
			"Frank Cottrell Boyce",
			"Catherine Tregenna",
			"Sarah Dollard"
		]
	}
}

function totalChannels (){
	return show.watch.length;
}
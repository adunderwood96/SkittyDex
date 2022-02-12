const { Pokedex } = require('../models');

const pokedex = [
      {
        "id": 1,
        "name": "Turtwig",
        "image": "https://www.serebii.net/swordshield/pokemon/387.png",
        "types": "Grass",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 2,
        "name": "Grotle",
        "image": "https://www.serebii.net/swordshield/pokemon/388.png",
        "types": "Grass",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 3,
        "name": "Torterra",
        "image": "https://www.serebii.net/swordshield/pokemon/389.png",
        "types": "Grass, Ground",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 4,
        "name": "Chimchar",
        "image": "https://www.serebii.net/swordshield/pokemon/390.png",
        "types": "Fire",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 5,
        "name": "Monferno",
        "image": "https://www.serebii.net/swordshield/pokemon/391.png",
        "types": "Fire, Fighting",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 6,
        "name": "Infernape",
        "image": "https://www.serebii.net/swordshield/pokemon/392.png",
        "types": "Fire, Fighting",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 7,
        "name": "Piplup",
        "image": "https://www.serebii.net/swordshield/pokemon/393.png",
        "types": "Water",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 8,
        "name": "Prinplup",
        "image": "https://www.serebii.net/swordshield/pokemon/394.png",
        "types": "Water",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 9,
        "name": "Empoleon",
        "image": "https://www.serebii.net/swordshield/pokemon/395.png",
        "types": "Water, Steel",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 10,
        "name": "Starly",
        "image": "https://www.serebii.net/swordshield/pokemon/396.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 11,
        "name": "Staravia",
        "image": "https://www.serebii.net/swordshield/pokemon/397.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 12,
        "name": "Staraptor",
        "image": "https://www.serebii.net/swordshield/pokemon/398.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 13,
        "name": "Bidoof",
        "image": "https://www.serebii.net/swordshield/pokemon/399.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 14,
        "name": "Bibarel",
        "image": "https://www.serebii.net/swordshield/pokemon/400.png",
        "types": "Normal, Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 15,
        "name": "Kricketot",
        "image": "https://www.serebii.net/swordshield/pokemon/401.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 16,
        "name": "Kricketot",
        "image": "https://www.serebii.net/swordshield/pokemon/402.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 17,
        "name": "Shinx",
        "image": "https://www.serebii.net/swordshield/pokemon/403.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 18,
        "name": "Luxio",
        "image": "https://www.serebii.net/swordshield/pokemon/404.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 19,
        "name": "Luxray",
        "image": "https://www.serebii.net/swordshield/pokemon/405.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 20,
        "name": "Abra",
        "image": "https://www.serebii.net/swordshield/pokemon/063.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 21,
        "name": "Kadabra",
        "image": "https://www.serebii.net/swordshield/pokemon/064.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 22,
        "name": "Alakazam",
        "image": "https://www.serebii.net/swordshield/pokemon/064.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 23,
        "name": "Magikarp",
        "image": "https://www.serebii.net/swordshield/pokemon/129.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 24,
        "name": "Gyarados",
        "image": "https://www.serebii.net/swordshield/pokemon/130.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 25,
        "name": "Budew",
        "image": "https://www.serebii.net/swordshield/pokemon/406.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 26,
        "name": "Roselia",
        "image": "https://www.serebii.net/swordshield/pokemon/315.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 27,
        "name": "Roserade",
        "image": "https://www.serebii.net/swordshield/pokemon/407.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 28,
        "name": "Zubat",
        "image": "https://www.serebii.net/swordshield/pokemon/041.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 29,
        "name": "Golbat",
        "image": "https://www.serebii.net/swordshield/pokemon/042.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 30,
        "name": "Crobat",
        "image": "https://www.serebii.net/swordshield/pokemon/169.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 31,
        "name": "Geodude",
        "image": "https://www.serebii.net/swordshield/pokemon/074.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 32,
        "name": "Graveler",
        "image": "https://www.serebii.net/swordshield/pokemon/075.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 33,
        "name": "Golem",
        "image": "https://www.serebii.net/swordshield/pokemon/076.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 34,
        "name": "Onix",
        "image": "https://www.serebii.net/swordshield/pokemon/095.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 35,
        "name": "Steelix",
        "image": "https://www.serebii.net/swordshield/pokemon/208.png",
        "types": "Steel, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 36,
        "name": "Cranidos",
        "image": "https://www.serebii.net/swordshield/pokemon/408.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 37,
        "name": "Rampardos",
        "image": "https://www.serebii.net/swordshield/pokemon/409.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 38,
        "name": "Shieldon",
        "image": "https://www.serebii.net/swordshield/pokemon/410.png",
        "types": "Rock, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 39,
        "name": "Bastiodon",
        "image": "https://www.serebii.net/swordshield/pokemon/411.png",
        "types": "Rock, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 40,
        "name": "Machop",
        "image": "https://www.serebii.net/swordshield/pokemon/066.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 41,
        "name": "Machoke",
        "image": "https://www.serebii.net/swordshield/pokemon/067.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 42,
        "name": "Machamp",
        "image": "https://www.serebii.net/swordshield/pokemon/068.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 43,
        "name": "Psyduck",
        "image": "https://www.serebii.net/swordshield/pokemon/054.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 44,
        "name": "Golduck",
        "image": "https://www.serebii.net/swordshield/pokemon/055.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 45,
        "name": "Burmy",
        "image": "https://www.serebii.net/swordshield/pokemon/412.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 46,
        "name": "Wormadam",
        "image": "https://www.serebii.net/swordshield/pokemon/413.png",
        "types": "Bug, Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 47,
        "name": "Mothim",
        "image": "https://www.serebii.net/swordshield/pokemon/414.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 48,
        "name": "Wurmple",
        "image": "https://www.serebii.net/swordshield/pokemon/265.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 49,
        "name": "Silcoon",
        "image": "https://www.serebii.net/swordshield/pokemon/266.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 50,
        "name": "Beautifly",
        "image": "https://www.serebii.net/swordshield/pokemon/267.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 51,
        "name": "Cascoon",
        "image": "https://www.serebii.net/swordshield/pokemon/268.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 52,
        "name": "Dustox",
        "image": "https://www.serebii.net/swordshield/pokemon/269.png",
        "types": "Bug, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 53,
        "name": "Combee",
        "image": "https://www.serebii.net/swordshield/pokemon/415.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 54,
        "name": "Vespiquen",
        "image": "https://www.serebii.net/swordshield/pokemon/416.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 55,
        "name": "Pachirisu",
        "image": "https://www.serebii.net/swordshield/pokemon/417.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 56,
        "name": "Buizel",
        "image": "https://www.serebii.net/swordshield/pokemon/418.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 57,
        "name": "Floatzel",
        "image": "https://www.serebii.net/swordshield/pokemon/419.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 58,
        "name": "Cherubi",
        "image": "https://www.serebii.net/swordshield/pokemon/420.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 59,
        "name": "Cherrim",
        "image": "https://www.serebii.net/swordshield/pokemon/421.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 60,
        "name": "Shellos",
        "image": "https://www.serebii.net/swordshield/pokemon/422.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 61,
        "name": "Gastrodon",
        "image": "https://www.serebii.net/swordshield/pokemon/423.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 62,
        "name": "HeraCross",
        "image": "https://www.serebii.net/swordshield/pokemon/214.png",
        "types": "Bug, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 63,
        "name": "Aipom",
        "image": "https://www.serebii.net/swordshield/pokemon/190.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 64,
        "name": "Ambipom",
        "image": "https://www.serebii.net/swordshield/pokemon/424.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 65,
        "name": "Drifloon",
        "image": "https://www.serebii.net/swordshield/pokemon/425.png",
        "types": "Ghost, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 66,
        "name": "Drifblim",
        "image": "https://www.serebii.net/swordshield/pokemon/426.png",
        "types": "Ghost, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 67,
        "name": "Buneary",
        "image": "https://www.serebii.net/swordshield/pokemon/427.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 68,
        "name": "Lopunny",
        "image": "https://www.serebii.net/swordshield/pokemon/428.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 69,
        "name": "Gastly",
        "image": "https://www.serebii.net/swordshield/pokemon/092.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 70,
        "name": "Haunter",
        "image": "https://www.serebii.net/swordshield/pokemon/093.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 71,
        "name": "Gengar",
        "image": "https://www.serebii.net/swordshield/pokemon/094.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 72,
        "name": "Misdreavus",
        "image": "https://www.serebii.net/swordshield/pokemon/200.png",
        "types": "Ghost",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 73,
        "name": "Mismagius",
        "image": "https://www.serebii.net/swordshield/pokemon/429.png",
        "types": "Ghost",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 74,
        "name": "Murkrow",
        "image": "https://www.serebii.net/swordshield/pokemon/198.png",
        "types": "Dark, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 75,
        "name": "Honchkrow",
        "image": "https://www.serebii.net/swordshield/pokemon/430.png",
        "types": "Dark, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 76,
        "name": "Glameow",
        "image": "https://www.serebii.net/swordshield/pokemon/431.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 77,
        "name": "Purugly",
        "image": "https://www.serebii.net/swordshield/pokemon/432.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 78,
        "name": "Goldeen",
        "image": "https://www.serebii.net/swordshield/pokemon/118.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 79,
        "name": "Seaking",
        "image": "https://www.serebii.net/swordshield/pokemon/119.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 80,
        "name": "Barboach",
        "image": "https://www.serebii.net/swordshield/pokemon/339.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 81,
        "name": "Whiscash",
        "image": "https://www.serebii.net/swordshield/pokemon/340.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 82,
        "name": "Chingling",
        "image": "https://www.serebii.net/swordshield/pokemon/433.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 83,
        "name": "Chimecho",
        "image": "https://www.serebii.net/swordshield/pokemon/358.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 84,
        "name": "Stunky",
        "image": "https://www.serebii.net/swordshield/pokemon/434.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 85,
        "name": "Skuntank",
        "image": "https://www.serebii.net/swordshield/pokemon/435.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 86,
        "name": "Meditite",
        "image": "https://www.serebii.net/swordshield/pokemon/307.png",
        "types": "Fighting, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 87,
        "name": "Medicham",
        "image": "https://www.serebii.net/swordshield/pokemon/308.png",
        "types": "Fighting, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 88,
        "name": "Bronzor",
        "image": "https://www.serebii.net/swordshield/pokemon/436.png",
        "types": "Steel, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 89,
        "name": "Bronzong",
        "image": "https://www.serebii.net/swordshield/pokemon/437.png",
        "types": "Steel, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 90,
        "name": "Ponyta",
        "image": "https://www.serebii.net/swordshield/pokemon/077.png",
        "types": "Fire",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 91,
        "name": "Rapidash",
        "image": "https://www.serebii.net/swordshield/pokemon/078.png",
        "types": "Fire",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 92,
        "name": "Bonsly",
        "image": "https://www.serebii.net/swordshield/pokemon/438.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 93,
        "name": "Sudowoodo",
        "image": "https://www.serebii.net/swordshield/pokemon/185.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 94,
        "name": "Mime Jr.",
        "image": "https://www.serebii.net/swordshield/pokemon/439.png",
        "types": "Psychic, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 95,
        "name": "Mr. Mime",
        "image": "https://www.serebii.net/swordshield/pokemon/122.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 96,
        "name": "Happiny",
        "image": "https://www.serebii.net/swordshield/pokemon/440.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 97,
        "name": "Chansey",
        "image": "https://www.serebii.net/swordshield/pokemon/113.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 98,
        "name": "Blissey",
        "image": "https://www.serebii.net/swordshield/pokemon/242.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 99,
        "name": "Cleffa",
        "image": "https://www.serebii.net/swordshield/pokemon/173.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 100,
        "name": "Clefairy",
        "image": "https://www.serebii.net/swordshield/pokemon/035.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 101,
        "name": "Clefable",
        "image": "https://www.serebii.net/swordshield/pokemon/036.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 102,
        "name": "Chatot",
        "image": "https://www.serebii.net/swordshield/pokemon/441.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 103,
        "name": "Pichu",
        "image": "https://www.serebii.net/swordshield/pokemon/172.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 104,
        "name": "Pikachu",
        "image": "https://www.serebii.net/swordshield/pokemon/025.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 105,
        "name": "Raichu",
        "image": "https://www.serebii.net/swordshield/pokemon/026.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 106,
        "name": "Hoothoot",
        "image": "https://www.serebii.net/swordshield/pokemon/163.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 107,
        "name": "Noctowl",
        "image": "https://www.serebii.net/swordshield/pokemon/164.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 108,
        "name": "Spiritomb",
        "image": "https://www.serebii.net/swordshield/pokemon/442.png",
        "types": "Ghost, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 109,
        "name": "Gible",
        "image": "https://www.serebii.net/swordshield/pokemon/443.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 110,
        "name": "Gabite",
        "image": "https://www.serebii.net/swordshield/pokemon/164.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 111,
        "name": "Garchomp",
        "image": "https://www.serebii.net/swordshield/pokemon/445.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 112,
        "name": "Munchlax",
        "image": "https://www.serebii.net/swordshield/pokemon/446.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 113,
        "name": "Snorlax",
        "image": "https://www.serebii.net/swordshield/pokemon/143.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 114,
        "name": "Unkown",
        "image": "https://www.serebii.net/swordshield/pokemon/201.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 115,
        "name": "Riolu",
        "image": "https://www.serebii.net/swordshield/pokemon/447.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 116,
        "name": "Lucario",
        "image": "https://www.serebii.net/swordshield/pokemon/448.png",
        "types": "Fighting, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 117,
        "name": "Wooper",
        "image": "https://www.serebii.net/swordshield/pokemon/194.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 118,
        "name": "Quagsire",
        "image": "https://www.serebii.net/swordshield/pokemon/195.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 119,
        "name": "Wingull",
        "image": "https://www.serebii.net/swordshield/pokemon/278.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 120,
        "name": "Pelipper",
        "image": "https://www.serebii.net/swordshield/pokemon/279.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 121,
        "name": "Girafarig",
        "image": "https://www.serebii.net/swordshield/pokemon/203.png",
        "types": "Normal, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 122,
        "name": "Hippopotas",
        "image": "https://www.serebii.net/swordshield/pokemon/449.png",
        "types": "Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 123,
        "name": "Hippowdon",
        "image": "https://www.serebii.net/swordshield/pokemon/450.png",
        "types": "Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 124,
        "name": "Azurill",
        "image": "https://www.serebii.net/swordshield/pokemon/298.png",
        "types": "Normal, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 125,
        "name": "Marill",
        "image": "https://www.serebii.net/swordshield/pokemon/183.png",
        "types": "Water, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 126,
        "name": "Azumarill",
        "image": "https://www.serebii.net/swordshield/pokemon/184.png",
        "types": "Water, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 127,
        "name": "Skorupi",
        "image": "https://www.serebii.net/swordshield/pokemon/451.png",
        "types": "Poison, Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 128,
        "name": "Drapion",
        "image": "https://www.serebii.net/swordshield/pokemon/452.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 129,
        "name": "Croagunk",
        "image": "https://www.serebii.net/swordshield/pokemon/453.png",
        "types": "Poison, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 130,
        "name": "Toxicroak",
        "image": "https://www.serebii.net/swordshield/pokemon/454.png",
        "types": "Poison, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 131,
        "name": "Carnivine",
        "image": "https://www.serebii.net/swordshield/pokemon/455.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 132,
        "name": "Remoraid",
        "image": "https://www.serebii.net/swordshield/pokemon/223.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 133,
        "name": "Octillery",
        "image": "https://www.serebii.net/swordshield/pokemon/224.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 134,
        "name": "Finneon",
        "image": "https://www.serebii.net/swordshield/pokemon/456.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 135,
        "name": "Lumineon",
        "image": "https://www.serebii.net/swordshield/pokemon/457.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 136,
        "name": "Tentacool",
        "image": "https://www.serebii.net/swordshield/pokemon/072.png",
        "types": "Water, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 137,
        "name": "Tentacruel",
        "image": "https://www.serebii.net/swordshield/pokemon/073.png",
        "types": "Water, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 138,
        "name": "Feebas",
        "image": "https://www.serebii.net/swordshield/pokemon/349.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 139,
        "name": "Milotic",
        "image": "https://www.serebii.net/swordshield/pokemon/350.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 140,
        "name": "Mantyke",
        "image": "https://www.serebii.net/swordshield/pokemon/458.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 141,
        "name": "Mantine",
        "image": "https://www.serebii.net/swordshield/pokemon/226.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 142,
        "name": "Snover",
        "image": "https://www.serebii.net/swordshield/pokemon/459.png",
        "types": "Grass, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 143,
        "name": "Abomasnow",
        "image": "https://www.serebii.net/swordshield/pokemon/460.png",
        "types": "Grass, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 144,
        "name": "Sneasel",
        "image": "https://www.serebii.net/swordshield/pokemon/215.png",
        "types": "Dark, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 145,
        "name": "Weavile",
        "image": "https://www.serebii.net/swordshield/pokemon/461.png",
        "types": "Dark, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 146,
        "name": "Uxie",
        "image": "https://www.serebii.net/swordshield/pokemon/480.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 147,
        "name": "Mesprit",
        "image": "https://www.serebii.net/swordshield/pokemon/481.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 148,
        "name": "Azelf",
        "image": "https://www.serebii.net/swordshield/pokemon/482.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 149,
        "name": "Dialga",
        "image": "https://www.serebii.net/swordshield/pokemon/483.png",
        "types": "Steel, Dragon",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 150,
        "name": "Dialga",
        "image": "https://www.serebii.net/swordshield/pokemon/484.png",
        "types": "Water, Dragon",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 151,
        "name": "Manaphy",
        "image": "https://www.serebii.net/swordshield/pokemon/490.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    }
]

const seedPokedex = () => Pokedex.bulkCreate(pokedex);
  
module.exports = seedPokedex;
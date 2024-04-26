const movies = {
    "1 jeanne dielman.jpg": {
        "title": "Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles",
        "year": 1975,
        "region": "Belgium, France",
        "director": "Chantal Akerman",
        "producer": "Evelyne Paul, Corinne Jenart",
        "writer": "Chantal Akerman",
        "cast": "Delphine Seyrig, Jan Decorte, Henri Storck",
        "time": "201 minutes"
    },
    "2 vertigo.jpg": {
        "title": "Vertigo",
        "year": 1958,
        "region": "USA",
        "director": "Alfred Hitchcock",
        "producer": "Alfred Hitchcock",
        "writer": "Alec Coppel, Samuel A. Taylor",
        "cast": "James Stewart, Kim Novak, Barbara Bel Geddes",
        "time": "128 minutes"
    },
    "3 Citizen Kane.jpg": {
        "title": "Citizen Kane",
        "year": 1941,
        "region": "USA",
        "director": "Orson Welles",
        "producer": "Orson Welles",
        "writer": "Herman J. Mankiewicz, Orson Welles",
        "cast": "Joseph Cotten, Dorothy Comingore, Agnes Moorehead",
        "time": "119 minutes"
    },
    "4 tokyo story.jpg": {
        "title": "Tokyo Story",
        "year": 1953,
        "region": "Japan",
        "director": "Yasujirō Ozu",
        "producer": "Takeshi Yamamoto",
        "writer": "Kogo Noda, Yasujirō Ozu",
        "cast": "Chishu Ryu, Chieko Higashiyama, Setsuko Hara",
        "time": "135 minutes"
    },
    "5 in the mood for love.jpg": {
        "title": "In the Mood for Love",
        "year": 2000,
        "region": "Hong Kong, France",
        "director": "Wong Kar Wai",
        "producer": "Wong Kar Wai",
        "writer": "Wong Kar Wai",
        "cast": "Maggie Cheung Man-yuk, Tony Leung Chiu-wai, Rebecca Pan Di-hua",
        "time": "98 minutes"
    },
    "6 2001 A Space Odyssey.jpg": {
        "title": "2001: A Space Odyssey",
        "year": 1968,
        "region": "USA, United Kingdom",
        "director": "Stanley Kubrick",
        "producer": "Stanley Kubrick",
        "writer": "Stanley Kubrick, Arthur C. Clarke",
        "cast": "Keir Dullea, Gary Lockwood, William Sylvester",
        "time": "141 minutes"
    },
    "7 Beau travail.jpg": {
        "title": "Beau travail",
        "year": 1998,
        "region": "France",
        "director": "Claire Denis",
        "producer": "Jérôme Minet, Patrick Grandperret",
        "writer": "Jean-Pol Fargeau, Claire Denis",
        "cast": "Denis Lavant, Michel Subor, Grégoire Colin",
        "time": "93 minutes"
    },
    "8 mulholland drive.jpg": {
        "title": "Mulholland Dr.",
        "year": 2001,
        "region": "France, USA",
        "director": "David Lynch",
        "producer": "Mary Sweeney, Alain Sarde, Neal Edelstein, Michael Polaire, Tony Krantz, Joyce Eliason",
        "writer": "David Lynch",
        "cast": "Justin Theroux, Naomi Watts, Laura Harring",
        "time": "146 minutes"
    },
    "9 man with a movie camera.jpg": {
        "title": "Man with a Movie Camera",
        "year": 1929,
        "region": "Ukrainian SSR, USSR",
        "director": "Dziga Vertov",
        "producer": "All-Ukrainian Photo",
        "writer": "Dziga Vertov",
        "cast": "Mikhail Kaufman",
        "time": "67 minutes"
    },
    "10 Singin in the Rain.jpg": {
        "title": "Singin' in the Rain",
        "year": 1951,
        "region": "USA",
        "director": "Gene Kelly, Stanley Donen",
        "producer": "Arthur Freed",
        "writer": "Adolph Green, Betty Comden",
        "cast": "Gene Kelly, Donald O'Connor, Debbie Reynolds",
        "time": "102 minutes"
    },
    "11 sunrise a song of two humans.jpg": {
        "title": "Sunrise: A Song of Two Humans",
        "year": 1927,
        "region": "USA",
        "director": "F.W. Murnau",
        "producer": "William Fox",
        "writer": "Carl Mayer",
        "cast": "George O'Brien, Janet Gaynor, Margaret Livingston",
        "time": "97 minutes"
    },
    "12 the god father.jpg": {
        "title": "The Godfather",
        "year": 1972,
        "region": "USA",
        "director": "Francis Ford Coppola",
        "producer": "Albert S. Ruddy",
        "writer": "Mario Puzo, Francis Ford Coppola, Robert Towne",
        "cast": "Marlon Brando, Al Pacino, James Caan",
        "time": "175 minutes"
    },
    "13 La Regle du jeu.jpg": {
        "title": "La Règle du jeu",
        "year": 1939,
        "region": "France",
        "director": "Jean Renoir",
        "producer": "Claude Renoir",
        "writer": "Jean Renoir",
        "cast": "Nora Gregor, Paulette Dubost, Mila Parély",
        "time": "84 minutes"
    },
    "14 Cleo from 5 to 7.jpg": {
        "title": "Cléo from 5 to 7",
        "year": 1962,
        "region": "France, Italy",
        "director": "Agnès Varda",
        "producer": "Georges de Beauregard, Carlo Ponti",
        "writer": "Agnès Varda",
        "cast": "Corinne Marchand, Antoine Bourseiller, Dominique Davray",
        "time": "90 minutes"
    },
    "15 the searchers.jpg": {
        "title": "The Searchers",
        "year": 1956,
        "region": "USA",
        "director": "John Ford",
        "producer": "C.V. Whitney Pictures",
        "writer": "Frank S. Nugent",
        "cast": "John Wayne, Jeffrey Hunter, Vera Miles",
        "time": "117 minutes"
    },
    "16 Meshes of the Afternoon.jpg": {
        "title": "Meshes of the Afternoon",
        "year": 1943,
        "region": "USA",
        "director": "Maya Deren, Alexander Hackenschmied",
        "producer": "Maya Deren",
        "writer": "Maya Deren",
        "cast": "Maya Deren, Alexandr Hackenschmied",
        "time": "14 minutes"
    },
    "17 close up.jpg": {
        "title": "Close-up",
        "year": 1989,
        "region": "Iran",
        "director": "Abbas Kiarostami",
        "producer": "Ali Reza Zarrin",
        "writer": "Abbas Kiarostami",
        "cast": "Hossein Sabziyan, Mohsen Makhmalbaf, Abolfazl Ahankhah",
        "time": "100 minutes"
    },
    "18 persona.jpg": {
        "title": "Persona",
        "year": 1966,
        "region": "USA, United Kingdom",
        "director": "Ingmar Bergman",
        "producer": "Ingmar Bergman",
        "writer": "Ingmar Bergman",
        "cast": "Bibi Andersson, Liv Ullmann, Margareta Krook",
        "time": "81 minutes"
    },
    "19 Apocalypse Now.jpg": {
        "title": "Apocalypse Now",
        "year": 1979,
        "region": "USA",
        "director": "Francis Ford Coppola",
        "producer": "Francis Ford Coppola, Francis Ford Coppola, Kim Aubry",
        "writer": "John Milius, Francis Ford Coppola, Francis Ford Coppola",
        "cast": "Marlon Brando, Robert Duvall, Martin Sheen",
        "time": "141 minutes"
    },
    "20 seven samurai.jpg": {
        "title": "Seven Samurai",
        "year": 1954,
        "region": "Japan",
        "director": "Akira Kurosawa",
        "producer": "Sojiro Motoki",
        "writer": "Shinobu Hashimoto, Hideo Oguni, Akira Kurosawa",
        "cast": "Takashi Shimura, Toshiro Mifune, Seiji Miyaguchi",
        "time": "200 minutes"
    },
    "21 the passion of joan of arc.jpg": {
        "title": "The Passion of Joan of Arc",
        "year": 1927,
        "region": "France",
        "director": "Carl Th. Dreyer",
        "producer": "NA",
        "writer": "Carl Th. Dreyer",
        "cast": "Renée Falconetti, Eugène-Charles-Joseph Silvain, Maurice Schutz",
        "time": "80 minutes"
    },
    "22 late spring.jpg": {
        "title": "Late Spring",
        "year": 1949,
        "region": "Japan",
        "director": "Yasujirō Ozu",
        "producer": "Takeshi Yamamoto",
        "writer": "Kogo Noda, Yasujirō Ozu",
        "cast": "Chishu Ryu, Setsuko Hara, Yumeji Tsukioka",
        "time": "108 minutes"
    },
    "23 playtime.jpg": {
        "title": "Playtime",
        "year": 1967,
        "region": "France",
        "director": "Jacques Tati",
        "producer": "Bernard Maurice",
        "writer": "Jacques Tati, Jacques Lagrange",
        "cast": "Jacques Tati, Barbara Dennek, Rita Maïden",
        "time": "152 minutes"
    },
    "24 do the right thing.jpg": {
        "title": "Do the Right Thing",
        "year": 1989,
        "region": "USA",
        "director": "Spike Lee",
        "producer": "Spike Lee",
        "writer": "Spike Lee",
        "cast": "Danny Aiello, Ossie Davis, Ruby Dee",
        "time": "120 minutes"
    },
    "25 au hasaard balthazar.jpg": {
        "title": "Au hasard Balthazar",
        "year": 1966,
        "region": "France, Sweden",
        "director": "Robert Bresson",
        "producer": "Mag Bodard",
        "writer": "Robert Bresson",
        "cast": "Anne Wiazemsky, Walter Green, François Lafarge",
        "time": "95 minutes"
    },
    "26 the night of the hunter.jpg": {
        "title": "The Night of the Hunter",
        "year": 1955,
        "region": "USA",
        "director": "Charles Laughton",
        "producer": "Paul Gregory",
        "writer": "James Agee",
        "cast": "Robert Mitchum, Shelley Winters, Lillian Gish",
        "time": "92 minutes"
    },
    "27 shoah.jpg": {
        "title": "Shoah",
        "year": 1985,
        "region": "France",
        "director": "Claude Lanzmann",
        "producer": "NA",
        "writer": "NA",
        "cast": "Richard Glazar, Raul Hilberg, Filip Müller, Mordechaï Podchlebnik, Simon Srebrnik, Rudolf Vrba",
        "time": "566 minutes"
    },
    "28 daisies.jpg": {
        "title": "Daisies",
        "year": 1966,
        "region": "Czechoslovakia",
        "director": "Věra Chytilová",
        "producer": "Bohumil Smída, Ladislav Fikar",
        "writer": "Ester Krumbachová, Věra Chytilová",
        "cast": "Jitka Cerhová, Ivana Karbanová, Julius Albert",
        "time": "76 minutes"
    },
    "29 taxi driver.jpg": {
        "title": "Taxi Driver",
        "year": 1976,
        "region": "USA",
        "director": "Martin Scorsese",
        "producer": "Michael Phillips, Julia Phillips",
        "writer": "Paul Schrader",
        "cast": "Robert De Niro, Jodie Foster, Albert Brooks",
        "time": "114 minutes"
    },
    "30 portrait of a lady on fire.jpg": {
        "title": "Portrait of a Lady on Fire",
        "year": 2019,
        "region": "France",
        "director": "Céline Sciamma",
        "producer": "Bénédicte Couvreur",
        "writer": "Céline Sciamma",
        "cast": "Noémie Merlant, Adèle Haenel, Luàna Bajrami",
        "time": "122 minutes"
    },
    "31 mirror.jpg": {
        "title": "Mirror",
        "year": 1975,
        "region": "USSR",
        "director": "Andrei Tarkovsky",
        "producer": "E. Waisberg",
        "writer": "Aleksandr Misharin, Andrei Tarkovsky",
        "cast": "Margarita Terekhova, Ignat Daniltsev, Maria Tarkovskaya",
        "time": "106 minutes"
    },
    "32 psycho.jpg": {
        "title": "Psycho",
        "year": 1960,
        "region": "USA",
        "director": "Alfred Hitchcock",
        "producer": "Alfred Hitchcock",
        "writer": "Joseph Stefano",
        "cast": "Anthony Perkins, Vera Miles, John Gavin",
        "time": "108 minutes"
    },
    "33 8½.jpg": {
        "title": "8½",
        "year": 1963,
        "region": "Italy, France",
        "director": "Federico Fellini",
        "producer": "Angelo Rizzoli",
        "writer": "Federico Fellini, Tullio Pinelli, Ennio Flaiano, Brunello Rondi",
        "cast": "Marcello Mastroianni, Claudia Cardinale, Anouk Aimée",
        "time": "138 minutes"
    },
    "34 L Atalante.jpg": {
        "title": "L'Atalante",
        "year": 1934,
        "region": "France",
        "director": "Jean Vigo",
        "producer": "Jacques-Louis Nounez",
        "writer": "Jean Vigo, Albert Riéra",
        "cast": "Michel Simon, Dita Parlo, Jean Dasté",
        "time": "89 minutes"
    },
    "35 Pather Panchali.jpg": {
        "title": "Pather Panchali",
        "year": 1955,
        "region": "India",
        "director": "Satyajit Ray",
        "producer": "Government of West Bengal",
        "writer": "Satyajit Ray",
        "cast": "Kanu Banerjee, Karuna Banerjee, Subir Banerjee",
        "time": "121 minutes"
    },
    "36 city lights.jpg": {
        "title": "City Lights",
        "year": 1931,
        "region": "USA",
        "director": "Charles Chaplin",
        "producer": "Charles Chaplin",
        "writer": "Charles Chaplin",
        "cast": "Virginia Cherrill, Florence Lee, Harry Myers",
        "time": "87 minutes"
    },
    "37 M.jpg": {
        "title": "M",
        "year": 1931,
        "region": "Germany",
        "director": "Fritz Lang",
        "producer": "Seymour Nebenzal",
        "writer": "Thea von Harbou, Fritz Lang",
        "cast": "Peter Lorre, Ellen Widmann, Inge Landgut",
        "time": "117 minutes"
    },
    "38 some like it hot.jpg": {
        "title": "Some Like It Hot",
        "year": 1959,
        "region": "USA",
        "director": "Billy Wilder",
        "producer": "Billy Wilder",
        "writer": "Billy Wilder, I.A.L. Diamond",
        "cast": "Marilyn Monroe, Tony Curtis, Jack Lemmon",
        "time": "120 minutes"
    },
    "39 A bout de souffle.jpg": {
        "title": "À bout de souffle",
        "year": 1960,
        "region": "France",
        "director": "Jean-Luc Godard",
        "producer": "Georges de Beauregard",
        "writer": "Jean-Luc Godard",
        "cast": "Jean-Paul Belmondo, Jean Seberg, Henri-Jacques Huet",
        "time": "90 minutes"
    },
    "40 rear window.jpg": {
        "title": "Rear Window",
        "year": 1954,
        "region": "USA",
        "director": "Alfred Hitchcock",
        "producer": "Alfred Hitchcock",
        "writer": "John Michael Hayes",
        "cast": "James Stewart, Grace Kelly, Wendell Corey",
        "time": "112 minutes"
    },
    "41 bicycle thieves.jpg": {
        "title": "Bicycle Thieves",
        "year": 1948,
        "region": "Italy",
        "director": "Vittorio De Sica",
        "producer": "Giuseppe Amato, Vittorio De Sica",
        "writer": "Oreste Biancoli, Suso Cecchi D'amico, Vittorio De Sica, Adolfo Franci, Gherardo Gherardi, Gerardo Guerrieri, Cesare Zavattini",
        "cast": "Lamberto Maggiorani, Enzo Staiola, Lianella Carell",
        "time": "96 minutes"
    },
    "42 Rashomon.jpg": {
        "title": "Rashomon",
        "year": 1950,
        "region": "Japan",
        "director": "Akira Kurosawa",
        "producer": "Jinkichi Minoru, Sojiro Motoki",
        "writer": "Akira Kurosawa, Shinobu Hashimoto",
        "cast": "Toshiro Mifune, Machiko Kyo, Takashi Shimura",
        "time": "83 minutes"
    },
    "43 killer of sheep.jpg": {
        "title": "Killer of Sheep",
        "year": 1977,
        "region": "USA",
        "director": "Charles Burnett",
        "producer": "Charles Burnett",
        "writer": "Charles Burnett",
        "cast": "Henry G. Sanders, Kaycee Moore, Charles Bracy",
        "time": "84 minutes"
    },
    "44 stalker.jpg": {
        "title": "Stalker",
        "year": 1979,
        "region": "USSR",
        "director": "Andrei Tarkovsky",
        "producer": "Aleksandra Demidova",
        "writer": "Arkady Strugatsky, Boris Strugatsky",
        "cast": "Aleksandr Kaidanovsky, Anatoli Solonitsyn, Nikolai Grinko",
        "time": "161 minutes"
    },
    "45 the battle of algiers.jpg": {
        "title": "The Battle of Algiers",
        "year": 1966,
        "region": "Italy, Algeria",
        "director": "Gillo Pontecorvo",
        "producer": "Antonio Musu, Yacef Sâadi",
        "writer": "Franco Solinas",
        "cast": "Brahim Haggiag, Jean Martin, Yacef Sâadi",
        "time": "135 minutes"
    },
    "46 North by Northwest.jpg": {
        "title": "North by Northwest",
        "year": 1959,
        "region": "USA",
        "director": "Alfred Hitchcock",
        "producer": "Alfred Hitchcock",
        "writer": "Ernest Lehman",
        "cast": "Cary Grant, Eva Marie Saint, James Mason",
        "time": "136 minutes"
    },
    "47 barry lyndon.jpg": {
        "title": "Barry Lyndon",
        "year": 1975,
        "region": "USA, United Kingdom",
        "director": "Stanley Kubrick",
        "producer": "Stanley Kubrick",
        "writer": "Stanley Kubrick",
        "cast": "Michael Hordern, Ryan O'Neal, Marisa Berenson",
        "time": "187 minutes"
    },
    "48 Wanda.jpg": {
        "title": "Wanda",
        "year": 1970,
        "region": "USA",
        "director": "Barbara Loden",
        "producer": "Harry Shuster",
        "writer": "Barbara Loden",
        "cast": "Barbara Loden, Michael Higgins, Dorothy Shupenes",
        "time": "100 minutes"
    },
    "49 Ordet.jpg": {
        "title": "Ordet",
        "year": 1955,
        "region": "Denmark",
        "director": "Carl Th. Dreyer",
        "producer": "Erik Nielsen",
        "writer": "Carl Th. Dreyer",
        "cast": "Henrik Malberg, Emil Hass Christensen, Preben Lerdorff Rye",
        "time": "126 minutes"
    },
    "50 the 400 blows.jpg": {
        "title": "The 400 Blows",
        "year": 1959,
        "region": "France",
        "director": "François Truffaut",
        "producer": "François Truffaut, Georges Charlot",
        "writer": "François Truffaut",
        "cast": "Jean-Pierre Léaud, Claire Maurier, Albert Rémy",
        "time": "94 minutes"
    },
    "51 the piano.jpg": {
        "title": "The Piano",
        "year": 1992,
        "region": "Australia, France",
        "director": "Jane Campion",
        "producer": "Jan Chapman",
        "writer": "Jane Campion",
        "cast": "Holly Hunter, Harvey Keitel, Sam Neill",
        "time": "120 minutes"
    },
    "52 fear eats the soul.jpg": {
        "title": "Fear Eats the Soul",
        "year": 1974,
        "region": "Federal Republic of Germany",
        "director": "Rainer Werner Fassbinder",
        "producer": "Michael Fengler, Rainer Werner Fassbinder",
        "writer": "Rainer Werner Fassbinder",
        "cast": "Brigitte Mira, El Hedi ben Salem, Irm Hermann",
        "time": "92 minutes"
    },
    "53 news from home.jpg": {
        "title": "News from Home",
        "year": 1976,
        "region": "France, Belgium",
        "director": "Chantal Akerman",
        "producer": "Alain Dahan",
        "writer": "Chantal Akerman",
        "cast": "Chantal Akerman",
        "time": "90 minutes"
    },
    "54 blade runner.jpg": {
        "title": "Blade Runner",
        "year": 1982,
        "region": "USA, Hong Kong",
        "director": "Ridley Scott",
        "producer": "Michael Deeley",
        "writer": "Hampton Fancher, David Webb Peoples",
        "cast": "Harrison Ford, Rutger Hauer, Sean Young",
        "time": "117 minutes"
    },
    "55 Battleship Potemkin.jpg": {
        "title": "Battleship Potemkin",
        "year": 1925,
        "region": "USSR",
        "director": "Sergei M. Eisenstein",
        "producer": "Jacob Bliokh",
        "writer": "Sergei M. Eisenstein",
        "cast": "Aleksandr Antonov, Vladimir Barsky, Grigori V. Aleksandrov",
        "time": "72 minutes"
    },
    "56 le mepris.jpg": {
        "title": "Le Mépris",
        "year": 1963,
        "region": "France, Italy",
        "director": "Jean-Luc Godard",
        "producer": "Georges de Beauregard, Carlo Ponti",
        "writer": "Jean-Luc Godard",
        "cast": "Brigitte Bardot, Michel Piccoli, Jack Palance",
        "time": "103 minutes"
    },
    "57 sherlock jr.jpg": {
        "title": "Sherlock Jr.",
        "year": 1924,
        "region": "USA",
        "director": "Buster Keaton",
        "producer": "Joseph M. Schenck",
        "writer": "Clyde Bruckman, Jean Havez, Joseph A. Mitchell",
        "cast": "Buster Keaton, Kathryn Mcguire, Joe Keaton",
        "time": "45 minutes"
    },
    "58 The Apartment.jpg": {
        "title": "The Apartment",
        "year": 1960,
        "region": "USA",
        "director": "Billy Wilder",
        "producer": "Billy Wilder",
        "writer": "Billy Wilder, I.A.L. Diamond",
        "cast": "Jack Lemmon, Shirley MacLaine, Fred MacMurray",
        "time": "125 minutes"
    },
    "59 sans soleil.jpg": {
        "title": "Sans Soleil",
        "year": 1982,
        "region": "France",
        "director": "Chris Marker",
        "producer": "Anatole Dauman",
        "writer": "Chris Marker",
        "cast": "Florence Delay, Alexandra Stewart",
        "time": "100 minutes"
    },
    "60 moonlight.jpg": {
        "title": "Moonlight",
        "year": 2016,
        "region": "USA",
        "director": "Barry Jenkins",
        "producer": "Adele Romanski, Dede Gardner, Jeremy Kleiner",
        "writer": "Barry Jenkins",
        "cast": "Rhodes, Trevante, André Holland, Janelle Monáe",
        "time": "110 minutes"
    },
    "61 la dolce vita.jpg": {
        "title": "La dolce vita",
        "year": 1960,
        "region": "Italy, France",
        "director": "Federico Fellini",
        "producer": "Giuseppe Amato, Angelo Rizzoli",
        "writer": "Federico Fellini, Ennio Flaiano, Tullio Pinelli",
        "cast": "Marcello Mastroianni, Anita Ekberg, Anouk Aimée",
        "time": "174 minutes"
    },
    "62 daughters of the dust.jpg": {
        "title": "Daughters of the Dust",
        "year": 1991,
        "region": "USA",
        "director": "Julie Dash",
        "producer": "Julie Dash, Arthur Jafa",
        "writer": "Julie Dash",
        "cast": "Adisa Anderson, Barbara O. Jones, Cheryl Lynn Bruce",
        "time": "112 minutes"
    },
    "63 Casablanca.jpg": {
        "title": "Casablanca",
        "year": 1942,
        "region": "USA",
        "director": "Michael Curtiz",
        "producer": "Hal B. Wallis",
        "writer": "Julius J. Epstein, Philip G. Epstein, Howard Koch",
        "cast": "Lou Marcelle, Humphrey Bogart, Ingrid Bergman",
        "time": "102 minutes"
    },
    "64 GoodFellas.jpg": {
        "title": "GoodFellas",
        "year": 1990,
        "region": "USA",
        "director": "Martin Scorsese",
        "producer": "Irwin Winkler",
        "writer": "Nicholas Pileggi, Martin Scorsese",
        "cast": "Robert De Niro, Ray Liotta, Joe Pesci",
        "time": "145 minutes"
    },
    "65 the third man.jpg": {
        "title": "The Third Man",
        "year": 1949,
        "region": "United Kingdom",
        "director": "Carol Reed",
        "producer": "Carol Reed",
        "writer": "Graham Greene",
        "cast": "Carol Reed, Joseph Cotten, Joseph Cotten",
        "time": "104 minutes"
    },
    "66 touki bouki.jpg": {
        "title": "Touki Bouki",
        "year": 1973,
        "region": "Senegal",
        "director": "Djibril Diop Mambéty",
        "producer": "Cinegrit, Studio Kankourama",
        "writer": "Djibril Diop Mambéty",
        "cast": "Magaye Niang, Mareme Niang, Christophe N'doulabia",
        "time": "95 minutes"
    },
    "67 the gleaners and i.jpg": {
        "title": "The Gleaners and I",
        "year": 2000,
        "region": "France",
        "director": "Agnès Varda",
        "producer": "Agnès Varda",
        "writer": "NA",
        "cast": "François Wertheimer, Agnès Varda, La Planche, Jean",
        "time": "76 minutes"
    },
    "68 la jetee.jpg": {
        "title": "La Jetée",
        "year": 1962,
        "region": "France",
        "director": "Chris Marker",
        "producer": "Anatole Dauman",
        "writer": "Chris Marker",
        "cast": "Jean Négroni, Hélène Chatelain, Davos Hanich",
        "time": "28 minutes"
    },
    "69 andrei rublev.jpg": {
        "title": "Andrei Rublev",
        "year": 1966,
        "region": "USSR",
        "director": "Andrei Tarkovsky",
        "producer": "Tamara Ogorodnikova",
        "writer": "Andrei Konchalovsky, Andrei Tarkovsky",
        "cast": "Anatoli Solonitsyn, Ivan Lapikov, Nikolai Grinko",
        "time": "182 minutes"
    },
    "70 Metropolis.jpg": {
        "title": "Metropolis",
        "year": 1927,
        "region": "Germany",
        "director": "Fritz Lang",
        "producer": "Erich Pommer",
        "writer": "Fritz Lang, Thea von Harbou",
        "cast": "Brigitte Helm, Alfred Abel, Gustav Fröhlich",
        "time": "137 minutes"
    },
    "71 the red shoes.jpg": {
        "title": "The Red Shoes",
        "year": 1948,
        "region": "United Kingdom",
        "director": "Michael Powell, Emeric Pressburger",
        "producer": "Michael Powell, Emeric Pressburger",
        "writer": "Michael Powell, Emeric Pressburger",
        "cast": "Anton Walbrook, Marius Goring, Moira Shearer",
        "time": "136 minutes"
    },
    "72 my neighbor totoro.jpg": {
        "title": "My Neighbour Totoro",
        "year": 1988,
        "region": "Japan",
        "director": "Hayao Miyazaki",
        "producer": "Toru Hara",
        "writer": "Hayao Miyazaki",
        "cast": "Lisa Michaelson, Cheryl Chase, Gregory Snegoff",
        "time": "87 minutes"
    },
    "73 Journey to Italy.jpg": {
        "title": "Journey to Italy",
        "year": 1954,
        "region": "Italy, France",
        "director": "Roberto Rossellini",
        "producer": "Roberto Rossellini, Adolfo Fossataro, Alfredo Guarini",
        "writer": "Roberto Rossellini, Vitaliano Brancati, Antonio Pietrangeli",
        "cast": "Giacomo Rondinella, Ingrid Bergman, George Sanders",
        "time": "106 minutes"
    },
    "74 L avventura.jpg": {
        "title": "L'avventura",
        "year": 1960,
        "region": "Italy, France",
        "director": "Michelangelo Antonioni",
        "producer": "Amato Pennasilico",
        "writer": "Michelangelo Antonioni, Elio Bartolini, Tonino Guerra",
        "cast": "Gabriele Ferzetti, Monica Vitti, Lea Massari",
        "time": "144 minutes"
    },
    "75 imitation of life.jpg": {
        "title": "Imitation of Life",
        "year": 1959,
        "region": "USA",
        "director": "Douglas Sirk",
        "producer": "Ross Hunter",
        "writer": "Eleanore Griffin, Allan Scott",
        "cast": "Lana Turner, John Gavin, Sandra Dee",
        "time": "125 minutes"
    },
    "76 sansho the bailiff.jpg": {
        "title": "Sansho the Bailiff",
        "year": 1954,
        "region": "Japan",
        "director": "Kenji Mizoguchi",
        "producer": "Masaichi Nagata",
        "writer": "Yoshikata Yoda, Yahiro Fuji",
        "cast": "Kinuyo Tanaka, Yoshiaki Hanayaki, Kyôko Kagawa",
        "time": "123 minutes"
    },
    "77 spirited away.jpg": {
        "title": "Spirited Away",
        "year": 2001,
        "region": "Japan",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
        "writer": "Hayao Miyazaki",
        "cast": "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
        "time": "125 minutes"
    },
    "78 satatango.jpg": {
        "title": "Sátántangó",
        "year": 1994,
        "region": "Hungary, Germany, Switzerland",
        "director": "Béla Tarr",
        "producer": "György Fehér, Joachim von Vietinghoff, Ruth Waldburger",
        "writer": "László Krasznahorkai, Béla Tarr",
        "cast": "Mihály Ráday, Mihály Víg, Putyi Horváth",
        "time": "430 minutes"
    },
    "79 A Brighter Summer Day.jpg": {
        "title": "A Brighter Summer Day",
        "year": 1991,
        "region": "Taiwan",
        "director": "Edward Yang",
        "producer": "Yu Weiyen",
        "writer": "Edward Yang, Yan Hongya, Yang Shunqing, Lai Mingtang",
        "cast": "Chang Chen, Lisa Yang, Zhang Guozhu",
        "time": "237 minutes"
    },
    "80 Celine and Julie Go Boating.jpg": {
        "title": "Céline and Julie Go Boating",
        "year": 1974,
        "region": "France",
        "director": "Jacques Rivette",
        "producer": "Barbet Schroeder",
        "writer": "Juliet Berto, Dominique Labourier, Bulle Ogier, Marie-France Pisier, Jacques Rivette",
        "cast": "Juliet Berto, Dominique Labourier, Bulle Ogier",
        "time": "192 minutes"
    },
    "81 Sunset Boulevard.jpg": {
        "title": "Sunset Blvd.",
        "year": 1950,
        "region": "USA",
        "director": "Billy Wilder",
        "producer": "Charles Brackett",
        "writer": "Charles Brackett, Billy Wilder, D.M. Marshman Jr",
        "cast": "William Holden, Gloria Swanson, Erich von Stroheim",
        "time": "110 minutes"
    },
    "82 Modern Times.jpg": {
        "title": "Modern Times",
        "year": 1936,
        "region": "USA",
        "director": "Charles Chaplin",
        "producer": "Charles Chaplin",
        "writer": "Charles Chaplin",
        "cast": "Charles Chaplin, Paulette Goddard, Henry Bergman",
        "time": "87 minutes"
    },
    "83 a matter of life and death.jpg": {
        "title": "A Matter of Life and Death",
        "year": 1946,
        "region": "United Kingdom",
        "director": "Michael Powell, Emeric Pressburger",
        "producer": "Michael Powell, Emeric Pressburger",
        "writer": "Michael Powell, Emeric Pressburger",
        "cast": "David Niven, Roger Livesey, Raymond Massey",
        "time": "104 minutes"
    },
    "84 histoires du cinema.jpg": {
        "title": "Histoire(s) du Cinéma",
        "year": 1988,
        "region": "France, Switzerland",
        "director": "Jean-Luc Godard",
        "producer": "Canal+, Centre National de la Cinématographie, France 3, Gaumont, La Sept, Télévision Suisse Romande, Vega Films",
        "writer": "Jean-Luc Godard",
        "cast": "Juliette Binoche, Julie Delpy, Anne-Marie Miéville, André Malraux, Ezra Pound, Paul Celan",
        "time": "266 minutes"
    },
    "85 Pierrot le fou.jpg": {
        "title": "Pierrot le fou",
        "year": 1965,
        "region": "France, Italy",
        "director": "Jean-Luc Godard",
        "producer": "Georges de Beauregard",
        "writer": "Jean-Luc Godard",
        "cast": "Jean-Paul Belmondo, Anna Karina, Dirk Sanders",
        "time": "110 minutes"
    },
    "86 the spirit of the beehive.jpg": {
        "title": "The Spirit of the Beehive",
        "year": 1973,
        "region": "Spain",
        "director": "Víctor Erice",
        "producer": "Elías Querejeta",
        "writer": "Ángel Fernández Santos, Víctor Erice",
        "cast": "Fernando Fernán Gómez, Teresa Gimpera, Ana Torrent",
        "time": "98 minutes"
    },
    "87 blue velvet.jpg": {
        "title": "Blue Velvet",
        "year": 1986,
        "region": "USA",
        "director": "David Lynch",
        "producer": "Fred Caruso",
        "writer": "David Lynch",
        "cast": "Kyle MacLachlan, Isabella Rossellini, Dennis Hopper",
        "time": "120 minutes"
    },
    "88 CHUNGKING EXPRESS.jpg": {
        "title": "CHUNGKING EXPRESS",
        "year": 1994,
        "region": "Hong Kong",
        "director": "Wong Kar Wai",
        "producer": "Chan Yi-kan",
        "writer": "Wong Kar Wai",
        "cast": "Brigitte Lin Ching-hsia, Takeshi Kaneshiro, Tony Leung Chiu-wai",
        "time": "97 minutes"
    },
    "89 the shining.jpg": {
        "title": "The Shining",
        "year": 1980,
        "region": "USA, United Kingdom",
        "director": "Stanley Kubrick",
        "producer": "Stanley Kubrick",
        "writer": "Stanley Kubrick, Diane Johnson",
        "cast": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
        "time": "146 minutes"
    },
    "90 Madame de.jpg": {
        "title": "Madame de...",
        "year": 1953,
        "region": "France, Italy",
        "director": "Max Ophuls",
        "producer": "Henry Deutschmeister",
        "writer": "Marcel Achard, Max Ophuls, Annette Wademant",
        "cast": "Charles Boyer, Danielle Darrieux, Vittorio De Sica",
        "time": "102 minutes"
    },
    "91 The Leopard.jpg": {
        "title": "The Leopard",
        "year": 1963,
        "region": "Italy, France",
        "director": "Luchino Visconti",
        "producer": "Goffredo Lombardo",
        "writer": "Suso Cecchi D'amico, Pasquale Festa Campanile, Enrico Medioli, Massimo Franciosa, Luchino Visconti",
        "cast": "Burt Lancaster, Claudia Cardinale, Alain Delon",
        "time": "205 minutes"
    },
    "92 Ugetsu Monogatari.jpg": {
        "title": "Ugetsu Monogatari",
        "year": 1953,
        "region": "Japan",
        "director": "Kenji Mizoguchi",
        "producer": "Masaichi Nagata",
        "writer": "Matsutaro Kawaguchi, Yoshikata Yoda",
        "cast": "Masayuki Mori, Kinuyo Tanaka, Ichisaburo Sawamura",
        "time": "97 minutes"
    },
    "93 Yi Yi.jpg": {
        "title": "Yi Yi",
        "year": 1999,
        "region": "Taiwan, Japan",
        "director": "Edward Yang",
        "producer": "Shinya Kawai, Naoko Tsukeda",
        "writer": "Edward Yang",
        "cast": "Wu Nien-chen, Issey Ogata, Elaine Jin",
        "time": "173 minutes"
    },
    "94 Parasite.jpg": {
        "title": "Parasite",
        "year": 2019,
        "region": "Republic of Korea",
        "director": "Bong Joon-ho",
        "producer": "Kwak Sin-ae, Moon Yang-kwon",
        "writer": "Bong Joon-ho, Han Jin-won",
        "cast": "Song Kang-ho, Lee Sunkyun, Cho Yeo-jeong",
        "time": "132 minutes"
    },
    "95 get out.jpg": {
        "title": "Get Out",
        "year": 2017,
        "region": "USA, Japan",
        "director": "Jordan Peele",
        "producer": "Sean McKittrick, Jason Blum, Edward H. Hamm Jr, Jordan Peele",
        "writer": "Jordan Peele",
        "cast": "Daniel Kaluuya, Allison Williams, Bradley Whitford",
        "time": "103 minutes"
    },
    "96 tropical malady.jpg": {
        "title": "Tropical Malady",
        "year": 2004,
        "region": "France, Thailand, Germany, Italy, Switzerland",
        "director": "Apichatpong Weerasethakul",
        "producer": "Charles de Meaux",
        "writer": "Apichatpong Weerasethakul",
        "cast": "Banlop Lomnoi, Sakda Kaewbuadee, Sirivech Jareonchon",
        "time": "119 minutes"
    },
    "97 Black Girl.jpg": {
        "title": "Black Girl",
        "year": 1965,
        "region": "Senegal, France",
        "director": "Ousmane Sembène",
        "producer": "	André Zwoboda",
        "writer": "Ousmane Sembène",
        "cast": "Toto Bissainthe, Thérèse N'bissine Diop, Anne-Marie Jelinek",
        "time": "60 minutes"
    },
    "98 the general.jpg": {
        "title": "The General",
        "year": 1926,
        "region": "USA",
        "director": "Buster Keaton, Clyde Bruckman",
        "producer": "Joseph Schenck, Buster Keaton",
        "writer": "Buster Keaton, Clyde Bruckman",
        "cast": "Buster Keaton, Jack Lowe, Jack Hanlon",
        "time": "90 minutes"
    },
    "99 a man escaped.jpg": {
        "title": "A Man Escaped",
        "year": 1956,
        "region": "France",
        "director": "Robert Bresson",
        "producer": "Alain Poiré, Jean Thuillier",
        "writer": "Robert Bresson",
        "cast": "François Leterrier, Charles Le Clainche, Maurice Beerblock",
        "time": "102 minutes"
    },
    "100 Once Upon a Time in the West.jpg": {
        "title": "Once upon a Time in the West",
        "year": 1968,
        "region": "Italy, USA",
        "director": "Sergio Leone",
        "producer": "Fulvio Morsella, Sergio Leone",
        "writer": "Sergio Donati, Sergio Leone",
        "cast": "Claudia Cardinale, Henry Fonda, Jason Robards",
        "time": "168 minutes"
    },
    "101 rio bravo.jpg": {
        "title": "Rio Bravo",
        "year": 1958,
        "region": "USA",
        "director": "Howard Hawks",
        "producer": "Howard Hawks",
        "writer": "Jules Furthman, Leigh Brackett",
        "cast": "John Wayne, Dean Martin, Rick Nelson",
        "time": "141 minutes"
    },
    "102 the house is black.jpg": {
        "title": "The House Is Black",
        "year": 1962,
        "region": "Iran",
        "director": "Forough Farokhzad",
        "producer": "Ebrahim Golestan",
        "writer": "Forugh Farrokhzad",
        "cast": "NA",
        "time": "22 minutes"
    },
    "103 Vagabond.jpg": {
        "title": "Vagabond",
        "year": 1985,
        "region": "France, United Kingdom",
        "director": "Agnès Varda",
        "producer": "Oury Milshtein",
        "writer": "Agnès Varda",
        "cast": "Sandrine Bonnaire, Macha Méril, Stéphane Freiss",
        "time": "106 minutes"
    },
    "104 La Maman et la Putain.jpg": {
        "title": "La Maman et la Putain",
        "year": 1973,
        "region": "France",
        "director": "Jean Eustache",
        "producer": "Pierre Cottrell",
        "writer": "Jean Eustache",
        "cast": "Françoise Lebrun, Bernadette Lafont, Jean-Pierre Léaud",
        "time": "219 min"
    },
    "105 come and see.jpg": {
        "title": "Come and See",
        "year": 1985,
        "region": "USSR, Byelorussian SSR",
        "director": "Elem Klimov",
        "producer": "Belarusfilm, Mosfilm",
        "writer": "Ales Adamovich, Elem Klimov",
        "cast": "Alexei Kravchenko, Olga Mironova, Liubomiras Laucevicius",
        "time": "142 minutes"
    },
    "106 jaws.jpg": {
        "title": "Jaws",
        "year": 1975,
        "region": "USA",
        "director": "Steven Spielberg",
        "producer": "Richard D. Zanuck, David Brown",
        "writer": "Peter Benchley, Carl Gottlieb, Howard Sackler, John Milius",
        "cast": "Roy Scheider, Robert Shaw, Richard Dreyfuss",
        "time": "125 minutes"
    },
    "107 The Godfather Part II.jpg": {
        "title": "The Godfather Part II",
        "year": 1974,
        "region": "USA",
        "director": "Francis Ford Coppola",
        "producer": "Francis Ford Coppola",
        "writer": "Francis Ford Coppola, Mario Puzo",
        "cast": "Al Pacino, Robert Duvall, Diane Keaton",
        "time": "200 minutes"
    },
    "108 goodbye dragon inn.jpg": {
        "title": "Goodbye, Dragon Inn",
        "year": 2003,
        "region": "Taiwan",
        "director": "Tsai Ming-liang",
        "producer": "Liang Hung Chih",
        "writer": "Tsai Ming-liang",
        "cast": "Lee Kang-sheng, Chen Shiang-chyi, Kiyonobu Mitamura",
        "time": "82 minutes"
    },
    "109 The Wizard of Oz.jpg": {
        "title": "The Wizard of Oz",
        "year": 1939,
        "region": "USA",
        "director": "Victor Fleming",
        "producer": "Mervyn Leroy",
        "writer": "Noel Langley, Florence Ryerson, Edgar Allan Woolf",
        "cast": "Judy Garland, Frank Morgan, Ray Bolger",
        "time": "98 minutes"
    },
    "110 wild strawberries.jpg": {
        "title": "Wild Strawberries",
        "year": 1957,
        "region": "Sweden",
        "director": "Ingmar Bergman",
        "producer": "Carl Anders Dymling",
        "writer": "Ingmar Bergman",
        "cast": "Victor Sjöström, Bibi Andersson, Ingrid Thulin",
        "time": "93 minutes"
    },
    "111 touch of evil.jpg": {
        "title": "Touch of Evil",
        "year": 1958,
        "region": "USA",
        "director": "Orson Welles",
        "producer": "Albert Zugsmith",
        "writer": "Orson Welles, Paul Monash",
        "cast": "Charlton Heston, Janet Leigh, Orson Welles",
        "time": "108 minutes"
    },
    "112 The Man Who Shot Liberty Valance.jpg": {
        "title": "The Man Who Shot Liberty Valance",
        "year": 1962,
        "region": "USA",
        "director": "John Ford",
        "producer": "Willis Goldbeck",
        "writer": "James Warner Bellah, Willis Goldbeck",
        "cast": "John Wayne, James Stewart, Vera Miles",
        "time": "123 minutes"
    },
    "113 bringing up baby.jpg": {
        "title": "Bringing Up Baby",
        "year": 1938,
        "region": "USA",
        "director": "Howard Hawks",
        "producer": "Cliff Reid, Howard Hawks",
        "writer": "Dudley Nichols, Hagar Wilde",
        "cast": "Katharine Hepburn, Cary Grant, Charles Ruggles",
        "time": "102 minutes"
    },
    "114 to be or not to be.jpg": {
        "title": "To Be or Not to Be",
        "year": 1942,
        "region": "USA",
        "director": "Ernst Lubitsch",
        "producer": "Alexander Korda, Ernst Lubitsch, Ernst Lubitsch",
        "writer": "Edwin Justus Mayer",
        "cast": "Carole Lombard, Jack Benny, Robert Stack",
        "time": "99 minutes"
    },
    "115 a woman under the influence.jpg": {
        "title": "A Woman under the Influence",
        "year": 1974,
        "region": "USA",
        "director": "John Cassavetes",
        "producer": "Sam Shaw",
        "writer": "Sam Shaw",
        "cast": "Peter Falk, Gena Rowlands, Fred Draper",
        "time": "147 minutes"
    },
    "116 nashville.jpg": {
        "title": "Nashville",
        "year": 1975,
        "region": "USA",
        "director": "Robert Altman",
        "producer": "Robert Altman",
        "writer": "Joan Tewkesbury",
        "cast": "David Arkin, Barbara Baxley, Ned Beatty",
        "time": "160 minutes"
    },
    "117 don't look now.jpg": {
        "title": "Don't Look Now",
        "year": 1973,
        "region": "United Kingdom, Italy",
        "director": "Nicolas Roeg",
        "producer": "Peter Katz",
        "writer": "Allan Scott, Chris Bryant",
        "cast": "Julie Christie, Donald Sutherland, Hilary Mason",
        "time": "110 minutes"
    },
    "118 Aguirre, Wrath of God.jpg": {
        "title": "Aguirre, Wrath of God",
        "year": 1972,
        "region": "Federal Republic of Germany",
        "director": "Werner Herzog",
        "producer": "Werner Herzog",
        "writer": "Werner Herzog",
        "cast": "Klaus Kinski, Cecilia Rivera, Ruy Guerra",
        "time": "95 minutes"
    },
    "119 the conformist.jpg": {
        "title": "The Conformist",
        "year": 1970,
        "region": "Italy, France, Federal Republic of Germany",
        "director": "Bernardo Bertolucci",
        "producer": "Maurizio Lodi-Fé, Aldo U. Passalacqua",
        "writer": "Bernardo Bertolucci, Franco Arcalli",
        "cast": "Jean-Louis Trintignant, Stefania Sandrelli, Gastone Moschin",
        "time": "108 minutes"
    },
    "120 the texas chain saw massacre.jpg": {
        "title": "The Texas Chain Saw Massacre",
        "year": 1974,
        "region": "USA",
        "director": "Tobe Hooper",
        "producer": "Tobe Hooper",
        "writer": "Kim Henkel, Tobe Hooper",
        "cast": "John Larroquette, Marilyn Burns, Allen Danziger",
        "time": "83 minutes"
    },
    "121 the thing.jpg": {
        "title": "The Thing",
        "year": 1982,
        "region": "USA",
        "director": "John Carpenter",
        "producer": "David Foster, Lawrence Turman",
        "writer": "Bill Lancaster",
        "cast": "Kurt Russell, Wilford Brimley, T.K. Carter",
        "time": "109 minutes"
    },
    "122 there will be blood.jpg": {
        "title": "There Will Be Blood",
        "year": 2007,
        "region": "USA",
        "director": "Paul Thomas Anderson",
        "producer": "Joanne Sellar, Paul Thomas Anderson, Daniel Lupi",
        "writer": "Paul Thomas Anderson",
        "cast": "Daniel Day-Lewis, Paul Dano, Kevin J. O'Connor",
        "time": "158 minutes"
    },
    "123 the matrix.jpg": {
        "title": "The Matrix",
        "year": 1999,
        "region": "USA, Australia",
        "director": "The Wachowskis",
        "producer": "Joel Silver",
        "writer": "The Wachowskis",
        "cast": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        "time": "136 minutes"
    },
    "124 The Colour of Pomegranates.jpg": {
        "title": "The Colour of Pomegranates",
        "year": 1968,
        "region": "USSR, Armenian SSR",
        "director": "Sergei Paradjanov",
        "producer": "NA",
        "writer": "Sergei Paradjanov",
        "cast": "Sofiko Chiaureli, Sofiko Chiaureli, Sofiko Chiaureli",
        "time": "73 minutes"
    },
    "125 johnny guitar.jpg": {
        "title": "Johnny Guitar",
        "year": 1954,
        "region": "USA",
        "director": "Nicholas Ray",
        "producer": "Herbert J. Yates",
        "writer": "Philip Yordan",
        "cast": "Joan Crawford, Sterling Hayden, Mercedes McCambridge",
        "time": "110 minutes"
    },
    "126 the umbrellas of cherbourg.jpg": {
        "title": "The Umbrellas of Cherbourg",
        "year": 1964,
        "region": "France, Federal Republic of Germany",
        "director": "Jacques Demy",
        "producer": "Mag Bodard",
        "writer": "Jacques Demy",
        "cast": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon",
        "time": "91 minutes"
    },
    "127 Only Angels Have Wings.jpg": {
        "title": "Only Angels Have Wings",
        "year": 1939,
        "region": "USA",
        "director": "Howard Hawks",
        "producer": "Howard Hawks",
        "writer": "Jules Furthman",
        "cast": "Cary Grant, Jean Arthur, Richard Barthelmess",
        "time": "121 minutes"
    },
    "128 the ascent.jpg": {
        "title": "The Ascent",
        "year": 1976,
        "region": "USSR",
        "director": "Larissa Shepitko",
        "producer": "Mosfilm",
        "writer": "Yuri Klepikov, Larissa Shepitko",
        "cast": "Boris Plotnikov, Vladimir Gostyukhin, Sergei Jakovlev",
        "time": "105 minutes"
    },
    "129 fanny and alexander.jpg": {
        "title": "Fanny and Alexander",
        "year": 1982,
        "region": "Sweden, France, Federal Republic of Germany",
        "director": "Ingmar Bergman",
        "producer": "Jörn Donner",
        "writer": "Ingmar Bergman",
        "cast": "Kristina Adolphson, Börje Ahlstedt, Pernilla Allwin",
        "time": "188 minutes"
    },
    "130 His Girl Friday.jpg": {
        "title": "His Girl Friday",
        "year": 1939,
        "region": "USA",
        "director": "Howard Hawks",
        "producer": "Howard Hawks",
        "writer": "Charles Lederer",
        "cast": "Cary Grant, Rosalind Russell, Ralph Bellamy",
        "time": "92 minutes"
    },
    "131 raging bull.jpg": {
        "title": "Raging Bull",
        "year": 1980,
        "region": "USA",
        "director": "Martin Scorsese",
        "producer": "Irwin Winkler, Robert Chartoff, Peter Savage",
        "writer": "Paul Schrader, Mardik Martin",
        "cast": "Robert De Niro, Joe Pesci, Cathy Moriarty",
        "time": "129 minutes"
    },
    "132 pulp fiction.jpg": {
        "title": "Pulp Fiction",
        "year": 1994,
        "region": "USA",
        "director": "Quentin Tarantino",
        "producer": "Lawrence Bender",
        "writer": "Quentin Tarantino",
        "cast": "John Travolta, Samuel L. Jackson, Uma Thurman",
        "time": "149 minutes"
    },
    "133 Lawrence of Arabia.jpg": {
        "title": "Lawrence of Arabia",
        "year": 1962,
        "region": "United Kingdom",
        "director": "David Lean",
        "producer": "Sam Spiegel",
        "writer": "Robert Bolt, Michael Wilson",
        "cast": "Alec Guinness, Anthony Quinn, Jack Hawkins",
        "time": "222 minutes"
    },
    "134 notorious.jpg": {
        "title": "Notorious",
        "year": 1946,
        "region": "USA",
        "director": "Alfred Hitchcock",
        "producer": "Alfred Hitchcock",
        "writer": "Ben Hecht",
        "cast": "Cary Grant, Ingrid Bergman, Claude Rains",
        "time": "101 minutes"
    },
    "135 it's a wonderful life.jpg": {
        "title": "It's a Wonderful Life",
        "year": 1947,
        "region": "USA",
        "director": "Frank Capra",
        "producer": "Frank Capra",
        "writer": "Frances Goodrich, Albert Hackett, Frank Capra",
        "cast": "James Stewart, Donna Reed, Lionel Barrymore",
        "time": "129 minutes"
    },
    "136 la cienaga.jpg": {
        "title": "La ciénaga",
        "year": 2001,
        "region": "Argentina, USA, Japan, France, Switzerland, Spain, Brazil",
        "director": "Lucrecia Martel",
        "producer": "Lita Stantic",
        "writer": "Lucrecia Martel",
        "cast": "Mercedes Morán, Graciela Borges, Martín Adjemián",
        "time": "100 minutes"
    },
    "137 Les Enfants du paradis.jpg": {
        "title": "Les Enfants du paradis",
        "year": 1945,
        "region": "France",
        "director": "Marcel Carné",
        "producer": "André Paulvé",
        "writer": "Jacques Prévert",
        "cast": "Arletty, Jean-Louis Barrault, Pierre Brasseur",
        "time": "189 minutes"
    },
    "138 the wild bunch.jpg": {
        "title": "The Wild Bunch",
        "year": 1969,
        "region": "USA",
        "director": "Sam Peckinpah",
        "producer": "Phil Feldman",
        "writer": "Walon Green, Sam Peckinpah",
        "cast": "William Holden, Ernest Borgnine, Robert Ryan",
        "time": "148 minutes"
    },
    "139 Sambizanga.jpg": {
        "title": "Sambizanga",
        "year": 1972,
        "region": "Angola, France, Congo",
        "director": "Sarah Maldoror",
        "producer": "Isabelle Films",
        "writer": "Sarah Maldoror, Maurice Pons, Claude Agostini",
        "cast": "Wilson, Ana, Domingos Oliviera, Elisa Andrade",
        "time": "90 minutes"
    },
    "140 trouble in paradise.jpg": {
        "title": "Trouble in Paradise",
        "year": 1932,
        "region": "USA",
        "director": "Ernst Lubitsch",
        "producer": "Ernst Lubitsch",
        "writer": "Samson Raphaelson",
        "cast": "Miriam Hopkins, Kay Francis, Herbert Marshall",
        "time": "83 minutes"
    },
    "141 the seventh seal.jpg": {
        "title": "The Seventh Seal",
        "year": 1957,
        "region": "Sweden",
        "director": "Ingmar Bergman",
        "producer": "Allan Ekelund",
        "writer": "Ingmar Bergman",
        "cast": "Max von Sydow, Inga Landgré, Gunnar Björnstrand",
        "time": "95 minutes"
    },
    "142 pickpocket.jpg": {
        "title": "Pickpocket",
        "year": 1959,
        "region": "France",
        "director": "Robert Bresson",
        "producer": "Agnès Delahaie",
        "writer": "Robert Bresson",
        "cast": "Martín Lasalle, Marika Green, Jean Pelegri",
        "time": "75 minutes"
    },
    "143 partie de campagne.jpg": {
        "title": "Partie de campagne",
        "year": 1936,
        "region": "France",
        "director": "Jean Renoir",
        "producer": "Pierre Braunberger",
        "writer": "Jean Renoir",
        "cast": "Sylvia Bataille, Georges Darnoux, Jane Marken",
        "time": "40 minutes"
    },
    "144 all that heaven allows.jpg": {
        "title": "All That Heaven Allows",
        "year": 1955,
        "region": "USA",
        "director": "Douglas Sirk",
        "producer": "Ross Hunter",
        "writer": "Peg Fenwick",
        "cast": "Jane Wyman, Rock Hudson, Agnes Moorehead",
        "time": "89 minutes"
    },
    "145 Gertrud.jpg": {
        "title": "Gertrud",
        "year": 1964,
        "region": "Denmark",
        "director": "Carl Th. Dreyer",
        "producer": "Jørgen Nielsen",
        "writer": "Carl Th. Dreyer",
        "cast": "Nina Pens Rode, Bendt Rothe, Ebbe Rode",
        "time": "116 minutes"
    },
    "146 the watermelon woman.jpg": {
        "title": "The Watermelon Woman",
        "year": 1997,
        "region": "USA",
        "director": "Cheryl Dunye",
        "producer": "Barry Swimar, Alexandra Juhasz, Cheryl Dunye, Zoe Leonard",
        "writer": "Cheryl Dunye, Cheryl Dunye, Doug Mckeown",
        "cast": "Cheryl Dunye, Guinevere Turner, Valarie Walker",
        "time": "81 minutes"
    },
    "147 vampyr.jpg": {
        "title": "Vampyr",
        "year": 1932,
        "region": "Germany, France",
        "director": "Carl Th. Dreyer",
        "producer": "Carl Th. Dreyer, Nicolas de Gunzburg",
        "writer": "Carl Th. Dreyer, Christen Jul",
        "cast": "Nicolas de Gunzburg, Henriette Gérard, Sybille Schmitz",
        "time": "75 minutes"
    },
    "148 Alien.jpg": {
        "title": "Alien",
        "year": 1979,
        "region": "USA, United Kingdom",
        "director": "Ridley Scott",
        "producer": "Gordon Carroll, David Giler, Walter Hill",
        "writer": "Dan O'Bannon, Walter Hill, David Giler",
        "cast": "Tom Skerritt, Sigourney Weaver, Veronica Cartwright",
        "time": "117 minutes"
    },
    "149 india song.jpg": {
        "title": "India Song",
        "year": 1975,
        "region": "France",
        "director": "Marguerite Duras",
        "producer": "Stéphane Tchalgadjieff",
        "writer": "Marguerite Duras",
        "cast": "Delphine Seyrig, Michel Lonsdale, Mathieu Carrière",
        "time": "120 minutes"
    },
    "150 La Grande Illusion.jpg": {
        "title": "La Grande Illusion",
        "year": 1937,
        "region": "France",
        "director": "Jean Renoir",
        "producer": "Albert Pinkevitch, Frank Rollmer",
        "writer": "Charles Spaak, Jean Renoir",
        "cast": "Jean Gabin, Dita Parlo, Pierre Fresnay",
        "time": "114 minutes"
    },
    "151 Chinatown.jpg": {
        "title": "Chinatown",
        "year": 1974,
        "region": "USA",
        "director": "Roman Polanski",
        "producer": "Robert Evans",
        "writer": "Robert Towne",
        "cast": "Jack Nicholson, Faye Dunaway, John Hillerman",
        "time": "131 minutes"
    },
    "152 Twin Peaks The Return.jpg": {
        "title": "Twin Peaks: The Return",
        "year": 2017,
        "region": "USA",
        "director": "David Lynch",
        "producer": "Sabrina S. Sutherland",
        "writer": "David Lynch, Mark Frost",
        "cast": "Kyle MacLachlan, Sherilyn Fenn, Sheryl Lee",
        "time": "1080 minutes"
    },
    "153 West Indies- The Fugitive Slaves of Liberty.jpg": {
        "title": "West Indies: The Fugitive Slaves of Liberty",
        "year": 1979,
        "region": "France, Mauritania",
        "director": "Med Hondo",
        "producer": "NA",
        "writer": "Daniel Boukman, Med Hondo",
        "cast": "Roland Bertin, Hélène Vincent, Philippe Clévenot",
        "time": "110 minutes"
    },
    "154 Days of Heaven.jpg": {
        "title": "Days of Heaven",
        "year": 1978,
        "region": "USA",
        "director": "Terrence Malick",
        "producer": "Bert Schneider, Harold Schneider",
        "writer": "Terrence Malick",
        "cast": "Richard Gere, Brooke Adams, Sam Shepard",
        "time": "94 minutes"
    },
    "155 Meghe Dhaka Tara.jpg": {
        "title": "Meghe Dhaka Tara",
        "year": 1960,
        "region": "India",
        "director": "Ritwik Ghatak",
        "producer": "Ritwik Ghatak",
        "writer": "Ritwik Ghatak",
        "cast": "Supriya Devi, Anil Chatterjee, Bijon Bhattacharya",
        "time": "127 minutes"
    },
    "156 le bonheur.jpg": {
        "title": "Le Bonheur",
        "year": 1965,
        "region": "France",
        "director": "Agnès Varda",
        "producer": "Mag Bodard",
        "writer": "Agnès Varda",
        "cast": "Jean-Claude Drouot, Claire Drouot, Sandrine Drouot",
        "time": "79 minutes"
    },
    "157 west of the tracks.jpg": {
        "title": "West of the Tracks",
        "year": 2002,
        "region": "People's Republic of China",
        "director": "Wang Bing",
        "producer": "Wang Bing",
        "writer": "NA",
        "cast": "NA",
        "time": "556 minutes"
    },
    "158 orlando.jpg": {
        "title": "Orlando",
        "year": 1992,
        "region": "United Kingdom, Russian Federation, Italy, France, Netherlands",
        "director": "Sally Potter",
        "producer": "Christopher Sheppard, Laurie Borg",
        "writer": "Sally Potter",
        "cast": "Tilda Swinton, Billy Zane, Lothaire Bluteau",
        "time": "93 minutes"
    },
    "159 a city of sadness.jpg": {
        "title": "A City of Sadness",
        "year": 1989,
        "region": "Taiwan",
        "director": "Hou Hsiao-Hsien",
        "producer": "Ch'iu Fu-sheng",
        "writer": "Wu Nien-chen, Chu T'ien-Wen",
        "cast": "Li T'ien-lü, Ch'en Sung-yung, Gao Chieh",
        "time": "157 minutes"
    },
    "160 All about My Mother.jpg": {
        "title": "All about My Mother",
        "year": 1999,
        "region": "Spain, France",
        "director": "Pedro Almodóvar",
        "producer": "Agustín Almodóvar",
        "writer": "Pedro Almodóvar",
        "cast": "Cecilia Roth, Marisa Paredes, Candela Peña",
        "time": "99 minutes"
    },
    "161 where is the friend's house.jpg": {
        "title": "Where Is the Friend's House?",
        "year": 1987,
        "region": "Iran",
        "director": "Abbas Kiarostami",
        "producer": "Ali Reza Zarin",
        "writer": "Abbas Kiarostami",
        "cast": "Babek Ahmed Poor, Ahmed Ahmed Poor, Kheda Barech Defai",
        "time": "85 minutes"
    },
    "162 The Gospel According to St. Matthew.jpg": {
        "title": "The Gospel According to St. Matthew",
        "year": 1964,
        "region": "Italy, France",
        "director": "Pier Paolo Pasolini",
        "producer": "Alfredo Bini, Manolo Bolognini",
        "writer": "Pier Paolo Pasolini",
        "cast": "Enrique Irazoqui, Margherita Caruso, Susanna Pasolini",
        "time": "137 minutes"
    },
    "163 Once upon a Time in America.jpg": {
        "title": "Once upon a Time in America",
        "year": 1983,
        "region": "USA, Italy",
        "director": "Sergio Leone",
        "producer": "Arnon Milchan",
        "writer": "Leo Benvenuti, Piero De Bernardi, Enrico Medioli, Franco Arcalli, Franco Ferrini, Sergio Leone",
        "cast": "Robert De Niro, James Woods, Elizabeth McGovern",
        "time": "229 minutes"
    },
    "164 amarcord.jpg": {
        "title": "Amarcord",
        "year": 1972,
        "region": "Italy, France",
        "director": "Federico Fellini",
        "producer": "Franco Cristaldi",
        "writer": "Federico Fellini, Tonino Guerra",
        "cast": "Pupella Maggio, Armando Brancia, Magali Noël",
        "time": "127 minutes"
    },
    "165 Vivre sa vie.jpg": {
        "title": "Vivre sa vie",
        "year": 1962,
        "region": "France",
        "director": "Jean-Luc Godard",
        "producer": "Pierre Braunberger",
        "writer": "Jean-Luc Godard",
        "cast": "Anna Karina, Sady Rebbot, André S. Labarthe",
        "time": "85 minutes"
    },
    "166 Out of the Past.jpg": {
        "title": "Out of the Past",
        "year": 1947,
        "region": "USA",
        "director": "Jacques Tourneur",
        "producer": "Warren Duff",
        "writer": "Geoffrey Homes",
        "cast": "Robert Mitchum, Jane Greer, Kirk Douglas",
        "time": "97 minutes"
    },
    "167 ikiru.jpg": {
        "title": "Ikiru",
        "year": 1952,
        "region": "Japan",
        "director": "Akira Kurosawa",
        "producer": "Sojiro Motoki",
        "writer": "Shinobu Hashimoto, Hideo Oguni, Akira Kurosawa",
        "cast": "Takashi Shimura, Nobuo Kaneko, Kyoko Seki",
        "time": "130 minutes"
    },
    "168 los olvidados.jpg": {
        "title": "Los olvidados",
        "year": 1950,
        "region": "Mexico",
        "director": "Luis Buñuel",
        "producer": "Óscar Dancigers",
        "writer": "Luis Buñuel, Luís Alcoriza",
        "cast": "Estela Inda, Miguel Inclán, Alfonso Mejía",
        "time": "88 minutes"
    },
    
    
};



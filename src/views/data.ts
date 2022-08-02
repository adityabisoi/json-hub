const data = [
	{
		heading: 'Photos',
		desc: 'Returns photos with source link and name.',
		routes: [
			{
				route: 'GET /photos/',
				content: 'Return all the available photo data.',
				output: `
      [
        {
          "name": "red robot",
          "picture": "https://robohash.org/1"
        },
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
        {
          "name": "purple male robot",
          "picture": "https://robohash.org/3"
        },
        {
          "name": "purple female robot",
          "picture": "https://robohash.org/4"
        },
        {
          "name": "green antena robot",
          "picture": "https://robohash.org/5"
        },
        {
          "name": "yellow son robot",
          "picture": "https://robohash.org/6"
        }
      ]`,
			},
			{
				route: 'GET /photos/2',
				content: 'Returns the photo at index 2 as specified in photodata.json.',
				output: `
      [
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
      ]`,
			},
			{
				route: 'GET /photos/2?count=3',
				content: 'Starts from the photo at index 2 and returns a total of 3 photos.',
				output: `
      [
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
        {
          "name": "purple male robot",
          "picture": "https://robohash.org/3"
        },
        {
          "name": "purple female robot",
          "picture": "https://robohash.org/4"
        },
      ]`,
			},
		],
	},
	{
		heading: 'Comments',
		desc: 'Returns dummy comments.',
		routes: [
			{
				route: 'GET /comments/',
				content: 'Returns all the available dummy comments.',
				output: `
    [
      {
          "profile": "https://images.unsplash.com/photo-1552207802-77bcb0d13122?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER1",
          "data": " Lorem Ipsum"
      },
      {
          "profile": "https://images.unsplash.com/photo-1523536777042-c391e30190ef?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER2",
          "data": "dolor sit amet"
      },
      {
          "profile": "https://images.unsplash.com/photo-1589676383923-3c4e9ec0b94d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER3",
          "data": "consectetur adipiscing elit"
      },
      {
          "profile": "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER4",
          "data": "sed do eiusmod tempor"
      },
      {
          "profile": "https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lyYWZmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER5",
          "data": "incididunt ut labore et dolore"
      },
      {
          "profile": "https://images.unsplash.com/photo-1516255648388-71880c3cf449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcGFyZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "name": "USER6",
          "data": "Ut enim ad minim veniam,"
      },
  ]`,
			},
		],
	},
	{
		heading: 'Tasks',
		desc: 'Returns dummy data realted to daily life activities.',
		routes: [
			{
				route: 'GET /tasks/2',
				content: 'Returns the task at index 2 as specified in taskdata.json.',
				output: `
      {
        "task_name": "eating",
        "completed": false,
        "details": "having nice and healthy food"
      }`,
			},
			{
				route: 'GET /tasks/2?count=3',
				content: 'Starts from the task at index 2 and returns a total of 3 tasks.',
				output: `
      [
        {
          "task_name": "eating",
          "completed": false,
          "details": "having nice and healthy food"
        },
        {
          "task_name": "sleeping",
          "completed": true,
          "details": "have a good sleep"
        },
        {
          "task_name": "writing",
          "completed": true,
          "details": "write a diary entry or blog posts to have thoughts organized"
        }
      ]`,
			},
			{
				route: 'GET /tasks?count=2',
				content: 'Returns 2 tasks, starting at index 0 by default.',
				output: `
      [
        {
          "task_name": "reading",
          "completed": true,
          "details": "keep up with the world and broaden your horizons"
        },
        {
          "task_name": "drinking",
          "completed": true,
          "details": "drink delicious chai or coffee"
        }
      ]`,
			},
		],
	},
	{
		heading: 'Users',
		desc: 'Returns dummy user data.',
		routes: [
			{
				route: 'GET /users/',
				content: 'Return all the available dummy user data.',
				output: `
      [
        {
          "id": "1",
          "first_name": "Becky",
          "last_name": "Blasbad",
          "email": "beck1blas4@gmail.com"
        },
        {
          "id": "2",
          "first_name": "Andry",
          "last_name": "Gentry",
          "email": "Anrygen002@gmail.com"
        },
        {
          "id": "3",
          "first_name": "David",
          "last_name": "Griffin",
          "email": "Devdavid9@gmail.com"
        }
      ]`,
			},
			{
				route: 'GET /users/:userId',
				content: 'Return dummy user data with the matching Id.',
				output: `
      {
        "id": "1",
        "first_name": "Becky",
        "last_name": "Blasbad",
        "email": "beck1blas4@gmail.com"
      }`,
			},
			{
				route: 'PATCH /users/',
				content: 'Returns dummy user data with the current timestamp.',
				output: `
      {
        "id": "1",
        "first_name": "Becky",
        "last_name": "Blasbad",
        "email": "beck1blas4@gmail.com",
        "timestamp": "2021-03-31 18-00"
      }`,
			},
		],
	},
	{
		heading: 'Food Photos',
		desc: 'Returns photos of food with source link, name and taste.',
		routes: [
			{
				route: 'GET /photos/food/',
				content: 'Return all the available foodphoto data.',
				output: `
      [
        {
          "name": "pizza",
          "taste": "spicy",
          "picture": "https://source.unsplash.com/Oxb84ENcFfU/1600x900"
        },
        {
          "name": "burger",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png"
        },
        {
          "name": "pasta",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/dish_images/bbdabeeb71f0962aff2d87cfc57860061612437785.png"
        },
        {
          "name": "chicken",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
        },
      ]`,
			},
			{
				route: 'GET /photos/food/taste',
				content: 'Return all the available food taste data.',
				output: `[
          {
            "taste": ["spicy", "nutty", "sweet"]
          }
        ]`,
			},
		],
	},
	{
		heading: 'Vehicles',
		desc: 'Returns placeholder vehicle data',
		routes: [
			{
				route: 'GET /vehicles/2',
				content: 'Returns the vehicle data at index 2 as specified in vehicledata.json.',
				output: `
      {
        "name": "Model Y",
        "manufacturer": "Tesla",
        "type": "hatchback",
        "fuel": "hybrid",
        "color": "white",
        "vin": "8I3HVRVMUXJT75742",
        "vrm": "BX22GHM"
      }`,
			},
			{
				route: 'GET /vehicles?manufacturer=Tesla',
				content: 'Return the vehicle data where manufacturer name is Tesla.',
				output: `
      [
        {
            "name": "Model Y",
            "manufacturer": "Tesla",
            "type": "hatchback",
            "fuel": "hybrid",
            "color": "white",
            "vin": "8I3HVRVMUXJT75742",
            "vrm": "BX22GHM"
        },
        {
            "name": "Model X",
            "manufacturer": "Tesla",
            "type": "sedan",
            "fuel": "electric",
            "color": "lime",
            "vin": "IK2UNZV1L1SD11839",
            "vrm": "BC81XXS"
        },
        {
          "name": "Model 3",
            "manufacturer": "Tesla",
            "type": "suv",
            "fuel": "electric",
            "color": "lime",
            "vin": "MW54TUF2ATVX15624",
            "vrm": "DI03UGZ"
        },
        {
            "name": "Model S",
            "manufacturer": "Tesla",
            "type": "mini suv",
            "fuel": "electric",
            "color": "indigo",
            "vin": "P1MTJ97TESEN55586",
            "vrm": "MK89INV"
        }
      ]`,
			},
		],
	},
	{
		heading: 'Songs',
		desc: 'Returns song name, singer, genre, links, etc.',
		routes: [
			{
				route: 'GET /songs/',
				content: 'Returns all the available songs',
				output: `[

          {
              "name": "Chan Kitta",
              "singer": "Ayushmann Khurrana",
              "language": "punjabi",
              "genre": "romance",
              "link": "https://www.youtube.com/watch?v=JFYCc577kjQ"
          },
          {
              "name": "Afreen Afreem",
              "singer": "Rahat Fateh Ali Khan",
              "language": "urdu",
              "genre": "ghazal",
              "link": "https://www.youtube.com/watch?v=kw4tT7SCmaY"
          },
          {
              "name": "Lut Gaye",
              "singer": "Jubin Nautiyal",
              "language": "hindi",
              "genre": "romance",
              "link": "https://www.youtube.com/watch?v=sCbbMZ-q4-I"
          },
          {
              "name": "Dope Shope",
              "singer": "Yo Yo Honey Singh",
              "language": "punjabi",
              "genre": "pop",
              "link": "https://www.youtube.com/watch?v=NrXdauEv9HY"
          },
          {
              "name": "Tunak Tunak Tun",
              "singer": "Daler Mehndi",
              "language": "punjabi",
              "genre": "indian pop",
              "link": "https://www.youtube.com/watch?v=vTIIMJ9tUc8"
          },
        ]`,
			},
			{
				route: 'GET /songs/5',
				content: 'Returns song data from perticular index.',
				output: `
      {
        "name": "Bohemian Rhapsody",
        "singer": "Queen",
        "language": "english",
        "genre": "classic rock",
        "link": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
      }`,
			},
			{
				route: 'GET /songs?artist=Ayushmann Khurrana',
				content: 'Returns song data from perticular artist.',
				output: `[
                {
                    "name": "Chan Kitta",
                    "singer": "Ayushmann Khurrana",
                    "language": "punjabi",
                    "genre": "romance",
                    "link": "https://www.youtube.com/watch?v=JFYCc577kjQ"
                }
            
            ]`,
			},
			{
				route: 'GET /songs?genre=pop',
				content: 'Returns song data from perticular genre.',
				output: `[

              {
                  "name": "Dope Shope",
                  "singer": "Yo Yo Honey Singh",
                  "language": "punjabi",
                  "genre": "pop",
                  "link": "https://www.youtube.com/watch?v=NrXdauEv9HY"
              },
              {
                  "name": "Oonchi Hai Building",
                  "singer": "Anu Malik",
                  "language": "hindi",
                  "genre": "pop",
                  "link": "https://www.youtube.com/watch?v=QmHTmr8Kazs"
              },
              {
                  "name": "Brown Munde",
                  "singer": "AP DHILLON",
                  "language": "punjabi",
                  "genre": "pop",
                  "link": "https://www.youtube.com/watch?v=VNs_cCtdbPc"
              }
          
          ]`,
			},
			{
				route: 'GET /songs?language=punjabi',
				content: 'Returns song data from perticular language.',
				output: `[
                  {
                      "name": "Chan Kitta",
                      "singer": "Ayushmann Khurrana",
                      "language": "punjabi",
                      "genre": "romance",
                      "link": "https://www.youtube.com/watch?v=JFYCc577kjQ"
                  },
                  {
                      "name": "Dope Shope",
                      "singer": "Yo Yo Honey Singh",
                      "language": "punjabi",
                      "genre": "pop",
                      "link": "https://www.youtube.com/watch?v=NrXdauEv9HY"
                  },
                  {
                      "name": "Tunak Tunak Tun",
                      "singer": "Daler Mehndi",
                      "language": "punjabi",
                      "genre": "indian pop",
                      "link": "https://www.youtube.com/watch?v=vTIIMJ9tUc8"
                  },
                  {
                      "name": "Brown Munde",
                      "singer": "AP DHILLON",
                      "language": "punjabi",
                      "genre": "pop",
                      "link": "https://www.youtube.com/watch?v=VNs_cCtdbPc"
                  }
              
              ]`,
			},
			{
				route: 'GET /songs?genre=pop&language=punjabi',
				content: 'Return dummy songs data after chaining genre and language query parameter.',
				output: `[

                {
                    "name": "Dope Shope",
                    "singer": "Yo Yo Honey Singh",
                    "language": "punjabi",
                    "genre": "pop",
                    "link": "https://www.youtube.com/watch?v=NrXdauEv9HY"
                },
                {
                    "name": "Brown Munde",
                    "singer": "AP DHILLON",
                    "language": "punjabi",
                    "genre": "pop",
                    "link": "https://www.youtube.com/watch?v=VNs_cCtdbPc"
                }
            
            ]`,
			},
			{
				route: 'GET /songs?artist=A.R. Rahman&genre=sufi&language=urdu',
				content: 'Return dummy songs data after chaining multiple song query parameter.',
				output: `[
            {
                "name": "Kun Faya Kun",
                "singer": "A.R. Rahman",
                "language": "urdu",
                "genre": "sufi",
                "link": "https://www.youtube.com/watch?v=T94PHkuydcw"
            }
        
        ]`,
			},
		],
	},
	{
		heading: 'Shows',
		desc: 'Returns TV show name, rating, description, etc.',
		routes: [
			{
				route: 'GET /shows/',
				content: 'Return all the available shows with title,genre,season,episodes,rating,description.',
				output: `
    [
      {
        "title": "Friends",
        "genre": ["comedy", "romance"],
        "rating": "8.9",
        "season": "10",
        "episodes": "236",
        "description": "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years and seasons, these friends go through family,love,drama,friendship and comedy."
      },
      {
        "title": "Money Heist",
        "genre": ["drama", "thriller"],
        "rating": "8.3",
        "season": "2",
        "episodes": "31",
        "description": "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
      },
      {
        "title": "Sherlock Homles",
        "genre": ["detective", "fiction"],
        "rating": "9.1",
        "season": "4",
        "episodes": "13",
        "description": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."
      },
      {
        "title": "The Big Bang Theory",
        "genre": ["sitcom", "drama"],
        "rating": "8.1",
        "season": "12",
        "episodes": "279",
        "description": "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory."
      },
      {
        "title": "Little Things",
        "genre": ["comedy", "drama"],
        "rating": "8.3",
        "season": "3",
        "episodes": "21",
        "description": "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Bengaluru."
      },
    ]`,
			},
			{
				route: 'GET /shows/2',
				content: 'Return show data at index 2 from showsdata.json.',
				output: `
      {
        "title": "Little Things",
        "genre": ["comedy", "drama"],
        "rating": "8.3",
        "season": "3",
        "episodes": "21",
        "description": "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Bengaluru."
      },
    }`,
			},
			{
				route: 'GET /shows?genre=drama',
				content: 'Return show data specific to a perticular genre from showsdata.json.',
				output: `
              [
                {
                    "title": "Money Heist",
                    "genre": [
                        "drama",
                        "thriller"
                    ],
                    "rating": "8.3",
                    "season": "2",
                    "episodes": "31",
                    "description": "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
                },
                {
                    "title": "The Big Bang Theory",
                    "genre": [
                        "sitcom",
                        "drama"
                    ],
                    "rating": "8.1",
                    "season": "12",
                    "episodes": "279",
                    "description": "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory."
                },
                {
                    "title": "Little Things",
                    "genre": [
                        "comedy",
                        "drama"
                    ],
                    "rating": "8.3",
                    "season": "3",
                    "episodes": "21",
                    "description": "A cohabiting couple in their 20s navigate the ups and downs of work, modern-day relationships and finding themselves in contemporary Bengaluru."
                },
              ]`,
			},
			{
				route: 'GET /shows?rating=8.9',
				content: 'Return show data with specific rating from showsdata.json.',
				output: `
              [
                {
                    "title": "Friends",
                    "genre": [
                        "comedy",
                        "romance"
                    ],
                    "rating": "8.9",
                    "season": "10",
                    "episodes": "236",
                    "description": "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years and seasons, these friends go through family,love,drama,friendship and comedy."
                },
                {
                    "title": "The Office",
                    "genre": [
                        "comedy",
                        "drama",
                        "romance"
                    ],
                    "rating": "8.9",
                    "season": "9",
                    "episodes": "201",
                    "description": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."
                }
            
            ]`,
			},
			{
				route: 'GET /shows?season=10',
				content: 'Return show data based on season count from showsdata.json.',
				output: `
            [
              {
                  "title": "Friends",
                  "genre": [
                      "comedy",
                      "romance"
                  ],
                  "rating": "8.9",
                  "season": "10",
                  "episodes": "236",
                  "description": "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years and seasons, these friends go through family,love,drama,friendship and comedy."
              }
            ]`,
			},
			{
				route: 'GET /shows?rating=9.8&genre=comedy',
				content: 'Return show data based on rating and season count from showsdata.json.',
				output: `
            [
              {
                  "title": "Friends",
                  "genre": [
                      "comedy",
                      "romance"
                  ],
                  "rating": "8.9",
                  "season": "10",
                  "episodes": "236",
                  "description": "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years and seasons, these friends go through family,love,drama,friendship and comedy."
              },
            ]`,
			},
			{
				route: 'GET /shows?genre=comedy&season=10&rating=8.9',
				content: 'Return show data after chaining multiple show query parameter.',
				output: `
            [
              {
                  "title": "Friends",
                  "genre": [
                      "comedy",
                      "romance"
                  ],
                  "rating": "8.9",
                  "season": "10",
                  "episodes": "236",
                  "description": "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years and seasons, these friends go through family,love,drama,friendship and comedy."
              }
            ]`,
			},
		],
	},
	{
		heading: 'Books',
		desc: 'Returns book title, author, price, rating, etc.',
		routes: [
			{
				route: 'GET /books/',
				content: 'Return all the available book data.',
				output: `
                [
                {
                  "title": "The Story Of My Experiments With The Truth",
                  "author": "Mohandas Karamchand Gandhi",
                  "rating": "4.5",
                  "descritpion": "Mohandas Karamchand Gandhi has always been a very prominent figure in Indian history. From his unbeatable spirit to inspiring courage, from various controversies to his life as the father of the nation, Gandhi has always been an interesting, inspiring and impressive personality to read about.",
                  "price": "₹159"
                },
                {
                  "title": "The Guide",
                  "author": "R.K. Narayan",
                  "rating": "4.5",
                  "descritpion": "R.K Narayan is best known for stories based in and around the fictional village of Malgudi. The Guide is yet another story set up in Malgudi. R.K. Narayan won the Sahitya Akademi Award for the book in 1960. The Guide is the story of a tour guide who transforms himself into a spiritual Guru and then the greatest holy man of India. The book was also adapted as a film which starred the legendary actor Dev Anand.",
                  "price": "₹156"
                },
                {
                  "title": "A Fine Balance",
                  "author": "Rohinton Mistry",
                  "rating": "4.4",
                  "descritpion": "A fine balance revolves around various characters in Mumbai (then Bombay) during the time of turmoil and government emergencies. The story of friendship and love that progresses among the characters of the book will keep you hooked till the end.",
                  "price": "₹1,075"
                },
                {
                  "title": "Midnight’s Children",
                  "author": "Salman Rushdie",
                  "rating": "4.3",
                  "descritpion": "Midnight’s Children portrays the journey of India from British rule to independence and then partition. The book received a great response, winning the Booker Prize in 1981 and the “Booker of Bookers” Prize (commemorating the best among all the Booker winners) twice – in 1993 and 2008! The book travels to various parts of the country including Kashmir, Agra and Mumbai and incorporates many actual historic events.",
                  "price": "₹300"
                }
              ]`,
			},
			{
				route: 'GET /books/2',
				content: 'Return book data at index 2 from booksdata.json.',
				output: `
                {
                  "title": "Midnight’s Children",
                  "author": "Salman Rushdie",
                  "rating": "4.3",
                  "descritpion": "Midnight’s Children portrays the journey of India from British rule to independence and then partition. The book received a great response, winning the Booker Prize in 1981 and the “Booker of Bookers” Prize (commemorating the best among all the Booker winners) twice – in 1993 and 2008! The book travels to various parts of the country including Kashmir, Agra and Mumbai and incorporates many actual historic events.",
                  "price": "₹300"
                }`,
			},
			{
				route: 'GET /books?author=Vikram Seth',
				content: 'Return book data with specific author name from booksdata.json.',
				output: `
              [
                {
                    "title": "A Suitable Boy",
                    "author": "Vikram Seth",
                    "rating": "4.0",
                    "descritpion": "Published in 1993, this 1349-pages-long-book is one of the longest novels ever published in a single volume in the English Language. The story focuses on India post-partition as a family looks for a suitable boy to marry their daughter.",
                    "price": "₹947"
                }
              ]`,
			},
			{
				route: 'GET /books?price=₹268',
				content: 'Return book data with specific author name from booksdata.json.',
				output: `
              [
                {
                    "title": "The Interpreter Of Maladies",
                    "author": "Jhumpa Lahiri",
                    "rating": "4.5",
                    "descritpion": "This is a collection of nine stories by Lahiri. The stories are based on lives of Indians and Indian Americans who are lost between the two cultures. The book was published in 1999 and won the Pulitzer Prize for Fiction and the Hemingway Foundation/PEN Award in the year 2000 and has sold over 15 million copies worldwide.",
                    "price": "₹268"
                }
              ]`,
			},
			{
				route: 'GET /books?title=The Glass Palace',
				content: 'Return book data with specific title from booksdata.json.',
				output: `
              [
                {
                    "title": "The Glass Palace",
                    "author": "Amitav Ghosh",
                    "rating": "4.5",
                    "descritpion": "This book won Grand Prize for Fiction at the Frankfurt International e-Book Awards in 2001. The story is set in Burma and focuses on various issues during the British invasion in 1885. The novel beautifully portrays the circumstances and incidents that made Burma, India and Malaya what they are today. This story of the empire, love and the changing society is definitely worth reading.",
                    "price": "₹248"
                }
              ]`,
			},
			{
				route: 'GET /books?author=Vikram Seth&price=₹947',
				content: 'Return book data with specific title from booksdata.json.',
				output: `
              [
                {
                    "title": "A Suitable Boy",
                    "author": "Vikram Seth",
                    "rating": "4.0",
                    "descritpion": "Published in 1993, this 1349-pages-long-book is one of the longest novels ever published in a single volume in the English Language. The story focuses on India post-partition as a family looks for a suitable boy to marry their daughter.",
                    "price": "₹947"
                }
              ]`,
			},
			{
				route: 'GET /books?title=God of Small Things&author=Arundhati Roy&price=₹275',
				content: 'Return book data after chaining multiple book query parameter.',
				output: `
              [
                {
                    "title": "God of Small Things",
                    "author": "Arundhati Roy",
                    "rating": "4.1",
                    "descritpion": "The debut novel by Roy, which took almost four years to finish is a story of fraternal twins and how small things make a large difference in people’s lives and behavior. The book was awarded the Booker Prize in 1997 and is Roy’s only published novel so far. The story narrated in third person is set in Kerala, and takes place in 1969.",
                    "price": "₹275"
                }
              ]`,
			},
		],
	},
]
export default data

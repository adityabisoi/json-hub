const data = [
    {
        heading: "Task",
        desc: "The task route returns dummy data realted to daily life activities.",
        routes: [
            {
                route: "GET /tasks/2",
                content: "Returns the task at index 2 as specified in taskdata.json.",
                output: `
        {
          "task_name": "eating",
          "completed": false,
          "details": "having nice and healthy food"
        }`,
            },
            {
                route: "GET /tasks/2?count=3",
                content: "Starts from the task at index 2 and returns a total of 3 tasks.",
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
                route: "GET /tasks?count=2",
                content: "Returns 2 tasks, starting at index 0 by default.",
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
        heading: "User",
        desc: "The users route returns dummy data realted to fake users.",
        routes: [
            {
                route: "GET /users/",
                content: "Return all the available dummy user data.",
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
                route: "GET /users/:userId",
                content: "Return dummy user data with the matching Id.",
                output: `
        {
          "id": "1",
          "first_name": "Becky",
          "last_name": "Blasbad",
          "email": "beck1blas4@gmail.com"
        }`,
            },
            {
                route: "PATCH /users/",
                content: "Returns dummy user data with the current timestamp.",
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
        heading: "Photos",
        desc: "The photo route returns photos with their source link and name.",
        routes: [
            {
                route: "GET /photos/",
                content: "Return all the available photo data.",
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
        ],
    },
];
export default data;

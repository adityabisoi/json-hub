let data=[
  {
    heading:"Task",
    desc:"The task shows dummy data realted to daily life activities.",
    routes:[
      {
        route:"GET /tasks/2",
        content:"Returns the task at index 2 as specified in taskdata.json.",
        output:`
        {
          "task_name": "eating",
          "completed": false,
          "details": "having nice and healthy food"
        }`
      },
      {
        route:"GET /tasks/2?count=3",
        content:"Starts from the task at index 2 and returns a total of 3 tasks.",
        output:`
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
        ]`
      },
      {
        route:"GET /tasks?count=2",
        content:"Returns 2 tasks, starting at index 0 by default. ",
        output:`
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
        ]`
      }
    ]
  },
  {
    heading:"User",
    desc:"The task shows dummy data realted to daily life activities.",
    routes:[
      {
        route:"GET /tasks/2",
        content:"Returns the task at index 2 as specified in taskdata.json.",
        output:`
        {
          "task_name": "eating",
          "completed": false,
          "details": "having nice and healthy food"
        }`
      },
      {
        route:"GET /tasks/2?count=3",
        content:"Starts from the task at index 2 and returns a total of 3 tasks.",
        output:`
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
        ]`
      },
      {
        route:"GET /tasks?count=2",
        content:"Returns 2 tasks, starting at index 0 by default. ",
        output:`
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
        ]`
      }
    ]
  },
]
module.exports=data;
import express, { Application, Request, Response, NextFunction } from 'express'
const router = express.Router()
//importing file reader fs
const fs = require('fs')

//endpoint for /GET requests for comments
router.get('/', (req: Request, res: Response, next: NextFunction) => {
//reading the contents of comments json file
fs.readFile('./src/api/routes/comment.json', (err: string, data: string) => {
    if (err) {
      console.log(err)
      res.status(500).json({
          error: err
      })
    }
    //parsing through the data and sending response
    let comments = JSON.parse(data);
    console.log(comments);
    res.status(200).json(comments)
  });
})

// This endpoint supports fetching comments with their id
router.get('/:commentId', (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.commentId
    fs.readFile('./src/api/routes/comment.json', (err: string, data: string) => {
        if (err) {
          console.log(err)
          res.status(500).json({
              error: err
          })
        }
        let comments = JSON.parse(data);
        let found: boolean=false
        for(let comment of comments.comments){
          //if the id entered is found
            if(comment._id == id ){
              res.status(200).json(comment)
              found=true
              break
            }
        }
        // Incase the id entered is not present
        if(!found){
          res.status(404).json({
              message: 'Id does not exist'
          })
        }
    });
})

module.exports = router

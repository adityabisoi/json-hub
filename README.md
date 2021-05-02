<p align="center">
	
<img src="https://github.com/Samridhi-98/Images/blob/master/Images/restfetchpng.PNG"  width="100%" >

</p>

<h2>About Us <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/reading.svg" width="4%"></a></h2>
<p>
	
[![GitHub contributors](https://img.shields.io/github/contributors/adityabisoi/REST-fetch)](https://github.com/adityabisoi/REST-fetch/graphs/contributors/)
[![Issues](https://img.shields.io/github/issues/adityabisoi/REST-fetch)](https://github.com/adityabisoi/REST-fetch/issues)
[![PRs](https://img.shields.io/github/issues-pr/adityabisoi/REST-fetch)](https://github.com/adityabisoi/REST-fetch/pulls)
[![Forks](https://img.shields.io/github/forks/adityabisoi/REST-fetch)](https://github.com/adityabisoi/REST-fetch) 
[![Stars](https://img.shields.io/github/stars/adityabisoi/REST-fetch)](https://github.com/adityabisoi/REST-fetch) 
[![Join the chat at https://gitter.im/fetch-lobby/community](https://badges.gitter.im/fetch-lobby/community.svg)](https://gitter.im/fetch-lobby/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

</p>

<p>
A community-owned REST API service for testers and developers. Fetch provides REST API endpoints for different types of placeholders, which can be easily used during testing 	and development without the need for creating sample data manually.
</p>

## Technology Stack <img src="https://github.com/Samridhi-98/Images/blob/master/Images/atom.svg" width="3%">

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>NodeJS</li>
<li>Typescript</li>
<li>CI/CD</li>
</ul>

<h3>
<em>
Try it out <a href="https://rest-fetch.herokuapp.com/)"><img src="https://github.com/Samridhi-98/Images/blob/master/Images/play.svg" width="2%"></a> 
</em>
</h3>

## Installation

### Before you setup project, make sure you have pre-commit installed on your machine. Skip the following if you have already installed.

There are 3 ways to install pre-commit package manager

-   Using pip:

`$ pip install pre-commit`

-   Using homebrew:

`$ brew install pre-commit`

-   Using conda (via conda-forge):

`$ conda install -c conda-forge pre-commit`

After completing the above steps, verify your installation by running

`$ pre-commit --version`

### Project Installation

There are two ways of installing the project on your local Machine 🚀

-   Using Docker

    -   Fork and clone the project
    -   Install and configure your [Docker](https://www.docker.com/), following [this](https://docs.docker.com/engine/install/).
    -   Rename `.env.example` to `.env`.
    -   Install the git hook scripts
        -   `pre-commit install` on terminal
    -   Once docker is installed run the followig commands.
        -   `docker-compose build`
        -   Once the build is complete, run `docker-compose up`

-   Conventional Setup
    -   Fork and clone the project
    -   `cd fetch/` and run `npm install` to install dependencies
    -   Setup [mongodb atlas](https://www.mongodb.com/cloud/atlas) following [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i)
    -   Enter the credentials in `.env.example` and rename it to `.env`.
    -   Make sure to set `USE_DOCKER= false` in `.env` file.
    -   Install the git hook scripts
        -   `pre-commit install` on terminal
    -   Run `npm run dev` to run the project in development

## Testing <img src="https://github.com/Samridhi-98/Images/blob/master/Images/test.svg" width="3%">

-   The endpoint `usertest` which follows the same schema as the `users/` endpoint, must be used for testing
-   All other endpoints except `usertest` should involve methods which **must not** change the data on the server (read-only)
-   To test the endpoints provided by the application, tools such as [postman](https://www.postman.com/) can be used

## Documentation <img src="https://github.com/Samridhi-98/Images/blob/master/Images/doc.svg" width="3%">

To understand the aim, scope and technologies used in the project, please see the [documentation](https://bit.ly/36PmwEc)

## Help & support <img src="https://github.com/Samridhi-98/Images/blob/master/Images/help.svg" width="3%">

If you are stuck somewhere or do not understand what to do, feel free to reach out to mentors/ admin in discord.

## Contribution <img src="https://github.com/Samridhi-98/Images/blob/master/Images/contribution.svg" width="3%">

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br/>
<strong> Please refer the <a href="https://github.com/adityabisoi/REST-fetch/blob/main/CONTRIBUTING.md">contribution guideline</a> before making any contribution. </strong>

## Contributors <img src="https://github.com/Samridhi-98/Images/blob/master/Images/contributors.svg" width="3%">

## How to setup a local MongoDB Connection 

## Installing MongoDB:
You need to install MongoDB on your computer before you can connect to it. You can install MongoDB by following these instructions (Mac and Windows).Once you have completed the installation process, try typing mongo --version into your command line.

## Starting MongoDB:
You can start MongoDB on your computer with the mongod command.Keep the mongod window running when you want to work with your local MongoDB. MongoDB stops when you close the window.

## Adding items to a database:
One way to add items to a MongoDB database is through the Mongo Shell. To open up the Mongo Shell, you open another command line window and run mongo.

## Accessing MongoDB with MongoDB Compass:
MongoDB Compass gives you another way to access MongoDB. It’s an app that makes checking (and editing) databases easier if you’re not a fan of the command line.To use MongoDB Compass, you have to install it first.To connect to your local MongoDB, you set Hostname to localhost and Port to 27017. These values are the default for all local MongoDB connections.

## Connecting to MongoDB with a Node server:
When we build applications, we connect to MongoDB through our applications (not through Mongo Shell nor MongoDB Compass).To connect to MongoDB, we need to use the mongodb package. Alternatively, you can also use Mongoose.

## Connecting with MongoDB native driver:
First you have to install and require the mongodb package. Then use the following command 
npm install mongodb --save 
const MongoClient = require('mongodb').MongoClient

## You can connect to your local MongoDB with this url:
const url = 'mongodb://127.0.0.1:27017'

With the Mongo Client, you need to specify the database you’re using after you connect to MongoDB. 

## Connecting with Mongoose:
To connect with Mongoose, you need to download and require mongoose. Then use the following command.
npm install mongoose --save.
const mongoose = require('mongoose')

## Connect method
When you use Mongoose, the connection url should include the database you’re connecting to.You can connect to MongoDB with the connect method.
mongoose.connect(url, { useNewUrlParser: true })



<table>
	<tr>
		<td>
			<a href="https://github.com/adityabisoi/REST-fetch/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=adityabisoi/REST-fetch" />
</a>
		</td>
	</tr>
</table>

## License <img src="https://github.com/Samridhi-98/Images/blob/master/Images/license.svg" width="3%">

This project is licensed under the GPL V3 License - see the [LICENSE.md](LICENSE.md) file for details

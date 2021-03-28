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
There are two ways of installing the project on your local Machine 🚀
* Using Docker
  * Fork and clone the project
  * Install and configure your [Docker](https://www.docker.com/), following [this](https://docs.docker.com/engine/install/).
  * Rename `.env.example` to `.env`.
  * Once docker is installed run the followig commands.
    * `docker-compose build`
    * Once the build is complete, run `docker-compose up`

* Conventional Setup
  * Fork and clone the project
  * `cd fetch/` and run `npm install` to install dependencies
  
  * There are two ways of setting the mongodb connection 🍃
    * Using MongoDB Atlas URI :
      * Setup [mongodb atlas](https://www.mongodb.com/cloud/atlas) following [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i)
      * Enter the credentials in `.env.example` and rename it to `.env`.
      * Make sure to set `USE_DOCKER= false` in `.env` file.
    * Using local MongoDB server :
      * Download the [MongoDB MSI Installer Package](https://www.mongodb.com/try/download/community). Make sure you select MSI as the package you want to download.
      * Install MongoDB with the Installation Wizard
        * Navigate to your downloads folder and double click on the .msi package you just downloaded
        * Click <strong>Next</strong> to start installation.
        * Accept the licence agreement then click <strong>Next</strong>.
        * Select the <strong>Complete</strong> setup.
        * Select <strong>Run service as Network Service user</strong> and make a note of the data directory, we’ll need this later.
        * We won’t need Mongo Compass, so deselect it and click <strong>Next</strong>.
        * Click <strong>Install</strong> to begin installation.
        * Hit <strong>Finish</strong> to complete installation.
      * Create the Data Folders to Store our Databases
        * Navigate to the C Drive on your PC and create a new folder called <strong>data</strong> here.
        * Inside the data folder you just created, create another folder called <strong>db</strong>.
      * Setup Alias Shortcuts for Mongo and Mongod
        * Open your terminal running Git Bash.
        * Change directory to your home directory with the following command: 
          
          `cd ~`
        * Here, we’re going to create a file called .bash_profile using the following command: 
        
          `touch .bash_profile`
        * Open the newly created .bash_profile with vim using the following command: Open the newly created .bash_profile with vim using the following command:

          `vim .bash_profile`
        * In vim, hit the <strong>I</strong> key on the keyboard to enter insert mode.
        * In your explorer go to C → Program Files → MongoDB → Server . Now you should see the version of your MongoDB.
        * Paste in the following code into vim, make sure your replace the 4.0 with your version that you see in explorer

          `alias mongod="/c/Program\ files/MongoDB/Server/4.0/bin/mongod.exe"`


          `alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe"`
        * Hit the Escape key on your keyboard to exit the insert mode. Then type to save and exit Vim.

          `:wq!`
      * Verify That Setup was Successful 
        * Close down the current terminal and quit the application.
        * Re-launch the terminal.
        * Type the following commands into the terminal:
            
            `mongo --version`
        * If you see something that looks like <strong>bash mongo command not found</strong>, make sure to check all the previous steps.
      * Enter the credentials in `.env.example` and rename it to `.env`.
      * Make sure to set `USE_DOCKER= false` in `.env` file.
  
  * Run `npm run dev` to run the project in development


## Testing <img src="https://github.com/Samridhi-98/Images/blob/master/Images/test.svg" width="3%">
* The endpoint `usertest` which follows the same schema as the `users/` endpoint, must be used for testing
* All other endpoints except `usertest` should involve methods which **must not** change the data on the server (read-only)
* To test the endpoints provided by the application, tools such as [postman](https://www.postman.com/) can be used

## Documentation <img src="https://github.com/Samridhi-98/Images/blob/master/Images/doc.svg" width="3%">
To understand the aim, scope and technologies used in the project, please see the [documentation](https://bit.ly/36PmwEc)

## Help & support <img src="https://github.com/Samridhi-98/Images/blob/master/Images/help.svg" width="3%">
If you are stuck somewhere or do not understand what to do, feel free to reach out to mentors/ admin in discord.

## Contribution <img src="https://github.com/Samridhi-98/Images/blob/master/Images/contribution.svg" width="3%">
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br/>
<strong> Please refer the <a href="https://github.com/adityabisoi/REST-fetch/blob/main/CONTRIBUTING.md">contribution guideline</a> before making any contribution. </strong>

## Contributors <img src="https://github.com/Samridhi-98/Images/blob/master/Images/contributors.svg" width="3%">
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

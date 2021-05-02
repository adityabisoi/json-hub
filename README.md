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
Try it out <a target="_blank" href="https://rest-fetch.herokuapp.com/"> <img src="https://github.com/Samridhi-98/Images/blob/master/Images/play.svg" width="2%"></a>
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

### Maintaining Consistency

It is absolutely necessary for us to maintain consistent coding styles for multiple developers working on this same project across various editors and IDEs. We have created a editorconfig file and urge you to download editorconfig plugin before further installation.

Setup for 3 major editors

-   For vscode

    -   Download the following [plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) on your editor

-   For atom

    -   Download the following [plugin](https://atom.io/packages/editorconfig) on your editor

-   For Sublime text
    -   Download the following [plugin](https://github.com/sindresorhus/editorconfig-sublime) on your editor

### Project Installation

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
      * Setup on Windows
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

      * Setup on Mac
        * Download the [MongoDB TGZ Package](https://www.mongodb.com/try/download/community). 
        * Extract the Tarball
          * In your downloads folder, double click on the .tgz file to extract it. The result should be a folder called mongodb-osx...
        * Move the Binaries to the Local User
          * Open up a Terminal and type <strong>sudo mv</strong> after the prompt (username$).
          * Click and drag the extracted mongodb folder into the Terminal.
          * Next hit space and type <strong>/usr/local/mongodb</strong>.
          * Now hit enter to execute the move.
          * You might be prompted for the password. This will be the password you use to log on to the Mac. When you type, nothing will change on screen. Just make sure you typed the right password then hit enter.
          * After the prompt type open <strong>/usr/local/mongodb</strong>.
          * Confirm that the move was successful.
        * Adding the MongoDB Binaries to Environment Variables
          * Change directory to your home folder with <strong>cd ~</strong> and hit enter.
          * Check that you are inside User/username with the command <strong>pwd</strong> and hit enter (print working directory).
          * Create a bash profile with <strong>touch .bash_profile</strong>
          * Edit the new bash_profile with Vim, using <strong>vim .bash_profile</strong>
          * Hit the <strong>I</strong> key on the keyboard to enter Insert mode.
          * Now paste in the following:

            `export PATH=$PATH:/usr/local/mongodb/bin`
          * Hit the <strong>Escape</strong> key to exit Insert mode in vim. Then type <strong>:wq!</strong> and hit enter to exit and save.
        * Creating the Local Data Storage Location for MongoDB
          * Create a folder called data and inside create another called db at the root of your computer with the following command:
            
            `sudo mkdir -p /data/db`
          * Check your current username with <strong>whoami</strong> and hit enter to see your username. 
            
          * Set the current user to own the newly created data folder with the following command, replacing <your-username> with the one you got in Step B above. 
          
            `sudo chown <your-username> /data/db`
          * Once you’ve hit enter and you see your prompt again, then you should be good to go.
        * Test the setup
          * Quit the Terminal and reopen it. 
          * Type the following command after your prompt:

            `mongo --version`
          *  If you get something like this then congratulations, you’ve successfully installed mongoDB!

            `MongoDB shell version v4.0.3`
      * Enter the credentials in `.env`.
      * Make sure to set `USE_DOCKER=false` in `.env` file.
  
  * Run `npm run dev` to run the project in development

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

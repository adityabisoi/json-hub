<p>

[![GitHub contributors](https://img.shields.io/github/contributors/adityabisoi/json-hub)](https://github.com/adityabisoi/json-hub/graphs/contributors/)
[![Issues](https://img.shields.io/github/issues/adityabisoi/json-hub)](https://github.com/adityabisoi/json-hub/issues)
[![PRs](https://img.shields.io/github/issues-pr/adityabisoi/json-hub)](https://github.com/adityabisoi/json-hub/pulls)
[![Forks](https://img.shields.io/github/forks/adityabisoi/json-hub)](https://github.com/adityabisoi/json-hub)
[![Stars](https://img.shields.io/github/stars/adityabisoi/json-hub)](https://github.com/adityabisoi/json-hub)
[![Join the chat at https://gitter.im/fetch-lobby/community](https://badges.gitter.im/fetch-lobby/community.svg)](https://gitter.im/fetch-lobby/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

</p>
<p align="center" width="100%">
    <img width="290" src="logo.jpg"> 
</p>
<p>
A community-owned REST API service for testers and developers. JSON Hub provides REST API endpoints for different types of placeholders, which can be easily used during testing and development without the need for creating sample data manually.
</p>

## Table of Contents

- [Technology Stack](#technology-stack)
- [Installation](#installation)
  - [Before you setup project, make sure you have pre-commit installed on your machine](#before-you-setup-project-make-sure-you-have-pre-commit-installed-on-your-machine-skip-the-following-if-you-have-already-installed)
  - [Maintaining Consistency](#maintaining-consistency)
  - [Project Installation](#project-installation)
     - [Using Docker](#using-docker)
     - [Conventional setup](#conventional-setup)
- [Documentation on setting up ESLint in VSCode](#documentation-on-setting-up-eslint-in-vscode)
- [Testing](#testing)
- [Documentation](#documentation)
- [Help & support](#help--support)
- [Contribution](#contribution)
- [Contributors](#contributors)
- [License](#license)
- [Open Source Events](#open-source-events)
## Technology Stack


<ul>
<li>MongoDB</li>
<li>Express</li>
<li>NodeJS</li>
<li>Typescript</li>
<li>CI/CD</li>
</ul>

<!-- <h3>
<em>
Try it out <a target="_blank" href="https://json-hub.herokuapp.com/"> <img src="https://github.com/Samridhi-98/Images/blob/master/Images/play.svg" width="2%"></a>
</em>
</h3> -->

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

####  Using Docker

  -   Fork and clone the project
  -   Install and configure your [Docker](https://www.docker.com/), following [this](https://docs.docker.com/engine/install/).
  -   Rename `.env.example` to `.env`.
  -   Install the git hook scripts
      -  `pre-commit install` on terminal
  -   Once docker is installed run the followig commands.
      -   `docker-compose build`
      -   Once the build is complete, run `docker-compose up`

####  Conventional Setup
  -   Fork and clone the project
  -   `cd json-hub/` and run `npm install` to install dependencies
  -   Setup [mongodb atlas](https://www.mongodb.com/cloud/atlas) following [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i)
  -   Enter the credentials in `.env.example` and rename it to `.env`.
  -   Make sure to set `USE_DOCKER= false` in `.env` file.
  -   Install the git hook scripts
      -   `pre-commit install` on terminal
  -   Run `npm run dev` to run the project in development

## Documentation on setting up ESLint in VSCode

  - Go to VSCode 
  - Extensions (on left sidebar) 
  - Search for ESLint 
  - Install the extension
  - Enable it across the JavaScript project
  
## Testing 


-   The endpoint `usertest` which follows the same schema as the `users/` endpoint, must be used for testing
-   All other endpoints except `usertest` should involve methods which **must not** change the data on the server (read-only)
-   To test the endpoints provided by the application, tools such as [postman](https://www.postman.com/) can be used

## Documentation


To understand the aim, scope and technologies used in the project, please see the [documentation](https://bit.ly/36PmwEc)

## Help & support 


If you are stuck somewhere or do not understand what to do, feel free to reach out to mentors/ admin in the [Gitter community channel](https://gitter.im/fetch-lobby/community).

## Contribution
 

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br/>
<strong> Please refer the <a href="https://github.com/adityabisoi/json-hub/blob/main/CONTRIBUTING.md">contribution guideline</a> before making any contribution. </strong>

## Contributors 


<table>
	<tr>
		<td>
			<a href="https://github.com/adityabisoi/json-hub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=adityabisoi/json-hub" />
</a>
		</td>
	</tr>
</table>

## License 


This project is licensed under the GPL V3 License - see the [LICENSE.md](LICENSE.md) file for details
	
##  Open Source Events 

 <img  src="https://raw.githubusercontent.com/GirlScriptSummerOfCode/MentorshipProgram/master/GSsoc%20Type%20Logo%20Black.png" href="https://gssoc.girlscript.tech/" alt="DS-ALGO-SOLUTIONS">

[![Join the chat at https://gitter.im/fetch-lobby/community](https://badges.gitter.im/fetch-lobby/community.svg)](https://gitter.im/fetch-lobby/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# fetch

<p align="center" width="100%">
    <img width="300" src="https://github.com/adityabisoi/fetch/blob/main/logo.png"> 
</p>

A community-owned REST API service for testers and developers. Fetch provides REST API endpoints for different types of placeholders, which can be easily used during testing and development without the need for creating sample data manually.

The project is live [here](https://rest-fetch.herokuapp.com/)

## Installation
Follow the instructions to get started with the project on your local machine 🚀
* Fork and clone the project
* Install and configure your [Docker](https://www.docker.com/), following [this](https://docs.docker.com/engine/install/).
* Rename `.env.example` to `.env`, and provide the username, password and database name of choice.
* Once docker is installed run the followig commands.
  * `docker-compose build`
  * Once the build is complete, run `docker-compose up`

## Testing
* The endpoint `usertest` which follows the same schema as the `users/` endpoint, must be used for testing
* All other endpoints except `usertest` should involve methods which **must not** change the data on the server (read-only)
* To test the endpoints provided by the application, tools such as [postman](https://www.postman.com/) can be used

## Documentation
To understand the aim, scope and technologies used in the project, please see the [documentation](https://bit.ly/36PmwEc)

## Help & support
If you are stuck somewhere or do not understand what to do, feel free to reach out to mentors/ admin in discord.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the GPL V3 License - see the [LICENSE.md](LICENSE.md) file for details

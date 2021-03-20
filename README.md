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
* `cd fetch/` and run `npm install` to install dependencies
* Setup [mongodb atlas](https://www.mongodb.com/cloud/atlas) following [this tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i)
* Enter the credentials in `.env.example` and rename it to `.env`.
* Run `npm run dev` to run the project in development

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

## Contributors 
<table>
	<tr>
		<td>
			<a href="https://github.com/adityabisoi/REST-fetch/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=adityabisoi/REST-fetch" />
</a>
		</td>
	</tr>
</table>

## License

This project is licensed under the GPL V3 License - see the [LICENSE.md](LICENSE.md) file for details

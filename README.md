# GitTweet

GitTweet is a demo app that shows you how to tweet every commit made on a github repository.
This project is built with Nestjs. You can read more on Nestjs [here](https://docs.nestjs.com)

## Installation

- Fork the repo
- Install the dependencies using ```yarn or npm install```
- Run ```yarn start:dev``` or ```npm run-script start:dev```
- Download [ngrok](https://ngrok.com) and follow the installation process 
- Go to your forked repo and in the webhook part of the settings, create a new one
- Add the generated ngrook URL from your local project to the github webhook
- Now make a commit on your local project and push then watch your command line for the commit message

### Todos
- Create Twitter Commit Push.

## License

MIT

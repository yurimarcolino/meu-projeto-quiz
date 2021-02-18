# Meu Quiz

## How to run the project: 

### Npm
``` 
npm install && npm start
```
### Yarn
``` 
yarn && yarn start
```
## Libraries used
  - Redux: to share the global state between Quiz and Result page. 
  - StackNavigator: to create routes and make the user able to navigate between then.
  - Eslint/Prettier: to ensure the code style.
  - Styled-components: to create custom UI components.
  - Expo: to setup the project.
  - Axios: to make async requests.

## Assumptions

### Home Page

This page is just the entry point, we won't have anything especial, basically, some instructions for the user and a button to start the game.

### Quiz Page

This is the core of the entirely application. You're going to be able to : 
  - anserwer the questions.
  - move foward and backward.
  - jump to results.
  - the questions will be provided by: https://opentdb.com/api_config.php
  - the images will be provided by: https://picsum.photos/
  
  *Note: You're going to have 10 minutes to finish 15 questions. If time is over you'll be redirected to the result page.*
  
  
### Result Page
  In the result page you're going to be able to see how many ansewrs you scored and also a button to restart the game.
  


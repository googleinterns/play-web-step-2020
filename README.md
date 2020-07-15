# Play on Web Intern Project

## Objective

Create a web app with technologies learned from the [Google STEP training program](https://github.com/googleinterns/step).

## Idea

Create a discovery/landing page similar to [Play's web homepage](http://play.google.com/). It will consist of a home stream
with clusters of apps. There will be several different kinds of clusters, such as Top Apps, Editor's Choice Apps, Featured Apps, etc.

## Technologies

- React (frontend)
- Java Servlet (backend)
- Cloud Datastore (storage)
- App Engine (computing service)
- Maven (build automation)

## Build Depedencies

- On the root directory, run `yarn`.

## Steps to Run the Java Servet

- On the root directory, run `mvn package appengine:run`.

## Steps to Run the React App

1. In a separate terminal from the Java Servlet, run `yarn local`.
2. Click on the web preview icon and change the port to the last four numbers listed in the terminal.
   - Local: http://localhost:####
3. Your new tab should now show the React app.

## Re-deploying to Production
Allows the developer to build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. You can re-deploy the frontend and backend separately at anytime using the commands below.

## Steps to Re-deploy the Java Servlet

- On the root directory, run `mvn appengine:deploy`.

## Steps to Re-deploy the React App

1. On the root directory, run `yarn build`.
2. Then run `gloud app deploy client`.
3. The URL of the deployed service will be displayed on the terminal

## Tests

1. For client tests, run `yarn test`.
2. For server tests, run `mvn test`.

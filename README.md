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

## Steps to Run the React App
1. Open the terminal and cd into ~/play-web-step-2020/client
2. Run the command yarn local 
3. Open a seperate terminal and cd into ~/play-web-step-2020
4. Run the command mvn package appengine:run
5. Click on the web preview icon and change the port to the last four numbers listed in the terminal 
 Local:            http://localhost:####
6. Your new tab should now run the react app

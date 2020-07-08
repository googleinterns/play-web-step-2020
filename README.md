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

## Tests

1. For client tests, run `yarn test`.
2. For server tests, run `TBD`.
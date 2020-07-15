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

## Steps to Re-deploy the Java Servlet

- On the root directory, run `mvn appengine:deploy`.

## Steps to Re-deploy the React App

1. In a seperate terminal from the Java Servlet, cd into client.
2. Run `yarn build`.
2. Then run `gloud app deploy`.
3. Copy the link from the statement "Deployed service [default] to [https://play-step-2020.uc.r.appspot.com]" and paste it in your browser.

## Tests

1. For client tests, run `yarn test`.
2. For server tests, run `TBD`.

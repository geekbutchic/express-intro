# Express-Intro

* Create a new project folder ExpressIntro, add it to github and Populi ✅
* In the ExpressIntro folder do the following:
    - Initialize the folder as an npm project via npm init. ✅
    - Install express as a dependency. ✅
    - Install nodemon as a devDependency. ✅
* Create a new file app.js in the folder and copy the example code from the express starter docs into it: https://expressjs.com/en/starter/hello-world.html ✅
* Run the command node app.js ✅
* Navigate to http://localhost:3000 to see hello world. ✅

### Part-2

* Write two package.json scripts 
    - 'npm start' should run the app.js file with the node command. ✅
    - 'npm run dev' should run the app.js file with the nodemon command. ✅
* Start the server with the 'npm run dev' command. ✅
* Change the port to 4000 instead of 3000, navigate to localhost:3000 to see what happens, navigate to localhost:4000 to see what happens. ✅

* It changes the Port to 4000 - 3000 is no longer working.  It says terminal app listening on port 4000. ✅

### Part-3

* Change the code in res.send to send your name as a string to the browser, navigate to localhost:4000 to see your updates. ✅ 
* Create a catch-all error route that returns a 404 status to the browser when the route is not found. Navigate to http://localhost:4000/anyotherpage to test if this route is working. ✅ 
* Stretch goal: Add more routes that return various status codes and responses to the browser. 
# perfumechooser

Express Scaffolding Step by Step

1. In your project repository on the terminal, run npx express-generator to scaffold the Express application
2. Open the folder in VSCode and remove the /views folder (we don’t use it)
3. Remove the view engine setup in app.js file (lines 12-14), because we’re not using any backend template renderers
4. Change res.render('error'); to res.send('error'); (again, we’re not rendering anything from the backend, we’re just sending responses back to the client)
5. Install packages that you may use, such as MySQL, Nodemon, or Dotenv: npm install mysql nodemon dotenv
6. In file package.json, remove jade from the dependencies list
7. Install dependencies with npm install or yarn
8. Copy the model folder from your previous projects. This contains the helper.js (which contains a nice wrapper around DB connections, so we can use the db() function from within our code), and it also contains the database.js file, which is the migration file for our project (you will need to modify this file so it contains YOUR database tables definitions and dummy data)
9. Add a new script into your <package.json> file, that we will use to run our migrations: "migrate": "node model/database.js". Eventually, when you want to run migrations, you will need to run npm run migrate or yarn migrate
10. Modify the start script so it uses nodemon instead of node: "start": "nodemon ./bin/www"
11. In the file ./bin/www, change the default port to 5000 (around line 15)
12. If you need to store private data and passwords (such as your DB pass), create a <.env> file in the Express project root.
13. Add a .gitignore file to your project. It should contain at least your node_modules and your .env file: /node_modules .env

React Scaffolding Step by Step

1. Create React app with npx create-react-app my-app. (Change my-app to the name of your app, e.g. npx create-react-app emefa-mvp.
2. In VSCode, in src folder, delete the App.test.js, serviceWorker.js, setupTests.js and logo.svg files.
3. In index.js, remove serviceWorker setup (lines 9-12), and the import from line 5.
4. In App.css remove the default styling, but keep the file for if you will use some css styling later.
5. In App.js, remove the logo import in line 2, and the header content in lines 8 - 21.
6. Change the functional component into class component, so you can add some state later on.
7. If creating a front-end only app, simply navigate into your app folder (cd folder-name) and yarn start to run the app and begin coding
8. In package.json in your React app, add a proxy for the back end in line 34; "proxy": "http://localhost:5000".
9. Back in the terminal, inside your React app, run rm -rf .git to avoid the folder being pushed to GitHub as a sub-module of your main repo.
10. In your Express app, create a new folder named client, and copy all the contents of your React app into this folder.
--------------------------------------------
# Full Stack Perfume App

Use React, Node/Express, and MySQL.

## Objectives

- Build a database.
- Build an API server.
- Create a front end.

## Setup


1. Type `mysql -u root -p` to access the MySQL CLI using your password.

2. In the MySQL CLI, type `create database perfume;` to create a database in MySQL.

3. In the **project** folder run `node model/database.js` in your **TERMINAL**, (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Goals
### 1. Create database
### 2. Finish the routes
- Try and write the correct queries in `mysql`.
- Use those query to finish the endpoints in `routes/api.js`.
- GET, POST, PUT, DELETE
- Test your endpoints using Postman.

### 3. Finish the front end

- [ ] Finish populating `tasks` from the API call in `useEffect`.
 
- [ ] Then, add a list of perfumes to the DOM. Each perfume should have the following:
  - The main accord, mood, season, day/night, style, hame, brand, gender columns.
  - filter drop down lists.
  - Two buttons:
    - One button to filter through all filters :)
    - Optional: another button to add new perfume(for future development)
- [ ] Finish the filterPerfume function so it calls the server.
- [ ] Optional: finish the deletePerfume function so it calls the server.
- [ ] Add styling.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._

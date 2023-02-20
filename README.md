# RESTful API Practice with JavaScript, Node, and Express

1. Install or update node: node -v
2. npm init -y (Use -y if you prefer to skip over qustions)
3. install dependencies: npm i express cors (cors is cross origin resource sharing an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources aka make your life easier)
4. install devDependency: npm i nodemon -D
5. erase "test" under scripts in the package.json file and add "start": "node server.js" (which launches the server app) "dev": "nodemon server.js" so when you use nodemon in terminal is much like using live server 

    in package.json file:

      "scripts": {

        "start": "node server.js",
        "dev": "nodemon server.js"
        
      },

6. require express and cors in server.js file

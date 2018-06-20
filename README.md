Readme projet web 3
===================

by Thomas OLIVER
-----------------
**step 1**

download the directory on the github or clone it with the command git clone via the terminal 

**step 2**

again with the terminal, enter the root of the project folder and make a npm install (this will install the dependencies of the project)

**step 3**

then go to the front folder and redo an npm install


**step 4**

always in the terminal, return to the root of the file and go where is the database export

**step 5**

always in the terminal, open a mongo console and type: "use lsrapp" it will create an empty database at the root of the file and go where are the database exports

**step 6**
in a console, browse where the database exports are and type: "mongoimport -d lsrapp -c games --file games.json", "mongoimport -d lsrapp -c consoles --file consoles.json","mongoimport -d lsrapp -c users --file users.json" to import the collection into the empty database

**step 7**

always in the terminal, go back to the root of the server folder and type node server

**step 8**

in another terminal, on the front of the file type ng serve

**step 9**

open your browser now and type in the address bar: localhost: 4200






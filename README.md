# FriendFinder

<h2>Project Name</h2>

FriendFinder - Magnet

<h2>Concept</h2>

FriendFinder - also known as Magnet - is a dating app that through a series of questions will match you with your other half. 

<h2>Project Overview</h2>

Using node.js and express, Magnet will collect user input through a series of questions and then match the user with their ideal mate. 

<h2>Process</h2>

When the user enters the address into their browser, a get request retrieves the information. Then when the user clicks the button on the "home" page, this triggers another route. Please note that any other route that is entered into the url that is not explicitly assigned in the back end will redirect the user to the "home" page. 

Through an online survey, user input (answers) is assigned a numerical value depending on what which answer they choose. 

- Agree = 1
- Neither = 2
- Disagree = 3

Then, when the user submits their survey, the answers are compiled (as well as their name and photo) into an object that stores numerical values into an array, containing all of the user information then pushed to the survey (which utilizes an array of objects to store information). Then, post request will reduce the users answers into a single number and compare the result to the other users already stored into the array of objects to that of the user input. The user with the smallest difference is then selected as their ideal match and then sent to the front end and presented to the user. 

Please note that the form does contain validation. No field can be left blank, and the survey questions cannot contain a value of "0" or it will alert user to complete all fields. 

I also utilize a map method to convert the strings into integers, as all of the values are technically strings.
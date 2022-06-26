# Lets-get-social


## Description
This is a rest api social media app bult with Express, Mongooose, and mongoDB.

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data. 

## Acceptance Criteria

GIVEN a social network API
When I enter the commant to invoke the application
THEN my server is started and the mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT and DELETE routes in Insomnia
THEN I am able to successfully create, update and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

## Usage
1. Make sure you have MongoDB installed on your machine (if you don't follow the instructions on the MongoDB Website)
2. Clone the repo
3. Install dependencies with npm -i
4. Run mpm start to run the server and make the API live. 
5. Use your browser or an app like Insomnia to test the REST API. 

## Models
- User
- Thoughts
- Reactions (used as a subdocument in Thought)

## Endpoints
User

Get all users: GET /api/users
Create a user: POST /api/users
Get user by ID: GET /api/users/:id
Update a user: PUT /api/users/:id
Delete a user: DELETE /api/users/:id
Add a friend: PUT /api/users/:userId/friends/:friendId
Delete a friend: DELETE /api/users/:userId/friends/:friendId


Thought

Get all thoughts: GET /api/thoughts
Create a thought: POST /api/thoughts
Get thought by ID: GET /api/thoughts/:id
Update a thought: PUT /api/thoughts/:id
Delete a thought: DELETE /api/thoughts/:id


Reaction

Add a reaction: PUT /api/thoughts/:id/reactions
Delete a reaction: DELETE /api/thoughts/:id/reactions
Packages
express
moment
mongoose

## REPO 
https://github.com/KimberlyAnnYo/Lets-get-social

## Questions
If you have any questions, email me at kdenton993@gmail.com or reach out on github: https://github.com/KimberlyAnnYo
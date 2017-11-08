## Sema-four Front End Project: Survey Site (Survey Says!)

## Project Description:
'Survey Says!' is a lightweight survey site designed to allow for the creation
of easy-to-answer surveys that may be shared with friends, family, and colleagues.
When you sign up with 'Survey Says' you can start with creating your own survey
in just minutes without needing to know programing or confusing scripting languages.
Anyone can answer your survey questions! No pesky sign-up/sign-in requirements for
your family and friends. In and out in just a few minutes.

Once surveys start to receive responses you can visit the 'Survey Says!' dashboard
to view survey results. Get useful data in realtime to help quickly answer your
most pressing questions.

## Project URLs:
Sema-four Main Page: https://github.com/sema-four
Front-End Repo: https://github.com/sema-four/survey-front-end
Back-End Repo: https://github.com/sema-four/map-express-api
Back-End App: https://map-express-api.herokuapp.com/

## ERDs & Wireframes

https://imgur.com/a/CchfI

## Resources

Surveys (./app/models/survey.js)
Notes: A survey is the top level document which consists of a title, an
array of questions, and a user.  Owner is a an Mongo ObjectId associating the
survey with a signed in user. Surveys hold an array of questions (see below).
+--- Field -------+--------- Type -----+--- Required? ----+
  title:            String                    Yes
  questions:        String                    Yes
  owner:            ObjectId                 Yes

Questions(./app/models/question.js)
Notes: Each survey holds an array of questions.  Questions consist of the
questionDescription (or Title as seen in the UI). The field active is set by the
application and will   Options simply refers to the
choices the user is presented to answer the question.  Options is a field that
will be used for future enhancements. Responses is an array to
hold the answers provided by multiple survey takers (see below).  

+-------- Field -------+---- Type ---+--- Required? ----+
  questionDescription:      String            Yes
  active:                   Boolean           Yes
  options:                  array             Yes (see Notes)
  responses:                array             See below

Answers (./app/models/response.js)
Notes: Each question holds an array of responses (aka answers).  Responses consist
of a string (the answer itself) a responseId which is generated for you, and
finally an owner object which is is the user.  Additionally the anonymous field
will indicate whether the response was provided by an anonymous survey takers
or a signed in user.     

+--- Field -------+------- Type ------+--- Required? ----+
  answer:            String                 Yes
  responseID:        String                 Yes
  anonymous:         Boolean                Yes (see Notes)
  owner:             ObjectId               No

## API Definition

Resource Actions:
Action--+---HTTP Verb-+---- URL -----+---- Description ------------------+
create    POST          /surveys:id      creates a survey
index     POST          /surveys         retrieves a list of all surveys
destroy   DELETE        /surveys:id      deletes a survey
update    PATCH         /surveys:id      updates a survey

Create: create(req, res, next)
  - HTTP VERB POST
  - Creates a new survey in the database associated with the current user
  - Requires an authentication token in order to create surveys
  - Returns status 201 and a JSON string containing the survey

Update: update(req, res, next)
  - HTTP VERB: PATCH
  - Will update a survey by allowing the user to add questions
  - Requires an authentication token in order to update surveys
  - Surveys and questions may not be modified by other registered users.  Only
  the user associated with the survey may modify that survey.
  - Returns status 204 if successful
  - Will not allow reassignment of the owning user

Destroy: destroy()
  - HTTP VERB: DELETE
  - Will delete an entire survey including the array of questions and answers
  - Requires an authentication token in order to delete a surveys
  - Surveys may not be deleted by other registered users.  Only the user associated
  with the survey may delete that survey.
  - Returns status 204 if successful

Index: index(req, res, next)
  - HTTP VERB: POST
  - Returns a JSON string containing all Surveys in the database
  - Any site visitor may view the list of available surveys and provide answers
  to a survey.

## Authentication Resources & API
User Resource Actions:
-HTTP Verb-+ ---- URL -----+---- Description ------------------+
    POST         /sign-up      creates a user
    POST         /sign-in      retrieves a list of all players
    DELETE       /players:id   logs the user out
    PATCH        /players:id   changes the user's password

User Resource Notes:
This full stack project uses the same General Assembly authentication api as was
used for the Tic Tac Toe Project. Sample parameters are provided in JSON format
below and suitable for inclusion in CURL scripts.

sign-in:
```
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
```
sign-up:
```
"credentials": {
  "email": "'"${EMAIL}"'",
  "password": "'"${PASSWORD}"'",
  "password_confirmation": "'"${PASSWORD}"'"
}
```
change-password
```
"passwords": {
  "old": "'"${OLDPW}"'",
  "new": "'"${NEWPW}"'"
}
```
sign-out or logout requires only the user ID and the authentication token

Complete details of the authenticationapi may be found here:
 https://git.generalassemb.ly/ga-wdi-boston/game-project-api

## CURL Script References:

Authentication
  Sign in      ./scripts/auth/sign-in.sh
  Sign up      ./scripts/auth/sign-up.sh
  Change pw    ./scripts/auth/change-password.sh
  Log out      ./scripts/auth/sign-out.sh

Surveys
  Create:   ./scripts/surveys/create.sh
  Update:   ./scripts/surveys/update.sh
  Destroy:  ./scripts/surveys/destroy.sh
  Index:    ./scripts/surveys/index.sh

Questions
  Create:   ./scripts/surveyresponses/create.sh
  Update:   ./scripts/surveyresponses/update.sh
  Destroy:  ./scripts/surveyresponses/destroy.sh
  Index:    ./scripts/surveyresponses/index.sh

Answers
  Create:   ./scripts/responses/create.sh
  Update:   ./scripts/responses/update.sh
  Destroy:  ./scripts/responses/destroy.sh
  Index:    ./scripts/responses/index.sh


## Back-end Technologies
  Mongoose
  Mongo
  Heroku (hosting the backend services)
  Github (hosting the front end and version control)

## Front-end Technologies
  Express
  JQuery
  Bootstrap
  AJAX
  HTML
  CSS

## Use Cases and Story Inspirations
- As a user I should be able to sign-up/register, so that I am allowed to access the website
- As a user I should be able to sign-in with my own credentials, so that I can start using the website
- As a user I should be able to change my password, so that my identity is secure
- As a user I should be able to log out of the website
- As a signed-in user I should be able to create, edit, view and delete my surveys
- As an anonymous user I should be able to view a list of surveys and respond to any survey
- As an signed-in user I should be able to view a list of surveys and respond to any survey
- As a signed-in user i should be able to view responses to all my surveys

## about Sema-four

  Team Members:
    Anne Belakonis
    Mark Keeler
    Mayoor Patil
    Michael Dunn

  Process:
  Pair programing was used throughout the course of
  the project with team members taking turns writing code for both the front and back ends of the application.  A Trello board was used to capture issues, user stories, and tasks.  

#!/bin/sh

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "lets Go!",
      "questions": [{
        "question1": {
          "questionDescription": "Was this a good book?",
          "active": true,
          "options": ["Strongly Agree", "Neutral", "Disagree"]
        },
        "question2": {
          "questionDescription": "Was the length of the book what you expected?",
          "active": true,
          "options": ["Strongly Agree", "Neutral", "Disagree"]
        },
        "question3": {
          "questionDescription": "Were the illustrations well done?",
          "active": true,
          "options": ["Strongly Agree", "Neutral", "Disagree"]
        }
      }]
    }
  }'

echo

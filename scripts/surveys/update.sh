#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "lets Go!",
      "questions": [{
        "question1": {
          "questionDescription": "Was this a good book?",
          "active": false,
          "options": ["Strongly Agree", "NEUTRAL", "Disagree"]
        },
        "question2": {
          "questionDescription": "Was the length of the book what you expected?",
          "active": false,
          "options": ["Strongly Agree", "Neutral", "DISAGREE"]
        },
        "question3": {
          "questionDescription": "Were the illustrations well done?",
          "active": false,
          "options": ["Strongly Agree", "NEUTRAL", "Disagree"]
        }
      }]
    }
  }'

echo

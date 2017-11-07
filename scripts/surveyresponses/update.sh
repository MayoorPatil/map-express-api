#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveyresponses"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "surveyresponse": {
      "title": "lets Go!",
      "questions": [{
        "question1": {
          "questionDescription": "Was this a good book?",
          "active": true,
          "answer": "Agree"
        },
        "question2": {
          "questionDescription": "Was the length of the book what you expected?",
          "active": true,
          "answer": "Disagree"
        },
        "question3": {
          "questionDescription": "Were the illustrations well done?",
          "active": true,
          "answer": "Neutral"
        }
      }]
    }
  }'

echo

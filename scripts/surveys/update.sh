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
        "question": {
          "questionDescription": "Was this a good book?????",
          "active": true,
          "options": ["Strongly Agree", "Neutral", "Disagree"],
          "responses": [{
                  "response": {
                    "answer": "Agree",
                    "responseId": "123",
                    "anonymous": false
                  }
                },
                {
                  "response": {
                    "answer": "DisAgree",
                    "responseId": "123",
                    "anonymous": false
                  }
              },
              {
                "response": {
                  "answer": "DisAgree",
                  "responseId": "123",
                  "anonymous": false
                }
              }]
        }
      },
      {
        "question": {
        "questionDescription": "Was the length of the book what you expected????",
        "active": true,
        "options": ["Strongly Agree", "Neutral", "Disagree"]
      }
    },
    {
          "question": {
          "questionDescription": "Were the illustrations well done????",
          "active": true,
          "options": ["Strongly Agree", "Neutral", "Disagree"]
        }
    }]
    }
  }'

echo

#!/bin/sh

API="http://localhost:4741"
URL_PATH="/surveyresponses"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "surveyresponse": {
        "questions": [{
          "questionDescription": "question1",
          "answer": "N",
          "questionId": "2312",
          "anonymous": true
        }]
      }
  }'

echo

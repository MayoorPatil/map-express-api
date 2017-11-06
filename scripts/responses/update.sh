#!/bin/bash

API="http://localhost:4741"
URL_PATH="/responses"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "response": {
      "title": "LETS GO!",
      "responses": [{
        "response": {
          "responseValue": "Agree",
          "responseId": "456"
        }
      }]
    }
  }'

echo

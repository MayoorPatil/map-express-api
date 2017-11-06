#!/bin/sh

API="http://localhost:4741"
URL_PATH="/responses"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "response": {
      "title": "lets Go!",
      "responses": [{
        "response": {
          "responseValue": "Disagree",
          "responseId": "123"
        }
      }]
    }
  }'

echo

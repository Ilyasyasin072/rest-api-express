# REST API NODE JS WITH KNEXJS

## REQUIEMENT LIBRARY

- ``nodejs``

- ``knexjs``

- ``body-parser``

- ``dotenv``

- ``express``

- ``express-group-routes``

- ``mysql``

- ``[objection]``(https://vincit.github.io/objection.js/guide/query-examples.html#delete-queries)



# RESULT 

### Customer 

- Request 
    - Method : GET
        - Endpoint : /api/v1/customers/data
        - Header:
            - Content-Type: application/json
    - Body: -

- Result : 

    ```
        [
            {
                "id": 1,
                "name": "lorem",
                "phone_number": "123123",
                "address": "adasdasd",
                "point": 123,
                "deposit": 123,
                "created_at": "2021-03-01T04:05:51.000Z",
                "updated_at": "2021-03-01T04:37:28.000Z"
            },
            {
                "id": 2,
                "name": "asdasd",
                "phone_number": "123123",
                "address": "adasdasd",
                "point": 123,
                "deposit": 123,
                "created_at": "2021-03-01T04:18:35.000Z",
                "updated_at": "2021-03-01T04:18:35.000Z"
            },
            {
                "id": 3,
                "name": "asdasd",
                "phone_number": "123123",
                "address": "adasdasd",
                "point": 123,
                "deposit": 123,
                "created_at": "2021-03-01T04:18:44.000Z",
                "updated_at": "2021-03-01T04:18:44.000Z"
            },
            {
                "id": 4,
                "name": "asdasd",
                "phone_number": "123123",
                "address": "adasdasd",
                "point": 123,
                "deposit": 123,
                "created_at": "2021-03-01T04:19:13.000Z",
                "updated_at": "2021-03-01T04:19:13.000Z"
            },
            {
                "id": 5,
                "name": "asdasd",
                "phone_number": "123123",
                "address": "adasdasd",
                "point": 123,
                "deposit": 123,
                "created_at": "2021-03-01T04:19:51.000Z",
                "updated_at": "2021-03-01T04:19:51.000Z"
            }
        ]

    ```


## REFERENCES

[Project Structure For an Express REST API](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
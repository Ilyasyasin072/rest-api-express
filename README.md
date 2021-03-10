# REST API NODE JS WITH KNEXJS

## REQUIEMENT LIBRARY

- [nodejs](https://nodejs.org/en/)
- [knexjs](http://knexjs.org/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [express-group-routes](https://www.npmjs.com/package/express-group-routes)
- [mysql](https://www.npmjs.com/package/mysql)
- [objection](https://vincit.github.io/objection.js/guide/query-examples.html#delete-queries)



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
### Fleets
- with Eager loading

    ```
        [
            {
                "id": 2,
                "plat_number": "123123",
                "type": "1",
                "photo": "-",
                "user_id": 5,
                "created_at": null,
                "updated_at": null,
                "user": {
                    "id": 5,
                    "name": "ilyas",
                    "identity_id": "022154",
                    "gender": "1",
                    "address": "Bandung",
                    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_São_Paulo_Zoo.jpg",
                    "email": "aa@gmail.com",
                    "password": "$2y$10$tcnTdFV0UrjyMPsdLzRxqugtazpTTf6ebPA0S7aRfQ4pMnJ4.qkkW",
                    "phone_number": "12312",
                    "api_token": null,
                    "reset_token": "UTNbo4BCT61OCyGoYgDfqKrZY8gFch3rQeqb3XJ8",
                    "reset_password": null,
                    "role": "1",
                    "status": 1,
                    "created_at": "2021-02-16T07:34:59.000Z",
                    "updated_at": "2021-02-18T06:20:25.000Z"
                }
            }
        ]
    ```

## REFERENCES

[Project Structure For an Express REST API](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
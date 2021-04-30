# API DOCS / https://tt17plants.herokuapp.com/

User needs a token to get list of plants and users.
Specific plant belong to user or user's information only available to user who logged in and related with user's information and plant.
If user adds or creates a plant with species which not exists, the new specie would be created in database

#### User register:

[POST] `/api/register`

```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "id": 1,
  "password": string,                     |              "username": "user",
  "phone_number": string                  |             "phone_number": "9175555555"(10 numbers)
}                                         |            }
```

#### User login:

[POST] `/api/login`

```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "message": "Welcome username",
  "password": string                      |              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                                          |              "id": 1
}                                         |            }
```

#### All users:

[GET] `/api/users`
here and below you need a valid token to get and access to endpoints

```javascript
Body:                                     |           Response:
                                          |           [
                                          |             {
                                          |               "id":1,
                                          |               "username":"Mike"
                                          |             },
                                          |             {
                                          |               "id":2,
                                          |               "username":"Admin"
                                          |             }...
                                          |           ]

```

#### Single user:

[GET] `/api/users/:id`

```javascript
Body:                                     |           Response:
                                          |           {
                                          |             "id": 1,,
                                          |             "username": "Mike",
                                          |             "phone_number": "9172828221",
                                          |             "plants":[
                                          |                        {
                                          |                          "plant_id": 1,
                                          |                          "nickname": "nick1",
                                          |                          "species": "banana",
                                          |                          "h2oFrequency": "1d"
                                          |                        },
                                          |                        {
                                          |                          "plant_id": 2,
                                          |                          "nickname": "nick2",
                                          |                          "species": "cream",
                                          |                          "h2oFrequency": "2d"
                                          |                        },
                                          |                       ]
                                          |           }

```

#### User update:

[PUT] `/api/:id/update`
correct password is mandatory for this action

```javascript
Body:                                     |            Response:
{                                         |            {
  "phone_number": string(length = 10),    |              "message": "updated!",
  "password": string                      |              "updated":{
                                          |                 "id": 2,
                                          |                 "username": "Admin"
                                          |                 "phone_number":"1321567873"
                                          |              }
}                                         |            }
```

#### All plants:

[GET] `/api/plants/`

```javascript
Body:                                     |           Response:
                                          |           [
                                          |             {
                                          |              "plant_id": 1,
                                          |                "nickname": "usr1",
                                          |                "h2oFrequency": "1d",
                                          |                "species": "cream",
                                          |                "owner": "Mike"
                                          |            },
                                          |            {
                                          |                "plant_id": 4,
                                          |                "nickname": "usr21",
                                          |                "h2oFrequency": "2d",
                                          |                "species": "tomato",
                                          |                "owner": "Admin"
                                          |            }, ...
                                          |           ]

```

#### Add plant:

[POST] `/api/users/:id/add`

```javascript
Body:                                     |           Response:
{                                         |           {
                                          |             "message":"plant created!"
  "nickname": string                      |             "plant":{
  "h2oFrequency": string                     |                  "plant_id": 7,      |
  "species": string                  |                  "nickname": "one",
}                                         |                  "h2oFrequency": "1hr",
                                          |                  "species": "cactus",
                                          |                  "owner":"Mike"
                                          |              }
                                          |           }
```

#### Edit plant:

[PUT] `/api/plants/:id`
don't need to put all body, one element is enough to update

```javascript
Body:                                     |           Response:
{                                         |           {
                                          |             "message":"updated!",
  "nickname": string                      |             "updated": {
  "h2oFrequency": string                     |                 "plant_id": 1,
  "species": string                  |                 "nickname": "check",
                                          |                 "h2oFrequency": "1d",
}                                         |                 "species": "lemon",
                                          |                 "owner": "Mike"
                                          |              }
                                          |           }
```

### Delete plant:

[DELETE] `/api/plants/:id`

```javascript
Body:                                     |           Response:
                                          |           {
                                          |              "message": "deleted!",
                                          |              "deleted": {
                                          |                "plant_id": 5,
                                          |                 "nickname": "usr2",
                                          |                 "h2oFrequency": "2d",
                                          |                 "species": "celery",
                                          |                 "username": "Admin"
                                          |                }
                                          |            }
```

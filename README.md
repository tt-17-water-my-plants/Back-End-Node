# API DOCS / https://tt17plants.herokuapp.com/

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
                                          |                          "frequency": "1d"
                                          |                        },
                                          |                        {
                                          |                          "plant_id": 2,
                                          |                          "nickname": "nick2",
                                          |                          "species": "cream",
                                          |                          "frequency": "2d"
                                          |                        },
                                          |                       ]
                                          |           }

```

#### All plants:

[GET] `/api/plants/`

```javascript
Body:                                     |           Response:
                                          |           [
                                          |             {
                                          |              "plant_id": 1,
                                          |                "nickname": "usr1",
                                          |                "frequency": "1d",
                                          |                "species_name": "cream",
                                          |                "owner": "Mike"
                                          |            },
                                          |            {
                                          |                "plant_id": 2,
                                          |                "nickname": "usr21",
                                          |                "frequency": "2d",
                                          |                "species_name": "tomato",
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
  "frequency": string                     |                  "plant_id": 7,      |
  "species_name": string                  |                  "nickname": "one",
}                                         |                  "frequency": "1hr",
                                          |                  "species_name": "cactus",
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
  "frequency": string                     |                 "plant_id": 1,
  "species_name": string                  |                 "nickname": "check",
                                          |                 "frequency": "1d",
}                                         |                 "species_name": "lemon",
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
                                          |                 "frequency": "2d",
                                          |                 "species_name": "celery",
                                          |                 "username": "Admin"
                                          |                }
                                          |            }
```

# Showered Thoughts Server

## Get all thoughts

Retrieve all thoughts from the database.

**URL** : `/thoughts`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "id": "1",
    "author": "Jane Doe",
    "content": "This is my first thought"
  },
  {
    "id": "2",
    "author": "John Doe",
    "content": "This is my second thought"
  }
]

```


## Get thought

Retrieve a single thought with the specified ID from the database.

**URL** : `/thoughts/:id`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": "1",
  "author": "Jane Doe",
  "content": "This is my first thought"
}
```


## Post thought

Create a new thought using the data provided in the request body, generate a unique ID for the thought, and insert the thought into the database.

**URL** : `/thoughts`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**
```json
{
  "author": "[string]",
  "content": "[string]"
}
```
**Data example**
```json
{
  "author": "Jane Doe",
  "content": "This is my new thought"
}
```

## Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
  "status": "SUCCESS",
  "result": {
    "author": "Jane Doe",
    "content": "This is my new thought",
    "id": "3"
  }
}
```


## Update thought

Update an existing thought with the specified ID using the data provided in the request body, and update the corresponding record in the database.

**URL** : `/thoughts/:id`

**Method** : `PUT`

**Auth required** : No

**Permissions required** : None

**Data constraints**
```json
{
  "author": "[string]",
  "content": "[string]"
}
```

**Data example**
```json
{
  "author": "Jane Doe",
  "content": "This is my updated thought"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "SUCCESS",
  "result": {
    "author": "Jane Doe",
    "content": "This is my updated thought",
    "id": "1"
  }
}
```
## Delete thought

Delete the thought with the specified ID from the database.

**URL** : `/thoughts/:id`

**Method** : `DELETE`

**Auth required** : No

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": "SUCCESS",
  "result": {
    "id": "1"
  }
}
```

#### Generated with OpenAi's ChatGPT
# README

RandoPic is a Rails Backend built for use in conjunction with the [JavaScript Fetch and Dom Code Challenge](https://github.com/learn-co-curriculum/javascript-code-challenge-fetch-and-dom).  This backend is designed to allow for students to render a specific image using GET, manipulate the DOM with JavaScript using JSON data and to persist changes (incrementing image 'likes' and adding associated comments).  This repo is meant for instructor use

Endpoints:

Rewrite all records with original seed data (reset for new challenge):
```
GET 'http://localhost:3000/admin/dont-use-this-route/reset_to_seed'
Example Response:
[
  {
    "id": 101,
    "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
    "name": "Science Fair",
    "like_count": 0,
    "comments": [
      {
        "id": 101,
        "content": "first comment!",
        "image_id": 101,
        "created_at": "2017-10-04T16:20:08.622Z",
        "updated_at": "2017-10-04T16:20:08.622Z"
      }
    ]
  },

  ...
```

Get one image by id:
```
GET 'http://localhost:3000/images/:image_id'

Example Response:
{
  "id": 1,
  "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
  "name": "Science Fair",
  "like_count": 0,
  "comments": [
    {
      "id": 1,
      "content": "first comment!",
      "created_at": "2017-09-27T18:18:05.623Z",
      "updated_at": "2017-09-27T18:18:05.623Z"
    }
  ]
}
```

Increment Image Likes by One:
```
POST 'http://localhost:3000/likes'

Required keys in the body of the request:
{
  image_id: <insert image id here>
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

Example Response:
{
    "id": 101,
    "image_id": 1,
    "created_at": "2017-11-17T13:52:22.167Z",
    "updated_at": "2017-11-17T13:52:22.167Z"
}
```
Add comment to image:
```
POST 'http://localhost:3000/comments'

Required keys in the body of the request:
{
  image_id: <insert image id here>,
  content: <insert comment content here>
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

Example Response (created comment):
{
  {
    "id": 2,
    "content": "first comment!",
    "created_at": "2017-09-27T18:18:05.623Z",
    "updated_at": "2017-09-27T18:18:05.623Z"
  }
}
```

Delete comment:
```
DELETE 'http://localhost:3000/comments/:comment_id'

Example Response:
{
  message: 'Comment Successfully Destroyed'
}
```

# JavaScript Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- ES6 Classes
- Fetching from APIs

## Instructions

Today we're building RandoPic, an app for viewing a single random picture. There is a backend API that we have provided and you will be building out the frontend.

A RandoPic user will be able to do the following things:

  - As a user, when the page loads I will see an image, any comments that image has, and the number of likes that image has.

  - As a user, I can click to like an image, which will increase the number of likes that image has by one.

  - As a user I can fill out an input fields and submit the form to add a comment to an image. I should see my new comment below any previous comments.

  - As a user, when I refresh the page, any comments or likes I have added should be persisted to the backend API and I should see my changes on the page.

## Functionality demo
  ![Example](./animated_challenge_example.gif "Example Functionality")

We have also provided an `examplePage.html` file to see an example of the HTML you'll want to generate for a photo. NOTE that examplePage.html is a static html page; you'll be dynamically manipulating the `index.html` file using JavaScript.

## The API

Instead of actually accessing the data from a remote API, this challenge uses a package called [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up.

1 - Run the command `npm install -g json-server` in the command line from this directory

2 - Run  `json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

*Troubleshooting: If this fails, be sure you don't already have something running on port 3000.
If you can't get the server running, let your instructor know ASAP.*


## Deliverables and How to Approach

For this challenge it is important to work iteratively, one feature at a time, before moving on to the next. You should **prioritize making code that works over attempting all of the deliverables.**

We have provided what we believe to be a good breakdown of how to approach the this problem.

## Step 1 - Get the Image Data

When the page loads you will need to make a request to the API to get the data about your picture. The API follows RESTful conventions.

#### API Docs
#### Endpoint to show an individual Image
```
GET 'http://localhost:3000/images/1?_embed=comments'

Note that we need to explicity tell the server to return child comments for the image by adding
`?_embed=comments` to the image URL.

Example Response:
{
  "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
  "name": "Science Fair",
  "likeCount": 0,
  "id": 1,
  "comments": [
    {
      "content": "first comment!",
      "imageId": 1,
      "id": 1
    }
  ]
}
```

Use the data from the API response to append the information to the DOM. You will need to add:

- the image url
- the image name
- the number of likes
- any comments in an unordered list

Use the example html to guide you as to where this data should go.

(If you cannot get your fetch request to work correctly you can always use the example response above to append content to the DOM and work with for the subsequent steps.)

## Step 2 - Like Feature (Frontend)

The next feature to approach is the functionality to add likes to a picture. First get this working in the browser only, without worrying about persistence.

Clicking the 'Like' button should increase the number of likes by one.

A user can like the same picture multiple times.

## Step 3 - Like Feature (Backend)

This app will use what is called *optimistic rendering*. This means the DOM will be updated before the changes are added to the database.  When a user clicks the 'Like' button we will immediately update the DOM.  Next your job is to make a PATCH request to persist the new Like in the backend database. It is a PATCH request because we are updating an existing image in the database, specifically its likeCount.

#### API Docs
#### Endpoint to create a Like
```
PATCH 'http://localhost:3000/images/1'

Required keys in the body of the request:
{
  likeCount: <insert number here>
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

Example Response:
{
  "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
  "name": "Science Fair",
  "likeCount": <new count>,
  "id": 1,
  "comments": [
    {
      "id": 1,
      "content": "first comment!",
      "imageId": 1
    }
  ]
}
```

Since we are using optimistic rendering, you shouldn't have to do anything with the response.

To test your code you should be able to refresh your index.html and see the number of likes be the increased number.

## Step 4 - Comment Feature (Frontend)

The next feature to approach is the functionality to add comments to a picture. First get this working in the browser only without worrying about persistence.

Filling out the input and clicking 'Submit' should append your new comment as an `<li>` to the comments unordered list element. You should also clear out the comment input, so it's an empty field for the next comment to be added.

## Step 5 - Comment Feature (Backend)

As before, after optimistically rendering a comment we need to persist the comment to the database.

#### API Docs
#### Endpoint to create a Comment
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
  "imageId": 1,
  "content": "first comment!",
  "id": 2
}
```

If your response contains an id but no content key, check to make sure you are sending a correctly formatted request body and headers.

Since we are using optimistic rendering, you shouldn't have to do anything with the response.

To test your code you should be able to refresh the page and see any comments you added.

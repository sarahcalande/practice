const image_id = 15 //ENTER YOUR NUMBER HERE
const imageURL = `https://randopic.herokuapp.com/images/${image_id}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`
let adapter;
document.addEventListener('DOMContentLoaded', function() {
  adapter = new Adapter(image_id)
  adapter.getImage()
    .then(json => new Image(json))
    .then(img => img.render())

  // fetch(imageURL)
  //   .then(res => res.json())
  //   .then(json => new Image(json))
  //   .then(img => img.render())
})

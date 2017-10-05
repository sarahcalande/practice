class Adapter {
  constructor(image_id) {
    this.imageID = image_id
    this.imageURL = `https://randopic.herokuapp.com/images/${yourNumber}`
    this.likeURL = `https://randopic.herokuapp.com/likes/`
    // this.likeURL = `http://192.168.4.170:3000/likes/`
    this.commentsURL = `https://randopic.herokuapp.com/comments/`
  }

  getImage() {
    return this.get(this.imageURL)
  }

  postLike() {
    return this.post(this.likeURL, {image_id: this.imageID})
  }

  postComment(commentText) {
    let postBody = {
      image_id: this.imageID,
      comment: commentText
    }

    return this.post(this.commentsURL, postBody)
  }

  deleteComment(id) {
    return this.delete(this.commentsURL + id)
  }

  get(url) {
    return fetch(url).then(res => res.json())
  }

  post(url, postBody) {
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(postBody)
    }).then(res => res.json())
  }

  delete(url) {
    return fetch(url, {
      method: 'delete'
    }).then(res => res.json())
  }
}

class Image {
  constructor(json) {
    this.imageURL = json.url
    this.like_count = json.like_count
    this.comments = json.comments.map(comment => new Comment(comment))
    document.querySelector('#like_button').addEventListener('click', this.addLike.bind(this))
    document.querySelector('#comment_form').addEventListener('submit', this.addComment.bind(this))
  }

  addLike(e) {
    this.like_count ++
    this.render()

    adapter.postLike()
  }

  addComment(e) {
    e.preventDefault()
    let commentText = e.currentTarget.children[0].value
    e.currentTarget.children[0].value = ''
    if (commentText.length > 0) {
      adapter.postComment(commentText)
        .then(json => {
          this.comments = json.map(comment => new Comment(comment))
          this.render()
        })
    }
  }

  deleteComment(e) {
    let id = e.currentTarget.dataset.id

    adapter.deleteComment(id)
      .then(json => {
        this.comments = json.map(comment => new Comment(comment))
        this.render()
      })
  }

  render() {
    document.querySelector('#image').src = this.imageURL
    document.querySelector('#likes').innerText = this.like_count
    let commentDiv = document.querySelector('#comments')
    commentDiv.innerHTML = ''
    if (this.comments.length > 0) {
      for (var i = 0; i < this.comments.length; i++) {
        this.comments[i].render(commentDiv)
        commentDiv.lastChild.querySelector('button').addEventListener('click', this.deleteComment.bind(this))
      }
    }
  }
}

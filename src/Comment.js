class Comment {
  constructor(json) {
    this.id = json.id
    this.content = json.content
  }

  render(parent) {
    let div = document.createElement('div')
    div.innerText = this.content

    let del = document.createElement('button')
    del.style.margin = '20px'
    del.className = 'btn btn-danger btn-sm'
    del.innerText = "Delete"
    del.dataset.id = this.id

    div.appendChild(del)
    parent.appendChild(div)
  }
}

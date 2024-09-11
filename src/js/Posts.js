const { v4: uuidv4 } = require('uuid')

class Posts {
  constructor(posts = []) {
    this.posts = posts.map((post) => this.getPostWithId(post))
  }

  getPostWithId(post) {
    return { ...post, id: uuidv4() }
  }

  getPosts() {
    return this.posts
  }

  addPost(post) {
    this.posts.push(this.getPostWithId(post))
  }

  getPost(id) {
    return this.posts.find((post) => post.id === id)
  }

  updatePost(id, content) {
    this.posts = this.posts.map((post) => (post.id === id ? { ...post, content } : post))
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}

module.exports = Posts

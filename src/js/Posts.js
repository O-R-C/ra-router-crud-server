const { v4: uuidv4 } = require('uuid')

class Posts {
  constructor(posts = []) {
    this.posts = posts.map((post) => this.getPostWithProps(post))
  }

  getPostWithProps(post) {
    return { ...post, id: uuidv4(), author: 'Post author', createdAt: new Date() }
  }

  getPosts() {
    return this.posts
  }

  addPost(post) {
    this.posts.push(this.getPostWithProps(post))
  }

  getPost(id) {
    return this.posts.find((post) => post.id === id)
  }

  updatePost(id, content) {
    console.log('🚀 ~ id, content:', id, content)
    this.posts = this.posts.map((post) => (post.id === id ? { ...post, ...content } : post))
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}

module.exports = Posts

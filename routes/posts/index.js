const router = require('express').Router()
const postsData = require('../../src/js/postsData')
const Posts = require('../../src/js/Posts')
const posts = new Posts(postsData)

router.get('/', async (req, res) => {
  res.send(JSON.stringify(posts.getPosts()))
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  res.send(JSON.stringify(posts.getPost(id)))
})

router.post('/', async (req, res) => {
  const post = req.body
  posts.addPost(post)
  res.status(204).end()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const content = req.body
  posts.updatePost(id, content)
  res.status(204).end()
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  posts.deletePost(id)
  res.status(204).end()
})

module.exports = router

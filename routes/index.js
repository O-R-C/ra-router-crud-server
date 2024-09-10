const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send('Hello World!')
})

router.use('/posts', require('./posts'))

module.exports = router

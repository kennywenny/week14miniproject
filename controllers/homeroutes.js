const router = require('express').Router();
const Project = require('../models/Project')

router.get('/', async (req, res) => {
  const projects = await Project.findAll({
    raw: true
  })
  res.render('home', {
    projects
  })
})

router.get('/project/:id', async (req, res) => {
  const id = req.params.id
  res.send('PROJECT ID ' + id)
})

module.exports = router;
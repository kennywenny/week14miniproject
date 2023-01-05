const router = require('express').Router();
const Project = require('../models/Project')

router.get('/', async (req, res) => {
  const projects = await Project.findAll({
    raw: true
  })
  console.log(projects)
  res.render('home')
})

module.exports = router;
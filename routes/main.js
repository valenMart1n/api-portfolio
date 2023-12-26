const express = require("express");
const router = express.Router();
const path = require("path");

const projects = require("../controllers/projects");

router.get("/", projects.data);

module.exports = router;
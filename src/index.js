"use strict";

const express = require("express");
const cors = require("cors");

express()
	.use(cors())
	.use(express.static('public'))
	.listen(3001);
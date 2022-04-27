const express = require('express');
const router = express.Router();
const fs = require('fs');
const morgan = require('morgan')
const {
    loginAdmin
} = require('../../controllers/admin/admin.controller');

router.post('/loginAdmin',loginAdmin); // login admin

module.exports = router;
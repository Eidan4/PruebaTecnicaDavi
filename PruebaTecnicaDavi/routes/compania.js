const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields,
        validateJWT
    } = require('../middlewares');

const { 
        createCompania,
    } = require('../controllers');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = Router();

router.post('/', [],createCompania );


module.exports = router;
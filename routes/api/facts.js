const express = require('express');
const router = express.Router();
const factsCtrl = require('../../controllers/facts');

router.get('/', factsCtrl.index);


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

// router.get('/', () => { console.log('facts get route!!!')});

router.post('/', checkAuth, factsCtrl.create);
router.get('/:id', checkAuth, factsCtrl.show);
router.put('/:id', checkAuth, factsCtrl.update);
router.delete('/:id', checkAuth, factsCtrl.deleteOne);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({err: 'Not Authorized'});
}

module.exports = router;
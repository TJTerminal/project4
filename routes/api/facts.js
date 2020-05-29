const express = require('express');
const router = express.Router();
const factsCtrl = require('../../controllers/facts');

router.get('/', factsCtrl.index);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

router.post('/', factsCtrl.create);
router.put('/:id', factsCtrl.update);
router.delete('/:id', factsCtrl.deleteOne);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({err: 'Not Authorized'});
// }

module.exports = router;
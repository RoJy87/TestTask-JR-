const router = require('express').Router();
const NotFoundError = require('../middlewares/errors/NotFoundError');

router.use('/trends', require('./trends'));

router.all('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;

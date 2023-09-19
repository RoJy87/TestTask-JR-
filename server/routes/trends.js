const router = require('express').Router();
const {
  setTrends,
  getTrends,
  deleteTrends,
  updateTrends,
} = require('../controllers/trends');

router.get('/', getTrends);
router.post('/', setTrends);
router.patch('/', updateTrends);
router.delete('/:owner', deleteTrends);

module.exports = router;

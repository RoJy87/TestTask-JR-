const router = require('express').Router();
const {
  setTrends,
  getTrends,
  getByParams,
  deleteTrends,
  updateTrends,
} = require('../controllers/trends');

router.get('/', getTrends);
router.get('/:ownerOrName', getByParams);
router.post('/', setTrends);
router.patch('/', updateTrends);
router.delete('/:owner', deleteTrends);

module.exports = router;

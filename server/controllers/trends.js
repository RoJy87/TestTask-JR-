const Trend = require('../models/trend');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const { CREATED_CODE } = require('../constants/constants');

module.exports.getTrends = async (req, res, next) => {
  try {
    const trend = await Trend.find({});
    if (!trend) throw new NotFoundError();
    res.send(trend);
  } catch (err) {
    next(err);
  }
};

module.exports.setTrends = async (req, res, next) => {
  try {
    const { name, avatar, stars, repositoryName, repository, owner } = req.body;
    const trend = await Trend.create({
      name,
      avatar,
      stars,
      repositoryName,
      repository,
      owner,
    });
    res.status(CREATED_CODE).send(trend);
  } catch (err) {
    next(err);
  }
};

module.exports.updateTrends = async (req, res, next) => {
  try {
    const { avatar, stars, owner } = req.body;
    let trend = await Trend.findOne({ owner });
    trend = await Trend.findByIdAndUpdate(
      trend._id,
      { avatar, stars },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!trend) throw new NotFoundError();
    res.send(trend);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTrends = async (req, res, next) => {
  try {
    const { owner } = req.params;
    let trend = await Trend.findOne({ owner });
    if (!trend) throw new NotFoundError();
    trend = await Trend.findByIdAndRemove(trend._id);
    res.send(trend);
  } catch (err) {
    next(err);
  }
};

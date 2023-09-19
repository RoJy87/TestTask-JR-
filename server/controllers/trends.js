const Trend = require('../models/trend');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const CreateUserError = require('../middlewares/errors/CreateUserError');
const ValidationError = require('../middlewares/errors/ValidationError');
const {
  CREATED_CODE,
  DUBLICATE_ERROR_CODE,
} = require('../constants/constants');

module.exports.getByParams = async (req, res, next) => {
  try {
    const { ownerOrName } = req.params;
    console.log(ownerOrName);
    if (!isNaN(ownerOrName)) {
      const trend = await Trend.findOne({ owner: ownerOrName });
      if (!trend) throw new NotFoundError();
      res.send(trend);
    } else {
      const trend = await Trend.findOne({ name: ownerOrName });
      if (!trend) throw new NotFoundError();
      res.send(trend);
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getTrends = async (req, res, next) => {
  try {
    const trend = await Trend.find({});
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
    if (err.name === 'ValidationError') {
      next(new ValidationError());
    }
    if (err.code === DUBLICATE_ERROR_CODE) {
      next(new CreateUserError());
    }
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
    if (err.name === 'ValidationError') {
      next(new ValidationError());
    }
    if (err.code === DUBLICATE_ERROR_CODE) {
      next(new CreateUserError());
    }
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

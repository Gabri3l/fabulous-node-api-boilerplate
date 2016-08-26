import Horn from './hornModel';
import logger from '../../util/logger';

const params = (req, res, next, id) => {
  logger.log('Hitting horn middleware');
  Horn.findById(id)
    .then((horn) => {
      if (!horn) {
        res.status(400).json({
          error: {
            message: 'No horn with that id'
          }
        });
      } else {
        req.horn = horn;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

const get = (req, res, next) => {
  Horn.find({})
    .then((horns) => {
      res.json(horns);
    })
    .catch((err) => {
      next(err);
    });
};

const getOne = (req, res) => {
  const horn = req.horn;
  res.json(horn);
};

const post = (req, res, next) => {
  const newHorn = req.body;
  Horn.create(newHorn)
  .then((horn) => {
    res.status(201).json({
      success: {
        message: 'New horn created successfully',
        data: horn
      }
    });
  })
  .catch((err) => {
    next(err);
  });
};

const put = (req, res, next) => {
  const horn = req.horn;
  const update = req.body;
  Object.assign(horn, update);

  horn.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Horn updated with success',
          data: saved
        }
      });
    }
  });
};


const del = (req, res, next) => {
  req.horn.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Horn deleted with success',
          data: removed
        }
      });
    }
  });
};

module.exports = {
  params,
  get,
  getOne,
  post,
  put,
  del
};

import Unicorn from './unicornModel';
import logger from '../../util/logger';

const params = (req, res, next, id) => {
  logger.log('Hitting unicorn middleware');
  Unicorn.findById(id)
    .then((unicorn) => {
      if (!unicorn) {
        res.status(400).json({
          error: {
            message: 'No unicorn with that id'
          }
        });
      } else {
        req.unicorn = unicorn;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

const get = (req, res, next) => {
  Unicorn.find({})
    .then((unicorns) => {
      res.json(unicorns);
    })
    .catch((err) => {
      next(err);
    });
};

const getOne = (req, res) => {
  const unicorn = req.unicorn;
  res.json(unicorn);
};

const post = (req, res, next) => {
  const newUnicorn = req.body;
  Unicorn.create(newUnicorn)
  .then((unicorn) => {
    res.status(201).json({
      success: {
        message: 'New unicorn created successfully',
        data: unicorn
      }
    });
  })
  .catch((err) => {
    next(err);
  });
};

const put = (req, res, next) => {
  const unicorn = req.unicorn;
  const update = req.body;
  Object.assign(unicorn, update);

  unicorn.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Unicorn updated with success',
          data: saved
        }
      });
    }
  });
};


const del = (req, res, next) => {
  req.unicorn.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Unicorn deleted with success',
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

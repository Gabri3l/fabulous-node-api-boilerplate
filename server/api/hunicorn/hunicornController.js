import Hunicorn from './hunicornModel';
import logger from '../../util/logger';

const params = (req, res, next, id) => {
  logger.log('Hitting hunicorn middleware');
  Hunicorn.findById(id)
    .then((hunicorn) => {
      if (!hunicorn) {
        res.status(400).json({
          error: {
            message: 'No hunicorn with that id'
          }
        });
      } else {
        req.hunicorn = hunicorn;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

const get = (req, res, next, next) => {
  Hunicorn.find({})
    .then((hunicorns) => {
      res.json(hunicorns);
    })
    .catch((err) => {
      next(err);
    });
};

const getOne = (req, res) => {
  const hunicorn = req.hunicorn;
  res.json(hunicorn);
};

const post = (req, res, next) => {
  const newHunicorn = req.body;
  Hunicorn.create(newHunicorn)
  .then((hunicorn) => {
    res.status(201).json({
      success: {
        message: 'New hunicorn created successfully',
        data: hunicorn
      }
    });
  })
  .catch((err) => {
    next(err);
  });
};

const put = (req, res, next) => {
  const hunicorn = req.hunicorn;
  const update = req.body;
  Object.assign(hunicorn, update);

  hunicorn.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Hunicorn updated with success',
          data: saved
        }
      });
    }
  });
};


const del = (req, res, next) => {
  req.hunicorn.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json({
        success: {
          message: 'Hunicorn deleted with success',
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

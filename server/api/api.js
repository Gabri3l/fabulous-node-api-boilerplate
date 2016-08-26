import express from 'express';
import unicornRoutes from './unicorn/unicornRoutes';

const router = express.Router();

router.use('/unicorns', unicornRoutes);

module.exports = router;

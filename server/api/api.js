import express from 'express';
import unicornRoutes from './unicorn/unicornRoutes';
const router = express.Router();

router.use('/businesses', unicornRoutes);

module.exports = router;

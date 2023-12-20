import { Router } from 'express';
import spreadController from '../controllers/spreadController';

const router = Router();

router.get('/spreads', spreadController.getAllSpreads);

router.get('/spreads/:market', spreadController.getSpreadByMarket);

router.post('/spreads/alert', spreadController.setAlertSpread);

export default router;
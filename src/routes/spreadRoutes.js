import { Router } from 'express';
import spreadController from '../controllers/spreadController';


const router = Router();


router.get('/spreads', spreadController);

router.get('/spreads/:market', spreadController);

router.post('/spreads/alert', spreadController);


export default router;
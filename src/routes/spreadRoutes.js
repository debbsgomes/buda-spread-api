import { Router } from 'express';
import spreadController from '../controllers/spreadController';

const router = Router();

router.get("/", (request, response) => {
    response.status(200).json({
        "title": "Buda.com API integrations",
        "version": "1.0.0",
        "message": "Hello World"
    });
});

router.get('/spreads', spreadController.getAllSpreads);

router.get('/spreads/:market', spreadController.getSpreadByMarket);

router.post('/spreads/alert', spreadController.setAlertSpread);

export default router;
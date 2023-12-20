import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import budaApiService from './services/budaApiService';
import spreadState from './utils/spreadState';
import isSpreadGreaterThanAlert from './utils/isSpreadCrossedAlertThreshold';


import router from './routes/spreadRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/', router);

app.get('/getMarketDetails/:marketId', async (req, res) => {
    const { marketId } = req.params;

    const marketDetails = await budaApiService.getMarketDetails(marketId);
    res.json(marketDetails);
});

app.get('/getMarketVolume/:marketId', async (req, res) => {
    const { marketId } = req.params;

    const marketVolume = await budaApiService.getMarketVolume(marketId);
    res.json(marketVolume);
    
});

app.get('/getAllTickers', async (req, res) => {
    
    const allTickers = await budaApiService.getAllTickers();
    res.json(allTickers);

});

app.get('/getTransactionCosts/:currency/:transactionType', async (req, res) => {
    const { currency, transactionType } = req.params;

    const transactionCosts = await budaApiService.getTransactionCosts(currency, transactionType);
    res.json(transactionCosts);
    
});

app.get('/getBalances', async (req, res) => {
    
    const balances = await budaApiService.checkAccountBalance();
    res.json(balances);
});

app.get('/getMarketData', async (req, res) => {
    
    const marketData = await budaApiService.getMarketData();
    res.json(marketData);
});

app.get('/getOrderBook/:market', async (req, res) => {
    const { market } = req.params;

    const orderBook = await budaApiService.getOrderBook(market);
    res.json(orderBook);

});

app.get('/analyzeOrderBook/:market', async (req, res) => {
    const { market } = req.params;

    const orderBook = await budaApiService.getOrderBook(market);
    budaApiService.analyzeOrderBook(orderBook);
    res.json({ message: 'Order book analysis completed' });
    
});

app.get('/checkSpreadAlert', (req, res) => {
    const currentSpread = spreadState.getSpread();
    const alertSpread = spreadState.getAlertSpread();
  
    const isAlertTriggered = isSpreadGreaterThanAlert(currentSpread, alertSpread);
  
    res.json({ currentSpread, alertSpread, isAlertTriggered });
  });  

app.post('/updateSpread', (req, res) => {
    const { newSpread, newAlertSpread } = req.body;
  
    spreadState.setSpread(newSpread);
    spreadState.setAlertSpread(newAlertSpread);
  
    res.json({ message: 'Spread updated successfully' });
});

app.post('/getQuotation/:marketId', async (req, res) => {
    const { marketId } = req.params;
    const { type, amount, limit } = req.body;

    const quotation = await budaApiService.getQuotation(marketId, type, amount, limit);
    res.json(quotation);
     
});

app.post('/placeOrder', async (req, res) => {
    const { market, type, amount, price } = req.body;

    const orderResult = await budaApiService.placeOrder(market, type, amount, price);
    res.json(orderResult);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });


app.use(morgan('dev'));


export default app;
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import budaApiService from './services/budaApiService';
import router from './routes/spreadRoutes'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/', router);


app.get('/getMarketDetails/:marketId', async (req, res) => {
    const { marketId } = req.params;

    try {
        const marketDetails = await budaApiService.getMarketDetails(marketId);
        res.json(marketDetails);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getMarketVolume/:marketId', async (req, res) => {
    const { marketId } = req.params;

    try {
        const marketVolume = await budaApiService.getMarketVolume(marketId);
        res.json(marketVolume);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/getAllTickers', async (req, res) => {
    try {
        const allTickers = await budaApiService.getAllTickers();
        res.json(allTickers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/getQuotation/:marketId', async (req, res) => {
    const { marketId } = req.params;
    const { type, amount, limit } = req.body;

    try {
        const quotation = await budaApiService.getQuotation(marketId, type, amount, limit);
        res.json(quotation);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getTransactionCosts/:currency/:transactionType', async (req, res) => {
    const { currency, transactionType } = req.params;

    try {
        const transactionCosts = await budaApiService.getTransactionCosts(currency, transactionType);
        res.json(transactionCosts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getBalances', async (req, res) => {
    try {
        const balances = await budaApiService.checkAccountBalance();
        res.json(balances);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getMarketData', async (req, res) => {
    try {
        const marketData = await budaApiService.getMarketData();
        res.json(marketData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/placeOrder', async (req, res) => {
    const { market, type, amount, price } = req.body;

    try {
        const orderResult = await budaApiService.placeOrder(market, type, amount, price);
        res.json(orderResult);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getOrderBook/:market', async (req, res) => {
    const { market } = req.params;

    try {
        const orderBook = await budaApiService.getOrderBook(market);
        res.json(orderBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/analyzeOrderBook/:market', async (req, res) => {
    const { market } = req.params;

    try {
        const orderBook = await budaApiService.getOrderBook(market);
        budaApiService.analyzeOrderBook(orderBook);
        res.json({ message: 'Order book analysis completed' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.use(morgan('dev'));


export default app;
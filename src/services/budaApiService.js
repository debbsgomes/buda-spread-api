import axios from 'axios';

const BUDA_API_BASE_URL = 'http://api.buda.com';

const budaApiService = {


    getMarketData: async () => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/v2/markets`);
            return response.data;
        } catch (error) {
            console.error('Error fetching market data from Buda.com:', error.message);
            throw error;
        }
    },


    getMarketDetails: async (marketId) => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/markets/${marketId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching market details from Buda.com:', error.message);
            throw error;
        }
    },


    getMarketVolume: async (marketId) => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/markets/${marketId}/volume`);
            return response.data;
        } catch (error) {
            console.error('Error fetching market volume from Buda.com:', error.message);
            throw error;
        }
    },


    getMarketTicker: async (marketId) => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/markets/${marketId}/ticker`);
            return response.data;
        } catch (error) {
            console.error('Error fetching market ticker from Buda.com:', error.message);
            throw error;
        }
    },

    getAllTickers: async () => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/tickers`);
            return response.data;
        } catch (error) {
            console.error('Error fetching all tickers from Buda.com:', error.message);
            throw error;
        }
    },


    placeOrder: async (market, type, amount, price) => {
        try {
            const ordersEndpoint = `${BUDA_API_BASE_URL}/v2/markets`;

            const orderPayload = {
                type,
                amount,
                price,
            };

            const response = await axios.post(ordersEndpoint, orderPayload);

            return response.data;
        } catch (error) {
            console.error('Error placing order on Buda.com:', error.message);
            throw error;
        }
    },


    checkAccountBalance: async () => {
        try {
            const balancesEndpoint = `${BUDA_API_BASE_URL}/v2/balances`;

            const response = await axios.get(balancesEndpoint);

            return response.data;
        } catch (error) {
            console.error('Error checking account balances on Buda.com:', error.message);
            throw error;
        }
    },

    getOrderBook: async (market) => {
        try {
            const orderBookEndpoint = `${BUDA_API_BASE_URL}/v2/markets/${market}/order_book`;

            const response = await axios.get(orderBookEndpoint);

            return response.data;
        } catch (error) {
            console.error('Error fetching order book from Buda.com:', error.message);
            throw error;
        }
    },

    getTrades: async (marketId) => {
        try {
            const timestamp = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 7;
            const response = await axios.get(`${BUDA_API_BASE_URL}/markets/${marketId}/trades`, {
                params: {
                    timestamp,
                    limit: 50,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching trades from Buda.com:', error.message);
            throw error;
        }
    },

    getQuotation: async (marketId, type, amount, limit = null) => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/markets/${marketId}/quotations`, {
                type,
                amount,
                limit,
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching quotation from Buda.com:', error.message);
            throw error;
        }
    },

    getTransactionCosts: async (currency, transactionType) => {
        try {
            const response = await axios.get(`${BUDA_API_BASE_URL}/currencies/${currency}/fees/${transactionType}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching transaction costs from Buda.com:', error.message);
            throw error;
        }
    },


    analyzeOrderBook: (orderBookData) => {

        const buyOrders = orderBookData.buy;
        const sellOrders = orderBookData.sell;

        const spread = sellOrders[0].price - buyOrders[0].price;

        const buyOrdersSummary = buyOrders.map((order) => ({
            price: order.price,
            quantity: order.amount,
            type: 'buy',
        }));

        const sellOrdersSummary = sellOrders.map((order) => ({
            price: order.price,
            quantity: order.amount,
            type: 'sell',
        }));


        const orderBookSummary = [...buyOrdersSummary, ...sellOrdersSummary];

        console.log('Order Book Summary:', orderBookSummary);
        console.log('Spread:', spread);

    },
};

export default budaApiService;

import budaApiService from "./budaApiService";
import calculateSpread from "../utils/spreadUtils";
import isSpreadGreaterThanAlert from "../utils/isSpreadCrossedAlertThreshold";


import alertModel from "../models/alertModel";


const analyzeSpread = (orderBook) => {
    const buyOrders = orderBook.buy;
    const sellOrders = orderBook.sell;

    const calculatedSpread = calculateSpread(buyOrders, sellOrders);
  
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
  
    return {
      spread: calculatedSpread,
      orderBookSummary: orderBookSummary,
    };
  };


const spreadService = {

    getAllSpreads: async () => {
      try {
        const marketData = await budaApiService.getMarketData();
        return marketData;
      } catch (error) {
        console.error('Error getting all spreads:', error.message);
        throw error;
      }
    },
  
    getSpreadByMarket: async (market) => {
      try {
        const orderBook = await budaApiService.getOrderBook(market);
        const spread = analyzeSpread(orderBook);
        return spread;
      } catch (error) {
        console.error(`Error getting spread for market ${market}:`, error.message);
        throw error;
      }
    },
  
    setAlertSpread: async (alertData) => {
      try {
        const alert = new alertModel(alertData);
        await alert.save();
        return { message: 'Alert set successfully' };
      } catch (error) {
        console.error('Error saving alert to the database:', error.message);
        throw error;
      }
    },
  };  

export default spreadService;


const calculateSpread = (buyOrders, sellOrders) => {
    const highestBid = buyOrders[0].price;
    const lowestAsk = sellOrders[0].price;
    return lowestAsk - highestBid;
  };
  
  export { calculateSpread };
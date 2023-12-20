import app from "./app.js";
import budaApiService from "./services/budaApiService.js";

const PORT = process.env.PORT || 3000;


budaApiService.getMarketData()
  .then((marketData) => {
    console.log('Market Data:', marketData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
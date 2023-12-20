import spreadService from '../services/spreadService';

const spreadController = {
    getAllSpreads: async (req, res) => {
      try {
        const allSpreads = await spreadService.getAllSpreads();
  
        res.status(200).json({ message: 'Successfully retrieved all spreads', data: allSpreads });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
    getSpreadByMarket: async (req, res) => {
      try {
        const { market } = req.params;
        const spreadForMarket = await spreadService.getSpreadByMarket(market);
  
        res.status(200).json({ message: `Successfully retrieved spread for ${market}`, data: spreadForMarket });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
    setAlertSpread: async (req, res) => {
      try {
        const { body } = req;
  
        const alertSpreadResponse = await spreadService.setAlertSpread(body);
  
        res.status(200).json({ message: 'Alert spread set successfully', data: alertSpreadResponse });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  };

export default spreadController;

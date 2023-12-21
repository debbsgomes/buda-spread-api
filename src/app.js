import express from 'express';
import cors from 'cors';

import spreadRoutes from './routes/spreadRoutes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', spreadRoutes);


export default app;
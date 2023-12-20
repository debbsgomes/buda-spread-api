import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());


app.use(cors());


const routes = require = require('./routes');
app.use('/api/spread', routes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error'});
});

app.use(morgan('dev'));


export default app;
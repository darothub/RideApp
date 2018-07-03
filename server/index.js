import express from 'express';

import bodyParser from 'body-parser';

import router from './routes/routers';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1', router);

app.post('/api/v1/rides', router);

app.get('/api/v1/rides', router);

app.get('/api/v1/ride/:id', router);

app.post('/api/v1/ride/:id/request', router);

const run = () => console.log('way to go server!');

app.listen(PORT, run);
export default app;

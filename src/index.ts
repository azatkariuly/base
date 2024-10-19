import express, { Request, Response } from  'express';
import 'dotenv/config';

import testRoute from './routes/test.js'

const port = 3000

const app = express()
app.use(express.json());

app.use('/test', testRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
import express, { Request, Response } from  'express';
import 'dotenv/config';

const port = 3000

const app = express()
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
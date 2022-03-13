import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/route.js'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.listen(8000, () => console.log('server listen on port 8000'));
app.get('/', (req, res) => res.send('<h1> Hello Mayur Server started </h1>'));
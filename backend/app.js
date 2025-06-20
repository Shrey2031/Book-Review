import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','PUT','POST','DELETE'],
    credentials:true
}))

app.use(express.json({limit:'12kb'}));
app.use(express.urlencoded({extended:true,limit:'12kb'}));
app.use(express.static('public'));
app.use(cookieParser());

import bookRoutes from './src/routes/book.routes.js';
import reviewRoutes from './src/routes/review.routes.js';
import userRoutes from './src/routes/user.routes.js';
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/books',bookRoutes);
app.use('/api/v1/reviews',reviewRoutes);





export {app}
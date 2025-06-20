import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './src/db/connect.js';


const PORT = process.env.PORT || 5000;

dotenv.config({ path: './.env' }); 

connectDB()
.then(() => {
   app.listen( PORT, () => {
          console.log(`server is running at port: ${PORT}`);
   })
})
.catch((err) => {
    console.log("mongodb connection failed : !!",err)
})
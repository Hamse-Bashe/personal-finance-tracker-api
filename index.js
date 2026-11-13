// packages
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger.js';


const app = express();
dotenv.config()

// routes
import authRoute from './routes/auth.js' 
import adminRoute from './routes/admin.js' 
import transactionRoutes from './routes/transactions.js'
import uploadRoute from './routes/upload.js'

// middlewares
import { errorHandler } from './middlewares/errorHandler.js';
import { limiter } from './middlewares/rateLimiter.js';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notFound.js';



app.use(express.json())
app.use(helmet())
app.use('/auth', authRoute)
app.use('/admin', adminRoute)
app.use('/transaction', transactionRoutes)
app.use('/upload', uploadRoute)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// cors
app.use(
  cors({
    origin: ["http://localhost:5173", "https://dugsiiye.com"],
  }),
);
// rate limiter
app.use(limiter)
// logger
app.use(logger)
// not found
app.use(notFound)
// error handler middleware
app.use(errorHandler);

// Database connection
mongoose.connect(process.env.NODE_ENV == "development" ? process.env.MONGO_URI_DEV: process.env.MONGO_URI_PRO)
    .then(() => console.log("✅ MongoDb connected."))
    .catch((err) => console.log(`❌ Connection error: ${err}`));


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})

import express from 'express';
import userRoutes from './routes/userRoutes';
import { setupSwagger } from './swagger';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

setupSwagger(app);

export default app;

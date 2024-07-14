import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
    console.log('MongoDB connected');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB', error.message);
    } else {
      console.error('Unexpected error', error);
    }
    process.exit(1);
  }
};

export default connectDB;

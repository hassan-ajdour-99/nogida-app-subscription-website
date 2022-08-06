import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectWithMongodb = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });

    console.log(
      `MongoDB is Connected ${connectWithMongodb.connection.host}`.cyan
        .underline
    );
  } catch (error) {
    console.log(`ERROR : ${error.message}`.red.underline.bold);

    process.exit(1);
  }
};

export default connectDb;

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import User from "./Models/useModel.js";
import { UsersData } from "./data/users.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    // Delete User in Db
    await User.deleteMany();

    // Add Users to db
    await User.insertMany(UsersData);
    console.log(`DATA Imported!`.green.inverse);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);

    process.exit(1);
  }
};

const destroyData = async (data) => {
  try {
    // Delete User in Db
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);

    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

import mongoose from "mongoose";
import { exit } from "process";
import { DBNAME } from "../constant.js";
import chalk from "chalk";

const DBConnection = async () => {
  try {
    const databaseInstance = mongoose.connect(
      `${process.env.DATABASE_CONNECTION_URL}/${DBNAME}`
    );
    console.log(
      chalk.bgBlue(
        `MongoDB Connected !! DB HOST !! ${(await databaseInstance).connection.host}`
      )
    );
  } catch (error) {
    console.log(chalk.bgRedBright("Error From Database/index.js:", error));
    exit(1);
  }
};

export { DBConnection };

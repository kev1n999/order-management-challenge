import mongoose from "mongoose";

export function connect(mongoUri: string) {
  try {
    mongoose.connect(mongoUri);
    console.log("You are connected on mongodb!");
  } catch (err) {
    console.error(`An error occurred while connecting to mongodb\n\n${err}`);
  }
}

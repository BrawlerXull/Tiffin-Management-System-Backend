//4q4w0cwCviCICV4s password for mongodb
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://chaudharichinmay12345:4q4w0cwCviCICV4s@tiffinmanager.iv4boz1.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

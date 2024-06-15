import server from "./index.js";
import "dotenv/config";
import mongoose from "mongoose";

//console.log(process.env.DB_HOST);
mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    server.listen(3000, () => console.log("Server running on 3000 PORT"));
  })
  .catch((error) => {
    console.log("Error", error);
    process.exit(1);
  });

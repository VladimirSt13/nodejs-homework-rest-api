const dotenv = require("dotenv");
const app = require("./app");
const { connectDb } = require("./db/connection");

dotenv.config();

const PORT = process.env.PORT || 3003;

const start = async () => {
  try {
    await connectDb();

    app.listen(PORT, (error) => {
      if (error) {
        console.log("error in server launch:", error);
        process.exit(1);
      }
      console.log("Database connection successful. Use our API on port: 3000");
    });
  } catch (error) {
    console.error(`Failed to lounch application with error: ${error.message}`);
    process.exit(1);
  }
};

start();

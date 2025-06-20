const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/config');
const router = require('./Routes/Auth-routes');
const adminRoute = require("./Routes/Admin-route");
const errorMiddleware = require("./Middleware/Error-middleware");
dotenv.config();

const app = express();
const Port = 5000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));




console.log("Server file is executing...");




console.log("Routes have been set up.");

app.use('/api/auth', router);
app.use("/api/admin",adminRoute);

app.use(errorMiddleware);

connectDB();
app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
})
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const serviceRoute = require("./router/service-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleWare = require("./middleware/error-middleware");


const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth/user", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use("/api/admin", adminRoute);

app.use(errorMiddleWare);

const port = 5000;

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running at port : ${port}`);
    });
});



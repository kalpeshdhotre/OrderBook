// const express = require("express");
import express from "express";

// const customerRoutes = require("./routes/customerRoutes");
import customerRoutes from "./routes/customerRoutes.js";

const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
// 	res.send(`<h4>Hello World</h4>`);
// });

app.use("/customer", customerRoutes);

app.listen(PORT, () => {
	console.log(`app is running at http://localhost:${PORT}`);
});

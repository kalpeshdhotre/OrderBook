const express = require("express");
// import express from "express";

const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
// import customerRoutes from "./routes/customerRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
// 	res.send(`<h4>Hello World</h4>`);
// });

app.use("/customer", customerRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
	console.log(`app is running at http://localhost:${PORT}`);
});

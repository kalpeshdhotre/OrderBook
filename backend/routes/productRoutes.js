// import express from "express";
const express = require("express");
const router = express.Router();

// Create new product
router.post("/create", (req, res) => {
	res.send(`Product created`);
});

// Route to get all users, registerd in Store.
router.get("/get", (req, res) => {
	res.send(`Get all prodcuts from db`);
});

export default router;

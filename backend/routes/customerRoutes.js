import express from "express";

const router = express.Router();

// Route to create new user
router.post("/create", (req, res) => {
	res.send(`User created`);
});

// Route to get all users, registerd in Store.
router.get("/get", (req, res) => {
	res.send(`Received get user request on server`);
});

export default router;

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello from Order Registration app");
});

app.listen(PORT, () => {
	console.log(`app is running at http://localhost:${PORT}`);
});

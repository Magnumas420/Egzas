const express = require("express");
const app = express();
app.listen(3000,() => console.log("Server listening at port 3000$ node index.js"));
app.get("/", (req, res) => {
    res.send("Sveiki");
});
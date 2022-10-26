const express = require("express")
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("News Api Running");
});

app.listen(port, () =>{
    console.log("learnin It server Running on port", port);
})
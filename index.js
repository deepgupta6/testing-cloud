const express = require("express");
const app = express();

app.get("/", (req,res) =>{
	res.send("Hello WOrld!");
});

const port = 3000;

app.listen(port, ()=>{
	console.log(`server is running at https://localhost:$(port)`);
});


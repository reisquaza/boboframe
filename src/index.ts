import express from "express";
import Items from "warframe-items";

const app = express();
const items = new Items({ category: ["Arcanes"] });

app.use("/bob", (req, res) => {
    res.send(items[0]);
});

app.listen(3000, () => {
    console.log("App running");
});

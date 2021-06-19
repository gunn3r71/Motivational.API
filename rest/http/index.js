import express from "express";
const app = express();
import { getDayMessage } from './../../services/message.service';


app.get('/',(req,res) => {
    var day = new Date().getDate();
    var selectedMessage = getDayMessage(day);
    var message = {
        message: selectedMessage
    };

    res.json(message);
});

app.listen(8080, () => {
    console.log("Server started");
});
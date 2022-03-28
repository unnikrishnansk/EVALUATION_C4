const app = require("./index");
const connect = require("./configs/db");

app.listen(6767 , async () => {
    await connect();
    console.log("Listening to port 6767");
});
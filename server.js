const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen(3100, () => {
   console.log("app listening on port 3100");
});

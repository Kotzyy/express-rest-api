const express = require('express');
const app = express();
const cors = require('cors');
secure = require('ssl-express-www');
let PORT = process.env.PORT || 8080 || 5000 || 3000
let { color } = require('./lib/color.js');

let home = require('./routes/main');

app.enable('trust proxy');
app.set("json spaces",2);
app.use(express.json())
app.use(cors());
app.use(secure);

app.use('/', home);

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
});

module.exports = app

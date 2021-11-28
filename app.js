let express = require('express'),
cors = require('cors'),
secure = require('ssl-express-www');
let PORT = process.env.PORT || 8080 || 5000 || 3000
let { color } = require('./lib/color.js')

const home = require('./routes/main'),

let app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)

app.use('/', home)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app

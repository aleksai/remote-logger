const express = require("express")

const config = require("./config")
const utilities = {}

const app = express()

app.use(express.static(__dirname + "/static"))
app.use(express.urlencoded({ extended: true, limit: "2mb" }))
app.use(express.json())

const models = require("./models")(config, utilities)

require("./controllers")({ app, models, config, utilities })

app.get("*", function (req, res) {
	res.redirect("/")
})

app.listen(config.port, () => {
	console.log("Listening at " + config.url + ":" + config.port)
})
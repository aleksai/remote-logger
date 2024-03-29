const fs = require("fs")

module.exports = (RL) => {
	const files = fs.readdirSync(__dirname)

	for (var i = 0; i < files.length; i++) {
		const file = files[i]

		if(file !== "index.js") {
			require(__dirname + "/" + file)(RL)
		}
	}
}
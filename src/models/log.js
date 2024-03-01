const name = "Log"

module.exports = function(mongoose) {
	const schema = new mongoose.Schema({

		udid: { type: String },

		level: { type: Number },
		date: { type: String },
		subsystem: { type: String },
		category: { type: String },
		message: { type: String },

		createdAt: { type: Date, default: Date.now }

	})

	return { name: name, model: mongoose.model(name, schema) }
}
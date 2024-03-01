module.exports = (RL) => {

	RL.app.get("/", index)

	async function index(req, res) {
		res.send({ ok: true })
	}

	RL.app.get("/slashdotcom", dashboard)

	async function dashboard(req, res) {
		res.send('<script src="/js/js.js"></script>')
	}

	RL.app.get("/logs", logs)

	async function logs(req, res) {
		const from = parseInt(req.query.from, 10)
		if(!from) return res.status(403).send({ ok: false })

		var logs = []

		try {
			logs = await RL.models.Log.find({ createdAt: { $gt: new Date(from) } })
		} catch (error) {
			console.error(error)
		}
		
		res.send(logs)
	}

	RL.app.post("/", log)

	async function log(req, res) {
		const { logs, udid } = req.body

		if(!udid || !logs || !(typeof udid === 'string') || !Array.isArray(logs)) return res.send({ ok: false })

		for (var i = logs.length - 1; i >= 0; i--) {
			logs[i].udid = udid
		}

		try {
			await RL.models.Log.insertMany(logs)
		} catch (error) {
			console.error(error)
		}

		res.send({ ok: true })
	}

}
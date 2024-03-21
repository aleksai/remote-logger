var body
var connection
var select
var lastLogsAt
var next

var udids = {}
var sessions = []

const emojis = [
	'😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','🙈','🙉','🙊','💀','👽','💩','✨','🌟','💫','💦','💧','💨','👂','👀','👃','👅','👄','🚶','🏃','💃','👫','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','💗','💓','💕','💖','💞','💘','💌','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📩','📨','📯','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','📎','📏','📐','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍏','🍊','🍋','🍒','🍇','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','🚀','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','🎰','🗿','🎪','🎭'
]

function emoji(udid) {
	const emoji = udids[udid] || emojis[Math.floor(Math.random() * emojis.length)]
	udids[udid] = emoji

	return emoji
}

function setLastLogsInDays(days) {
	days = days || 1

	lastLogsAt = new Date()
	lastLogsAt.setDate(lastLogsAt.getDate() - days)
}

function loadNext(reset) {
	if (reset) {
		body.innerHTML = ""

		udids = {}
		sessions = {}

		if (next) clearInterval(next)
		next = setInterval(loadNext, 5000)
	}

	if (connection) connection()

	connection = xhr("/logs?from=" + lastLogsAt.getTime(), "", (logs) => {
		lastLogsAt = new Date()

		for (var i = 0; i < logs.length; i++) {
			const log = logs[i]

			const div = document.createElement("div")

			const date = new Date(log.date.replace(" +0000", "Z"))

			const cEmoji = emoji(log.udid)

			var notCompleteSession = sessions.filter(session => { return session.emoji === cEmoji && !session.complete })[0]

			if(!notCompleteSession) {
				notCompleteSession = { emoji: cEmoji, start: date, end: date, complete: false }
				sessions.push(notCompleteSession)
			}

			sessions[sessions.indexOf(notCompleteSession)].end = date

			console.log(sessions[sessions.indexOf(notCompleteSession)])

			div.classList = "log"
			div.innerHTML = cEmoji + ' <span class="date color-' + log.level + '" title="' + log.date + '">' + dateToRelative(date) + '</span> <span class="message">' + log.message + '</span>'

			body.appendChild(div)

			window.scrollTo(0, document.body.scrollHeight)
		}
	}, (error) => {
		alert(error)
	})
}

function dateToRelative(date) {
	var delta = Math.round((+new Date - date) / 1000)

	var minute = 60,
	    hour = minute * 60,
	    day = hour * 24,
	    week = day * 7

	var fuzzy

	if (delta <= day) {
	    fuzzy = date.toLocaleTimeString()
	} else {
		fuzzy = date.toLocaleDateString()
	}

	return fuzzy
}

function xhr(url, token, onComplete, onError, method, params) {
	method = method || "GET"
	params = params || ""

	var xhr = new XMLHttpRequest()

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 300) {
			var data = JSON.parse(xhr.responseText)
			onComplete(data ? data : xhr.responseText)
		} else {
			onError(xhr.responseText)
		}
	}

	xhr.open(method, url, true)

	if(token) xhr.setRequestHeader("Authorization", "Bearer " + token)

	if(method !== "GET") {
		xhr.setRequestHeader("Content-Type", "application/json")

		xhr.send(JSON.stringify(params))
	} else {
		xhr.send()
	}

	return function() {
		xhr.abort()
		connection = null
	}
}

function setupUI() {
	document.head.insertAdjacentHTML("beforeend", `
		<title>Remote Logger</title>
		<style>
			* {
				font-family: -apple-system, BlinkMacSystemFont;
				font-size: 12px
			}

			nav {
				position: fixed;
				top: 0;
				right: 0;

				padding: 10px;
			}

			.log {
				height: 23px;
			}

			.date {
				margin: 0 10px;
				padding: 5px;
				width: 100px;
				display: inline-block;
				text-align: center;
			}

			.color-5 {
				background-color: rgb(255, 186, 186);
			}
		</style>
	`)

	body = document.createElement("div")

	document.body.appendChild(body)

	const nav = document.createElement("nav")
	document.body.appendChild(nav)

	// Options

	const options = ["1-day", "3-day", "7-day", "30-day", "All"]
	const values = [1, 3, 7, 30, 10000]

	select = document.createElement("select")

	select.onchange = function () {
		setLastLogsInDays(values[this.selectedIndex])
		loadNext(true)

		localStorage.setItem("selectedRange", this.selectedIndex)
	}

	for (var i = 0; i < options.length; i++) {
		const option = document.createElement("option")
		option.innerText = options[i]

		select.appendChild(option)
	}

	nav.appendChild(select)
}

window.onload = function () {
	setupUI()

	select.selectedIndex = parseInt(localStorage.getItem("selectedRange") || 0, 10) 
	select.onchange()
}
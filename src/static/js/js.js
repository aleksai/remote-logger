var lastLogsAt = new Date()
lastLogsAt.setDate(lastLogsAt.getDate() - 1)

var emojis = [
	'😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','🗿','🎪','🎭','📍','🚩','🔠','🔡','🔤','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🛂','🛄','🛅','🛃','🉑','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','✳','❇','❎','✅','✴','💟','🆚','📳','📴','💠','⛎','🔯','🏧','💹','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','🔘','🔗','🔱'
]
var udids = {}

function loadNext() {
	xhr("/logs?from=" + lastLogsAt.getTime(), "", (logs) => {
		lastLogsAt = new Date()

		for (var i = 0; i < logs.length; i++) {
			const log = logs[i]

			const div = document.createElement("div")

			const date = new Date(log.date.replace(" +0000", "Z"))

			div.classList = "log";
			div.innerHTML = emoji(log.udid) + ' <span class="date color-' + log.level + '" title="' + log.date + '">' + dateToRelative(date) + '</span> <span class="message">' + log.message + '</span>'

			document.body.appendChild(div)

			window.scrollTo(0, document.body.scrollHeight)
		}
	}, (error) => {
		alert(error)
	})
}

function emoji(udid) {
	const emoji = udids[udid] || emojis[Math.floor(Math.random() * emojis.length)]
	udids[udid] = emoji

	return emoji
}

function dateToRelative(date) {
	var delta = Math.round((+new Date - date) / 1000)

	var minute = 60,
	    hour = minute * 60,
	    day = hour * 24,
	    week = day * 7

	var fuzzy

	if (delta < 30) {
	    fuzzy = 'just now'
	} else if (delta < minute) {
	    fuzzy = delta + ' seconds ago'
	} else if (delta < 2 * minute) {
	    fuzzy = 'a minute ago'
	} else if (delta < hour) {
	    fuzzy = Math.floor(delta / minute) + ' minutes ago'
	} else if (delta <= day) {
	    fuzzy = date.toLocaleTimeString()
	} else if (delta < day * 2) {
	    fuzzy = 'yesterday'
	} else {
		fuzzy = date.toDateString()
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
	};

	xhr.open(method, url, true)

	if(token) xhr.setRequestHeader("Authorization", "Bearer " + token)

	if(method !== "GET") {
		xhr.setRequestHeader("Content-Type", "application/json")

		xhr.send(JSON.stringify(params))
	} else {
		xhr.send()
	}

	return function() { xhr.abort() }
}

document.head.insertAdjacentHTML("beforeend", `
	<style>
		* {
			font-family: -apple-system, BlinkMacSystemFont;
			font-size: 12px
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

loadNext()
setInterval(loadNext, 5000)
const fs = require('fs');

const confPath = `${process.cwd()}/conf/autosaver.json`;

let conf;
try {
	conf = require(confPath);
} catch(e) {
	conf = {
		intervalInSeconds: 300,
		saveName: 'autosave'
	};

	fs.writeFileSync(confPath, JSON.stringify(conf, null, 2));
}

setInterval(() => {
	global.Brikkit.saveBricks(conf.saveName);
	global.Brikkit.say('Autosaved bricks (if any).');
}, conf.intervalInSeconds * 1000);

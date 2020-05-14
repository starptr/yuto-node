const metadata = require("../package.json");

const intro = {
	text: `Hi!! I'm ${metadata.author.name}. Contact me at ${metadata.author.email}.`,
	do: function() { console.log(this.text) },
};

module.exports = {
	intro
}
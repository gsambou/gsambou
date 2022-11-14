const COLORS = require('./constants');

module.exports = () => {
	console.log(`
    🐣 ${COLORS.twitter.back} ${COLORS.twitter.text}Twitter ${COLORS.reset}       ${COLORS.link}https://twitter.com/gsamboudev${COLORS.reset}
    📖 ${COLORS.github.back} ${COLORS.github.text}GitHub ${COLORS.reset}        ${COLORS.link}https://github.com/gsambou${COLORS.reset}
    🥷🏽  ${COLORS.blog.back} ${COLORS.blog.text}Blog ${COLORS.reset}          ${COLORS.link}https://gsambou.dev${COLORS.reset}
`);
};

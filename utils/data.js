import COLORS from './constants.js';

const bio = `

  ${COLORS.bio}Lorem Ipsum is simply dummy text of the printing and typesetting
  industry.Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book.
${COLORS.reset}
`;

const social = `
    🐣 ${COLORS.twitter.back} ${COLORS.twitter.text}Twitter ${COLORS.reset}       ${COLORS.link}https://twitter.com/gsdotdev${COLORS.reset}
    📖 ${COLORS.github.back} ${COLORS.github.text}GitHub ${COLORS.reset}        ${COLORS.link}https://github.com/gsambou${COLORS.reset}
    🥷🏽  ${COLORS.blog.back} ${COLORS.blog.text}Blog ${COLORS.reset}          ${COLORS.link}https://gsambou.dev${COLORS.reset}
`;

const ads = `Follow me on twitter @gsdotdev`;

export { bio, social, ads };

const utils = require("loader-utils");

module.exports = function (content) {
  const options = utils.getOptions(this);
  const { name, age } = options;

  content = content.replace(/\[name\]/g, name);
  content = content.replace(/\[age\]/g, age);

  return `export default ${JSON.stringify({
    content,
  })}`;
};

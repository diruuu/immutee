const get = require('./get');
const set = require('./set');

module.exports = (obj, prop) => {
	var curVal = get(obj, prop);
	return set(obj, prop, !Boolean(curVal));
};

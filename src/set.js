const propToArray = require('./prop-to-array');
const getArrayIndex = require('./get-array-index');


module.exports = (obj, prop, value) => {
	prop = typeof prop === 'number' ? propToArray(prop.toString()) : typeof prop === 'string' ? propToArray(prop) : prop;

	var setPropImmutableRec = function(obj, prop, value, i) {
		var clone, head = prop[i];

		if (prop.length > i) {
			if (Array.isArray(obj)) {
				head = getArrayIndex(head, obj);
				clone = obj.slice();
			} else {
				clone = Object.assign({}, obj);
			}
			clone[head] = setPropImmutableRec(obj[head] !== undefined ? obj[head] : {}, prop, value, i + 1);
			return clone;
		}

		return typeof value === 'function' ? value(obj) : value;
	};

	return setPropImmutableRec(obj, prop, value, 0);
};

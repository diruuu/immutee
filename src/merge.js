const get = require('./get');
const set = require('./set');

module.exports = (obj, prop, val) => {
	var curVal = get(obj, prop);
	if (typeof curVal === 'object') {
		if (Array.isArray(curVal)){
			return set(obj, prop, curVal.concat(val));
		} else if (curVal === null){
			return set(obj, prop, val);
		}
		else {
			var merged = Object.assign({}, curVal, val);
			return set(obj, prop, merged);
		}
	} else if (typeof curVal === 'undefined'){
		return set(obj, prop, val);
	}
	else {
		return obj;
	}
};

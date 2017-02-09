module.exports = (prop) => {
	return prop.replace(/\\\./g, '@').replace(/\./g, '*').replace(/@/g, '.').split('*');
};

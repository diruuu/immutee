const _set = require('./set');
const _delete = require('./delete');
const _merge = require('./merge');
const _toggle = require('./toggle');

module.exports = function Katalika(object) {
  if (!(this instanceof Katalika)) return new Katalika(object);
  this.value = object;
  this.set = (notation, value) => {
      this.value = _set(this.value, notation, value);
      return this;
  }
  this.merge = (notation, value) => {
    this.value = _merge(this.value, notation, value);
    return this;
  }
  this.delete = (notation) => {
    this.value = _delete(this.value, notation);
    return this;
  }
  this.toggle = (notation) => {
    this.value = _toggle(this.value, notation);
    return this;
  }
  this.done = () => {
    return this.value;
  }
};

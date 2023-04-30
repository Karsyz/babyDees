// handles BigInt type error
BigInt.prototype.toJSON = function () {
  return this.toString();
};
libxml.Document.prototype.node = function() {
  args = libxml.Element.Arguments(arguments);
  return this.root(new libxml.Element(this, args[0], args[1], args[2], args[3]));
};

libxml.Document.prototype.find = function() {
  return this.root().find.apply(this.root(), arguments);
};

libxml.Document.prototype.get = function() {
  return this.find.apply(this, arguments)[0];
};
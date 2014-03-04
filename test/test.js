var drop-stl-to-json;
if (typeof require !== "undefined") {
  drop-stl-to-json = require("../drop-stl-to-json.js");
} else {
  drop-stl-to-json = window.drop-stl-to-json;
}

var ok = function(a, msg) { if (!a) throw new Error(msg || "not ok"); };
var eq = function(a, b) { if (a!==b) throw new Error(a + " !== " + b); };

describe('drop-stl-to-json', function() {
  describe('#', function() {
    it('', function() {
      
    });
  });
});

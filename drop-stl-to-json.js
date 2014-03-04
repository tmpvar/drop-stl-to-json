var dndfiles = require('drag-and-drop-files')
var readfile = require('filereader-stream')
var stl = require('stl');
var EventEmitter = require('events').EventEmitter;

var drop = function(dropElement) {
  var ee = new EventEmitter();

  dndfiles(dropElement, function(files) {
    ee.emit('dropped', files);

    var pending = files.length;
    files.forEach(function(file) {
      var array = [], first = true;

      var stlstream = readfile(file).pipe(stl.createParseStream())

      ee.emit('stream', stlstream);

      stlstream.on('data', function(d) {
          if (first) {
            first = false;
            return;
          }

          array.push(d);
        })
        .on('end', function() {
          pending--;
          ee.emit('file', array);
          if (pending <= 0) {
            ee.emit('end');
          }
        });
    });
  });

  return ee;
};


module.exports = drop;

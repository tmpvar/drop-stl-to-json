# drop-stl-to-json

parse stl files dropped onto a dom element

## install

`npm install drop-stl-to-json`

## use

```javscript
require('domready')(function() {
  var dropbox = document.querySelector('#dropbox');
  var out = document.querySelector('textarea');
  var text = document.querySelector('span');

  var ee = require('drop-stl-to-json')(dropbox);

  // fired when the files are dropped on the element
  ee.once('dropped', function() {
    text.innerHTML = "working.."
  });

  // X files may have been dropped, this fires for each
  // where array is an array of { normal:[], verts: [[x, y, z], ...]}
  ee.once('file', function(array) {
    out.innerHTML = JSON.stringify(array);
    out.style.display = "block";
    out.setSelectionRange(0, out.innerHTML.length);
    out.focus();
    dropbox.style.display = 'none';
  });

  ee.once('end', function() {
    console.log("all done");
  });
});
```

then use browserify to bundle it up!



### license

MIT (see: [license.txt](blob/master/license.txt))

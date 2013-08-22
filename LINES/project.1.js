var through = require('through');
var split = require('split');

var linenum = 0;
var write = function (buf){
    var strbuf = buf.toString();
    this.queue(linenum % 2 === 0
        ? strbuf.toLowerCase() + '\n'
        : strbuf.toUpperCase() + '\n'
    );
    linenum ++;
    
};
var tr = through(write);

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);


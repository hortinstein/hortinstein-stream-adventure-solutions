var through = require('through');
var write = function (buf){
    var strbuf = buf.toString().toUpperCase();
    this.queue(strbuf);
};
var tr = through(write);
process.stdin.pipe(tr).pipe(process.stdout);

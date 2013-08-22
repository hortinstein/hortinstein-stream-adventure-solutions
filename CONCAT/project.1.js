var concat = require('concat-stream');


function reverse(s){
    return s.split("").reverse().join("");
}

var conc = function (b){
    var a = reverse(b.toString());
    console.log(a);
};

var concf = concat(conc);
process.stdin.pipe(concf);


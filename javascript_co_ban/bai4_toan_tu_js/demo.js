var a = 2;
console.log(typeof(a));

var b = '2';
console.log(typeof(b));

var test = a === b;
console.log(test);
console.log(typeof(test));

var c = 1;
var d = 2;

if(a == b && c > d) {
    console.log("true");
} else if(a == b || c > d) {
    console.log('false');
}

if(!(c > d)) {
    console.log('saiii');
}

var e;
c > d? e = true: e=false;
console.log(e);


a = 2;
// a++;
a--
console.log(a);

b = 3;
// b =+ 2;
b += 2
console.log(b);

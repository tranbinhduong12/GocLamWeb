// var a = prompt('Nhap a ');

// var b = prompt('nhap b ');


// console.log(typeof(a));

// if(a < b) {
//     console.log(a + ' nhỏ hơn ' + b);
// }

// if(a == b) {
//     console.log(a + ' Bang ' + b);
// } else 
//     console.log(a + ' Khac ' + b);

// if(a < b) {
//     console.log(a + ' be hon ' +b);
// } else if( a > b) {
//     console.log(a + ' lon hon ' + b);
// } else 
// console.log(a + ' bang ' +b);

var a = prompt('Nhap a ');
a = Number(a);
// a = parseFloat(a);

switch(a) {
    case 1:
    console.log(a +' bang 1');
    break;
    case 2:
    console.log(a +' bang 2');
    break;
    case 3:
    console.log(a + ' bang 3');
    break;
    default:
    console.log(a +' khong thoa dieu kien nao');
}

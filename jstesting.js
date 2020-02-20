/*var cat = {

};

var dog = {};

dog.talk = function() {
    return "woof!";
} */

function math(x, y) {
    var sum = x + y;
    return sum;
}

var input1 = prompt("Add a number");
input1 = parseInt(input1, 10);
var input2 = prompt("And another number");
input2 = parseInt(input2, 10);

var frogs = 5;
var burbs = 2;



alert(math(input1, input2));
alert(math(frogs, burbs));
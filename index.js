// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a); //Answer: a=String
console.log(b); //Answer: b=Array


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function Multiple(a){
    for(i = 0; i < a.length; i++){
        a[i] = a[i]*2;
    }
    return a;
}
console.log(Multiple(a));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
function AddSpace(colors) {
    var newColor = colors.toString().split(',');
    for (var i = 0; i < newColor.length; i++) {
        newColor[i] = newColor[i].charAt(0) + newColor[i].substring(1);     
    }
    return newColor.join(' '); 
  }
console.log(AddSpace(colors));

// case 2 output: 'Red+Green+White+Black'
function AddSymbol(colors) {
    var newColor = colors.toString().split(',');
    for (var i = 0; i < newColor.length; i++) {
        newColor[i] = newColor[i].charAt(0) + newColor[i].substring(1);     
    }
    return newColor.join('+'); 
  }
console.log(AddSymbol(colors));

// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString());

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var newOrder = a.sort((a, b) => b-a);
console.log(newOrder);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

console.log(mode(a));

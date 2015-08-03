Array.prototype.value = function(val) {
    for (var i = 0; i < this.length; i++) {
        var e = this[i];
        if(e[1] == val) return e;
    }
};

// p = console.log;
c = console.log;
p = function() {};

// e [n, 'sdf']
// arr [[1, 'a..'], [0, 'b...']]
var insertAlpha = function (e, arr) {
    for (var i = 0; i < arr.length; i++) {
        var e1 = arr[i];
        if(e1[1] > e[1]){
            arr.splice(i, 0, e);
            p('///////arr');
            p(arr);
            p('//////arr');
            return;
        }
    }
    arr.push(e);

};

function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (var i = 0; i < arr2.length; i++) {
        var e = arr2[i], item = arr1.value(e[1]);
        p(item);
        p(e);
        if(item) item[0] += e[0];
        else insertAlpha(e, arr1);
        // p(arr1)
        // break;
    }
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

x = inventory(curInv, newInv);
c(x);
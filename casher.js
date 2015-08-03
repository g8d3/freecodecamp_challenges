Array.prototype.find = function(fn) {
  for(var i in this){
    var e = this[i];
    if(fn(e)) return e;
  }
};
// var p = console.log;
var c = console.log;
var p = function() {};

var round = function(n, digits) {
  return Math.round(n * Math.pow(10, digits)) / Math.pow(10, digits);
};

function drawer(price, cash, cid) {
  var change = cash - price;
  var qtys = [
    ['PENNY',       0.01],
    ['NICKEL',      0.05],
    ['DIME',        0.10],
    ['QUARTER',     0.25],
    ['ONE',         1],
    ['FIVE',        5],
    ['TEN',         10],
    ['TWENTY',      20],
    ['ONE HUNDRED', 100],
    // 'FIFTY',    0.01],
  ];
  var out = [];
  // drawerCash = Math.round(drawerCash, 2)
  // p(drawerCash);

  // var max  = function(arr) { return Math.max.apply(null, arr); };
  var max = function(qtys, change, cid){
    var o = [null, 0];
    for(var i in qtys){
      var qty = qtys[i];
      var cid1 = cid[i]; // EEV ['TWENTY', 40]
      // p('cid1')
      // p(cid1)
      if(change >= qty[1] && qty[1] >= o[1] && cid1[1] > 0) o = qty;
    }
    return o;
  };

  Array.prototype.forKey = function(key) {
    var el = this.find(function(e) {return e[0] == key;});
    if(!el){
      el = [key, 0];
      this.push(el);
    }
    return el;
  };


  while(change > 0){
    var drawerCash = cid.reduce(function(m, o) {return m += o[1];}, 0);
    if(drawerCash <  change) return 'Insufficient Funds';
    if(drawerCash == change) return 'Closed';

    p(change);
    // EEV ['PENNY', 0.01 ]
    var deduct = max(qtys, change, cid);
    p('deduct');
    p(deduct);

    // Expected value example ['PENNY', 1.01]
    var stored = cid.find(function(e) {return e[0] == deduct[0];});
    // break;
    if(deduct[1] <= stored[1]){
      stored[1] -= deduct[1];
      change -= deduct[1];
      change = round(change, 2)
      // change = Math.round(change, 2);
      out.forKey(deduct[0])[1] += deduct[1];
      p('stored');
      p(stored);
      p('out');
      p(out);
    }else{
      break;
    }

  }
  // Here is your change, ma'am.
  return out;
}

if(false)
x=drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05],
 ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00],
  ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00],
   ['ONE HUNDRED', 100.00]]);
x=drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05],
 ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00],
  ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], 
  ['ONE HUNDRED', 100.00]])
c(x)
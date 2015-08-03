function permutator(str) {
  var results = [], saved = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0 &&
     !memo.concat(cur).join('').match(/(\w)\1/) &&
     saved.indexOf(memo.concat(cur).join('')) == -1
     ) {
        results.push(memo.concat(cur));
        saved.push(memo.concat(cur).join(''));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(str.split(''));
}


p = console.log
x = permutator('aba'.split(''))
p(x)
x;
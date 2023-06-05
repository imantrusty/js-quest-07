
function my_array_uniq(param_1) {
    var a = [];
    for (var i = 0; i < param_1.length; i++) {
        if (a.indexOf(param_1[i]) === -1) {
            a.push(param_1[i]);
        }
    }
  return a;
}
//console.log(my_array_uniq([1, 1, 2]))
/*
**
** QWASAR.IO -- my_map_mult_two
**
**
** @param {Integer[]} param_1
** @return {integer[]}

**
*/

//array = [1, 2, 3, 4, 5];

function my_map_mult_two(param_1) {
    var a = [];
    for (index = 0; index < param_1.length; index++) {
        a[index] = param_1[index] * 2
    }
    
    return a        
}

//my_map_mult_two (array)

const words = ["This", "is", "the", "way"];
//let numberofwords = words.length

function my_count_on_it(param_1) {
   // var words = ["This", "is", "the", "way"];
     numberofwords = param_1.map(function(param_1) {
      return param_1.length;
    });
    return numberofwords
}
//console.log(my_count_on_it(words))
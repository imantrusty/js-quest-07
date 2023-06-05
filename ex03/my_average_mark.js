
function my_average_mark(hash) {

    if (hash.length === 0) {
        return "0.0";
    }
    let i = 0;
    let sum = 0;
    while (i < hash.length){
        sum = sum + hash[i] ["integer"];
        i++;
    }
    return (sum / (hash.length)).toFixed(1);
};
//console.log(hash[0] ["integer"]);
//console.log("len of hash is " + hash.length);
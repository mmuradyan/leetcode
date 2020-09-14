/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x< -2147483649 || x > 2147483649) return 0;
    let str_x = x + '';
    let str_new_x = '';
    let arr = str_x.split('');
  
    if (str_x[0] === '-'){
        str_new_x = '-' + arr.slice(1).reverse().join('');
    }else{
        str_new_x = arr.reverse().join('');
    }
    
    if(+str_new_x < -2147483648 || +str_new_x > 2147483649) return 0;
    
    return +str_new_x;
};

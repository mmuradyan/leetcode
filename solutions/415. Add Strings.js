/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = [];
    
    let temp = 0;
    const n_num1 = num1.split('').reverse();
    const n_num2 = num2.split('').reverse();
    
    const length = (n_num1.length > n_num2.length) ? n_num1.length : n_num2.length;
​
    for(let i = 0; i < length; i++){
        let first = 0;
        let second = 0;
        if(n_num1[i] !== undefined){
            first = +n_num1[i];
        }
        if(n_num2[i] !== undefined){
            second = +n_num2[i];
        }
        let sum = first + second + temp;
        if(sum > 9){
            temp = 1;
            res.push( (sum + '')[1] );
        }else{
            temp = 0;
            res.push(sum + '');
        }
        if(i === length-1 && temp == 1) res.push('1'); 
    }
​
​
    return res.reverse().join('') + "";
};

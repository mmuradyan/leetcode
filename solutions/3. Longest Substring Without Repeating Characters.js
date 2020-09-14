/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arrStr = s.split('');
    let longStr = "";
    let curStr = "";
​
    for (let i = 0; i < arrStr.length; i++) {
        let ch = arrStr[i];
        let chIndex = curStr.indexOf(ch);
        if (chIndex != -1){
            if (curStr.length > longStr.length){
                longStr = curStr;
            }
            curStr = curStr.substring(chIndex+1);
        }
        curStr += ch;
        
        if(i == arrStr.length-1){
            if (curStr.length > longStr.length) {
                longStr = curStr;
            }
        }
    }
​
    return longStr.length;
};

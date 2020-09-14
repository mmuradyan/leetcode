/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var thisNode1 = l1;
    var thisNode2 = l2;
    var outList = new ListNode();
    curList = outList;
    
    var num1=0;
    var num2=0;
    var remainder = 0;
    
    while(thisNode1 || thisNode2){
​
        num1 = (thisNode1 !== null) ? thisNode1.val : 0;
        num2 = (thisNode2 !== null) ? thisNode2.val : 0;
        var add = num1 + num2 + remainder;
        remainder = 0;
        if(add > 9){
            add = add%10;
            remainder = 1; 
        }
        curList.val = add;
        
        if((thisNode1 && thisNode1.next !== null) || (thisNode2 && thisNode2.next !== null) || remainder){
            curList.next = new ListNode();
            curList = curList.next;
        }
        
        thisNode1 = (thisNode1 !== null) ? thisNode1.next : null;
        thisNode2 = (thisNode2 !== null) ? thisNode2.next : null;
        
        if(thisNode1 === null && thisNode2 === null && remainder){
           curList.val = remainder;
        }
        
    }
​
    return outList;
};
​

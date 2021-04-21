/*
 * @Author: XuCheri
 * @Date: 2021-04-03 16:48:42
 * @LastEditTime: 2021-04-03 17:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\index.js
 */

function getComputedTimes(number){
    var times = 0;
    while(number!=1){
        if(number % 2 == 0){
                number  = number / 2;
                times++;
        }else if(number % 2 == 1){
                number  = number * 3+1;
                times++;
        }else{
            console.log("This number is not an even or odd!");
        }
    }
    return times;
}
console.log(getComputedTimes(10))


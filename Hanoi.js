/*
 * @Author: XuCheri
 * @Date: 2021-04-19 17:51:21
 * @LastEditTime: 2021-04-20 18:17:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm\Hanoi.js
 */



/**
 * @description: 柱子以数组的形式描述，数组中的数表示盘子的大小
 * @param {*} A   第一根柱子
 * @param {*} B   第二根柱子
 * @param {*} C   第三根柱子
 * @return {*}
 */

// function Hanoi(A, B, C) {
//     console.log(`A:${A}\nB:${B}\nC:${C}\n`);
//     let n = A.length;
//     let move = function (length, a, b, c) {
//         if (length === 1) { // 当只有一个时直接加到c中
//             c.push(a.pop())
//             console.log(`A:${A}\nB:${B}\nC:${C}\n`);
//         } else {
//             move(length - 1, a, c, b) // 将 a 上的 n - 1 个 通过 c 移到 b
//             c.push(a.pop()) // 把 a 中剩下的一个直接放到 c
//             console.log(`A:${A}\nB:${B}\nC:${C}\n`);
//             move(length - 1, b, a, c) // 在把 b 上的 n - 1 个 通过 a 放到 c
//         }
//     }
//     move(n, A, B, C)
// }
// let A = [2, 1, 0],
//     B = [],
//     C = [];
// console.log(A, B, C);
// Hanoi(A, B, C);
// console.log(A, B, C);




// var step = 0;

// function PrintMoveOnePlate(n, loca1, loca2) {
//     console.log("第" + ++step + "步：移动第" + n + "个盘子，从" + loca1 + "到" + loca2 + "\n");
// }

// function MovePlates(n, s, m, d) {
//     //定义位置  
//     var loop = new Array(3);
//     loop[0] = new Array(n);
//     loop[1] = new Array(n);
//     loop[2] = new Array(n);
//     //定义位置描述字符串数组(n为偶数的情况)  
//     var loca = new Array(s, m, d);
//     if (n % 2 != 0) //n为奇数的情况  
//     {
//         loca[1] = d;
//         loca[2] = m;
//     }
//     //初始化源位置上的盘子  
//     for (var i = 0; i < n; i++)
//         loop[0][i] = n - i;
//     //记录各个位置上盘子的数量  
//     var loopLen = new Array(n, 0, 0);
//     var count = Math.pow(2, n) - 1; //移动次数，即循环退出条件  
//     var firstPlate = 0; //1号盘子的位置  
//     do {
//         //将1号盘子顺时针移动到后1个位置  
//         PrintMoveOnePlate(1, loca[firstPlate], loca[(firstPlate + 1) % 3]); //显示移动过程  
//         loop[(firstPlate + 1) % 3][loopLen[(firstPlate + 1) % 3]] = 1; //移动  
//         loopLen[firstPlate]--; //修改1号盘子旧位置上盘子的数量  
//         firstPlate = (firstPlate + 1) % 3; //修改1号盘子的位置  
//         loopLen[firstPlate]++; //修改1号盘子新位置上盘子的数量  
//         count--; //记录移动次数  
//         //移动另外的两个位置上的盘子  
//         if (count != 0) //避免最后一次移动后仍然移动而导致错误  
//         {
//             //确定另外两个位置如何移动  
//             if (loopLen[(firstPlate + 1) % 3] == 0 || loopLen[(firstPlate + 2) % 3] != 0 &&
//                 loop[(firstPlate + 2) % 3][loopLen[(firstPlate + 2) % 3] - 1] < loop[(firstPlate + 1) % 3][loopLen[(firstPlate + 1) % 3] - 1]) { //1号盘子的后第1个位置为空，或者无空位置且1号盘子后第2个位置编号较小，此时将1号盘子后第2个位置的盘子移动到1号盘子后第1个位置上  
//                 PrintMoveOnePlate(loop[(firstPlate + 2) % 3][loopLen[(firstPlate + 2) % 3] - 1], loca[(firstPlate + 2) % 3], loca[(firstPlate + 1) % 3]); //显示移动过程  
//                 loop[(firstPlate + 1) % 3][loopLen[(firstPlate + 1) % 3]] = loop[(firstPlate + 2) % 3][loopLen[(firstPlate + 2) % 3] - 1]; //移动  
//                 loopLen[(firstPlate + 2) % 3]--; //修改该盘子旧位置上盘子的数量  
//                 loopLen[(firstPlate + 1) % 3]++; //修改该盘子新位置上盘子的数量  
//             } else { //1号盘子的后第2个位置为空，或者无空位置且1号盘子后第1个位置编号较小，此时将1号盘子后第1个位置的盘子移动到1号盘子后第2个位置上  
//                 PrintMoveOnePlate(loop[(firstPlate + 1) % 3][loopLen[(firstPlate + 1) % 3] - 1], loca[(firstPlate + 1) % 3], loca[(firstPlate + 2) % 3]); //显示移动过程  
//                 loop[(firstPlate + 2) % 3][loopLen[(firstPlate + 2) % 3]] = loop[(firstPlate + 1) % 3][loopLen[(firstPlate + 1) % 3] - 1]; //移动  
//                 loopLen[(firstPlate + 1) % 3]--; //修改该盘子旧位置上盘子的数量  
//                 loopLen[(firstPlate + 2) % 3]++; //修改该盘子新位置上盘子的数量  
//             }
//             count--; //记录移动次数  
//         }
//     } while (count != 0)
// }

// MovePlates(3, "A", "B", "C")



function output(presentLevel, position, n) {
    var val;
    val = (position - 1) % 3;
    if (presentLevel % 2 == 1) {
        val = val + 3;
    }
    // 如果是奇数层，其值为3，4，5
    switch (val) {
        case 0:
            console.log(`${val}from A--->B\n`, n - presentLevel + 1);
            break;
        case 1:
            console.log(`${val}from B--->C\n`, n - presentLevel + 1);
            break;
        case 2:
            console.log(`${val}from C--->A\n`, n - presentLevel + 1);
            break;
        case 3:
            console.log(`${val}from A --->C\n`, n - presentLevel + 1);
            break;
        case 4:
            console.log(`${val}from C--->B\n`, n - presentLevel + 1);
            break;
        case 5:
            console.log(`${val}from B--->A\n`, n - presentLevel + 1);
            break;

    }
}

function main(n) {
    var level_position = [], //某层的已输出的结点序号
        i,
        sample_nub, //最后一层已输个数
        total_sample; //总个数
    console.log("\n");
    sample_nub = 0;
    total_sample = 1;
    for (i = 1; i < n; i++) 
        total_sample *= 2;
    //最底层总样点数
    for (i = 0; i <= n; i++) {
        level_position[i] = 0;
        i = n;
        level_position[i]++;
        output(i, level_position[n], n) //输出第i层某一序号的结点sample_nub++;
    }
    while (sample_nub < total_sample) {
        while (level_position[i] == 2 * level_position[i - 1]) 
            i--;
        
        //寻找把该结点作为左子树的祖先结点
        level_position[i - 1]++;
        output(i - 1, level_position[i - 1], n);
        i = n;
        level_position[i]++;
        output(i, level_position[n], n);
        sample_nub++;
    }
}
main(3)
output(3,2,2)
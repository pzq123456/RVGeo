import { kernel_5 ,kernel_arr_10,kernel_arr_11,kernel_2Dmatrix_cal,kernel_8}  from './kernel.js';
import { Point,PointSet,Line,SimpleLine,Polygon,Triangle,getClockwiseFea,Delaunay_triangulation,}  from './base.js';
/**
 * 测试函数 ：生成单个随机点 点的范围是[0,a]
 * @param {number} a - 随机范围的上限
 * @param {number} bx - x轴偏移量
 * @param {number} by - y轴偏移量
 * @return {Point} - 返回的单个点对象 
 * 注意：bx，by为组件开发引入，为了使得数据能准确的显示在较小的屏幕区域里
 */
 function test_1(a,bx=0,by=0){
    let x= kernel_5(a)+bx;
    let y= kernel_5(a)+by;
    let point =new Point(x,y);
    return point;
 }

 /**
 * 测试函数 ：生成随机点集
 * @param {number} n - 点集大小
 * @param {number} a - 随机范围的上限
 * @param {number} bx - x轴偏移量
 * @param {number} by - y轴偏移量
 * @return {array} - 返回的点集列表 
 * 注意：bx，by为组件开发引入，为了使得数据能准确的显示在较小的屏幕区域里
 */
  function test_2(n,a,bx=0,by=0){
    let reslist=[];
    for(let i=0;i<n;i++){
        reslist.push(test_1(a,bx,by));
    }
    return reslist;
 }


 /**
 * 测试函数 ：生成单个简单线 
 * @param {number} a - 随机范围的上限
 * @return {SimpleLine} - 返回的单个简单线 
 */
  function test_3(a){
    let x= test_1(a) ;
    let y= test_1(a);
    let sl =new SimpleLine(x,y);
    return sl;
 }

 /**
 * 测试函数 ：生成折线
 * @param {number} xm - 线段在x轴上投影长度
 * @param {number} a - 随机范围的上限
 * @param {number} sp - 随机采样步长
 * @return {array} - 返回的单个简单线 
 */
  function test_4(xm,a,sp){
    let res = [];
    for(let i=0;i<xm;i+=sp){
        res.push(new Point(i+600,kernel_5(a)+300));
    }
    return res;

 }

 /**
  * 生成随机三角形
  * @param {number} a 
  * @returns 
  */
function test_5 (a){
    let po1 = test_1(a);
    let po2 = test_1(a);
    let po3 = test_1(a);
    if(getClockwiseFea(po1,po2,po3)===3){
        console.log("three point are on the same line");
        return -1;
    }
    else{
        let tr = new Triangle(po1,po2,po3);
        return tr;
    }
   
    
}

/**
 * 生成圆形点集
 * @param {number} number - 点集大小
 * @param {number} radius - 圆形区域的半径
 * @returns {array} [[x1,y1],[x2,y2]...[xn,yn]]
 */
export function test_6(number,radius){
    let vertices = new Array(number)
    var x,y,i;
    for( i = vertices.length; i--; ) {
        do {
             x = Math.random() - 0.5;
              y = Math.random() - 0.5;
        } while(x * x + y * y > 0.25);

        x = (x * 0.96875 + 0.5) * radius;
        y = (y * 0.96875 + 0.5) * radius;

        vertices[i] = [x, y];
    }
    return vertices;
}

/**
 * 随机产生二维（栅格）array数据
 * @param {number} row - 行
 * @param {number} column - 列
 * @param {number} range - 随机值产生的范围
 * @param {array} 返回二维array
 */
export function test_7(row,column,range){
    let res = [];
    for(let i =0;i<row;i++){
        let col = [];
        for(let j = 0;j<column;j++){
            let val = kernel_5(range);
            col.push(val);
        }
        res.push(col);
    }
    return res;
}

/**
 * 在一组之中随机选出n个值
 * @param {array} arr 
 * @param {number} n 
 */
export function test_8(arr,n){
    if(n > arr.length ){
        return [];
    }
    else if(n === arr.length){
        let num = arr.length - 1;
        let arr1 = arr.slice();
        let res = [];

        for(let i = 0 ;i< n - 1;i++){
            let ren = kernel_8(num);
            let itm = arr1[ren];
            res.push(itm);
            arr1.splice(ren,1);
            num = num -1;
        }
        res.push(arr1[0]);
        return res;
    }
    else{
        let num = arr.length - 1;
        let arr1 = arr.slice();
        let res = [];
    
        for(let i = 0 ;i<n;i++){
            let ren = kernel_8(num);
            let itm = arr1[ren];
            res.push(itm);
            arr1.splice(ren,1);
            num = num -1;
        }
        return res;
    }
}
/**
 * 在一[0,1,2,3,4,5...n]之中随机选出k个值的数组
 * @param {number} n - 创建顺序数列的长度
 * @param {number} k - 所取值的个数
 */
 export function test_9(n,k){
    if(n<=0){
        return [];
    }
    let arr = [];
    for(let i = 0;i<n;i++){
        arr.push(i);
    }
    let res = test_8(arr,k);
    return res;
 }

 /**
 * 生成随机的二维数组
 * @param {number} row - 数组行数
 * @param {number} column - 数组列数
 * @param {number} max - 每一个数据的上限
 */
  export function test_10(row,column,max){
    let res = [];
    res.length = row;
    for(let i = 0; i<row;i++){
        let ttp = [];
        ttp.length = column;
        for(let j = 0; j<column; j++){
            ttp[j] = kernel_5(max);
        }
        res[i] = ttp;
    }
    return res;
  }

// console.log(test_8([1,2,3,4,5,6,7,8,9,0,11],10));
// for(let i = 0;i<100;i++){
//     console.log(test_9(10,2));
// }

// console.log(test_10(5,5,100));


 /**
 * parse function of getClockwiseFea
 * @param {number} a - the result of getClockwiseFea
 * @return {string} - the name of each code
 */
function parser_1(a){
    res="";
    switch (a){
        case 1 :
            res="逆时针" ;
            break;
        case 2 :
            res="顺时针" ;
            break;
        case 3 :
            res="共线" ;
            break;
        case -1:
            res="error";
        default:
            res="error";
    }
    return res;
}

export {
    test_1,
    test_2,
    test_3,
    test_4,
    test_5
}





// console.log("test : kernel_2Dmatrix_cal");
// let m1= [[1,1,1],[2,2,2],[3,3,3]];
// let m2 = [[0,1,0],[1,-4,1],[0,1,0]];
// console.log(kernel_2Dmatrix_cal(m2,m1));

// ./learn.js
// console.log("test learn.js");
// let arr = [1,2,3,4,5];
// let arr2 = [3,7,9];
// let ve = new Vector_nD(arr);
// console.log(ve.getEDistance_(arr2));
// 1. sort list ascending or descending

// 2. set start pointer, and end pointer

// 3. find the middle Node and compare with condition

// 4. start pointer equal to end point, or differ by 1

// 5. Code template

var bs = function(arr){
    let sPointer = 0;
    let ePointer = arr.length - 1;

    while (sPointer + 1 < ePointer){
        let middleIndex = Math.floor((sPointer + ePointer) / 2)
        //if(condition)
        //s = middleIndex
        //e = middleIndex
    }

    if(arr[sPointer] === target){
        //firstIndex = start;
    }else if(arr[ePointer] === target){
        //firstIndex = end;
    }
    //return result
}
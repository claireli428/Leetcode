//10/01/2018
//Given an string, remove every a, and duplicate every b

//first remove a,
//second duplicate b
//otherwise, the string length will increase while coping b

var removeADuplicateB = function (str) {
    var arr = str.split(''), pre = 0, cur = 0, count = 0;

    while (cur < arr.length) {
        if(arr[cur] !== 'a') {
            arr[pre] = arr[cur];
            pre++;
            count += arr[cur] === 'b' ? 1 : 0;
        }
        cur++;
    }

    if(count === 0) {
        return arr.slice(0, pre).join('');
    }

    pre--;
    cur = pre + count;
    arr = arr.slice(0, cur+1);

    while (pre >= 0) {
        if(arr[pre] !== 'b') {
            arr[cur] = arr[pre];
            cur--;
        } else {
            arr[cur] = 'b';
            arr[cur-1] = 'b';
            cur -= 2;
        }
        pre--;
    }

    return arr.join('');

}
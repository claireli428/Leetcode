//10/01/2018
//arrange string, let 0 at left and 1 at right;

var arrangeString = function(str) {
    var arr = str.split(''), start = 0, end = arr.length-1;
    while(start < end) {
        if(arr[start] === arr[end]) {
            if(arr[start] === '0')
                start++;
            else
                end--;
        } else {
            if (arr[start] === '1') {
                arr[start] = '0';
                arr[end] = '1';
            }
            start++;
            end--;
        }
    }

    return arr.join('');
}
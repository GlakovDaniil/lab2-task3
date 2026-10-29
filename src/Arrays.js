export function arraySorting(data) {
    let arr = data.split(',');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    arr.sort((a, b) => a - b);
  
    return arr.join(',');
}

export function arrayFiltering(data) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] <= 100) {
            result.push(data[i]);
        }
    }
    return result;
}

export function arrayPushing(array1, array2) {
    let newArray = [];

    for (let i = 0; i < 5; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}

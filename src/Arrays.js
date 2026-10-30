export function arraySorting(data) {
    return data
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
        .join(',');
}

export function arrayFiltering(data) {
    return data.filter(num => num <= 100);
}

export function arrayPushing(array1, array2) {
    return array1.flatMap((val, i) => [val, array2[i]]);
}

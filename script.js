//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        return -Infinity;
    }

    return second;
}

// Example usage
console.log(secondHighest([5, 1, 2, 3, 4])); 
console.log(secondHighest([-1, -2, -3, -4, -5])); 
console.log(secondHighest([])); // -Infinity
console.log(secondHighest([1])); // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); //

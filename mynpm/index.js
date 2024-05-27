const myCustomMapFunction = function(callback) {
    console.log('My Custom Map Function!');

    const newArray = [ ];

    // 'this' refers to the array
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i], i);
    }

    return newArray;
}

const myCustomSortFunction = function(callback) {
    console.log('My Custom Sort Function!');

    const newArray = [...this]; 

    for (let i = 0; i < newArray.length; i++){
        for (let j = 0; j < newArray.length - 1; j++) {
            if (callback(newArray[j], newArray[j + 1]) > 0) {
                const temp = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = temp;
            }
       }
    }

    // array is sorted
    return newArray;
}
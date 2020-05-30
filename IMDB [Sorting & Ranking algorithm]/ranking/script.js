function sortBestRatingsFirst(numbers) {
    // sortBestRatingsFirst([5,8,2,9,3,10])
    // Know max and its index

    // find max 
    for (let j = 0; j < numbers.length-1; j++) {

        let max_num = numbers[j];
        let max_location = j;

        for (let i=j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                max_num = numbers[i];
                max_location = i;
            }
        }
 
        // swap the first and the max_num
        numbers[max_location] = numbers[j]; // ---> 10
        numbers[j] = max_num;
         
    }

    return [max_num, max_location, numbers] 
}

// console.log(sortBestRatingsFirst([5,8,2,9,3,10]));

// Max Helper Function
function findMaxHelper(numbers, start) {

    let maximum = numbers[start];
    let max_location = start ;

    for (let i=start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
            max_location = i;
        }
    }

    return {max_number: maximum, max_index: max_location}
}


// Sorting with Helper Function
function sortBestWithHelper(numbers) {
    // run as many times as there are items

    for (let j = 0; j < numbers.length-1; j++) {

        // Find max number and max location starting from j
        max = findMaxHelper(numbers, j);
        max_num = max['max_number'];
        max_location = max['max_index'];
 
        // swap the first and the max item in an array
        numbers[max_location] = numbers[j]; // ---> 10
        numbers[j] = max_num;
         
    }

    return [max_num, max_location, numbers] 
}

console.log(sortBestWithHelper([5,8,2,9,3,10]));
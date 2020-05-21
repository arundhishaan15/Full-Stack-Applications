function sortBestRatingsFirst(numbers) {
    // sortBestRatingsFirst([5,8,2,9,3,10])
    // Know max and its index

    // find max
    let max_num = numbers[0];
    let max_location;
    for (i=0; i < numbers.length; i++) {
        if (numbers[i] > max_num) {
            max_num = numbers[i];
            max_location = i;
        }
    }

    // swap the first and the max_num
    numbers[max_location] = numbers[0]; // ---> 10
    numbers[0] = max_num;

    return [max_num, max_location, numbers] 
}

console.log(sortBestRatingsFirst([5,8,2,9,3,10]));
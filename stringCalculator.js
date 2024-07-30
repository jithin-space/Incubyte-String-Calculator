function add(numbers) {
    // fail first
    if (numbers == '') {
        return 0;
    } else {
        const numberArray = numbers.split(',');
        const sum = numberArray.reduce((agg, num) => agg + Number(num), 0);
        return sum;
    }
    return numbers == '' ? 0 : Number(numbers);
}

module.exports = add;
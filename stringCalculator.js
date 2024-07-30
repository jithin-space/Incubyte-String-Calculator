function add(numbers) {
    // fail first
    if (numbers == '') {
        return 0;
    } else {
        // Replace newlines with commas before splitting
        const numbersWithCommas = numbers.replace(/\n/g,',');
        const numberArray = numbersWithCommas.split(',');
        const sum = numberArray.reduce((agg, num) => agg + Number(num), 0);
        return sum;
    }
    return numbers == '' ? 0 : Number(numbers);
}

module.exports = add;
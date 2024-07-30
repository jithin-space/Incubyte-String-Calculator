function add(numbers) {
    // fail first
    if (numbers == '') {
        return 0;
    } else {
        // Check for custom delimiter
        if (numbers.startsWith('//')) {
            const delimiterMatch = numbers.match(/\/\/(.*)\n/);

            if(delimiterMatch) {
                const customDelimiter = delimiterMatch[1];
                numbers = numbers.substring(delimiterMatch[0].length); //Remove the delimiter line
                return add(numbers.replace(new RegExp(customDelimiter.replace(/\|/g, '\\|'),'g'), ',')); // Replace custom delimiter with comma & recursively call add
            }
        }
        // Replace newlines with commas before splitting
        const numbersWithCommas = numbers.replace(/\n/g,',');
        const numberArray = numbersWithCommas.split(',');
        
        // Handle negative numbers
        const negativeNumbers = numberArray.filter(num => parseInt(num, 10) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error('Negatives not allowed: ' + negativeNumbers.join(','));
        }
        const sum = numberArray.reduce((agg, num) => agg + Number(num), 0);
        return sum;
    }
}

module.exports = add;
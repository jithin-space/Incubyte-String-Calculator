function add(numbers) {
    // fail first
    return numbers == '' ? 0 : Number(numbers);
}

module.exports = add;
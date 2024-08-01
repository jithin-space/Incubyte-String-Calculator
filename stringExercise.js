function fib(length){
    let out = [];
    if (length >= 1) out.push(0);
    if(length >= 2) out.push(1);
    if(length >= 3) out.push(out[0]+out[1])

    return out;
}

module.exports = fib;
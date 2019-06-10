function toDecimal(roman) {
    let decimal = 0;

    for (let i = 0; i < roman.length; i++) {
        switch (roman[i]) {
            case 'I':
                decimal++;
                break;
            case 'V':
                decimal += 5;
                break;
            case 'X':
                decimal += 10;
                break;
            case 'L':
                decimal += 50;
                break;
            case 'C':
                decimal += 100;
                break;
            case 'D':
                decimal += 500;
                break;
            case 'M':
                decimal += 1000;
                break;
        }

        if(roman[i] !== 'I' && roman[i -1] === 'I') {
            decimal -= 2;
        }
    }
    return decimal;
}

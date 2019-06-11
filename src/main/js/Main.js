function toDecimal(roman) {
    var decimal = 0;

    var order = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    for (var i = 0; i < roman.length; i++) {
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

        if(i > 0) {
            var orderPos = order.indexOf(roman[i]);
            var prevOrderPos = order.indexOf(roman[i-1]);
            if(orderPos > 0 && orderPos > prevOrderPos) {
                decimal -= 2 * toDecimal(roman[i-1]);
            }
        }
    }
    return decimal;
}

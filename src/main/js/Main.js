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

function toNumeral(decimal) {
    var order = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var restricted = ["VX", "LC"];

    var res = "";
    for(var i = order.length - 1; i >= 0; i--) {
        var val = toDecimal(order[i]);
        var same = false;
        do {
            if (val <= decimal) {
                res += order[i];
                decimal -= val;
            } else if (restricted.indexOf(order[i - 1] + order[i]) === -1 && (val = toDecimal(order[i - 1] + order[i])) <= decimal) {
                res += order[i - 1] + order[i];
                decimal -= val;
            } else {
                same = true;
                for(var x = i - 1; x >= 0; x--) {
                    if(restricted.indexOf(order[x] + order[i]) === -1 && (val = toDecimal(order[x] + order[i])) <= decimal) {
                        res += order[x]+ order[i];
                        decimal -= val;
                        same = false;
                    }
                }
            }
        } while(!same);
    }
    return res;
}
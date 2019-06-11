describe("Roman numeral converter", function() {
    describe("from numerals to decimal", function() {
        it("should convert II to 2", function() {
            expect(toDecimal("II")).toBe(2);
        });
        it("should convert III to 3", function() {
            expect(toDecimal("III")).toBe(3);
        });
        it("should convert CDXCIX to 499", function() {
            expect(toDecimal("CDXCIX")).toBe(499);
        });

        describe("subtraction", function() {
            it("should convert IV to 4", function() {
                expect(toDecimal("IV")).toBe(4);
            });
            it("should convert IX to 9", function() {
                expect(toDecimal("IX")).toBe(9);
            });
            it("should convert XIV to 14", function() {
                expect(toDecimal("XIV")).toBe(14);
            });
            it("should convert CD to 400", function() {
                expect(toDecimal("CD")).toBe(400);
            });
        });

        describe("single character to value equivalent", function() {
            var characterNumeralMap = [
                {numeral: 'I', value: 1},
                {numeral: 'V', value: 5},
                {numeral: 'X', value: 10},
                {numeral: 'L', value: 50},
                {numeral: 'C', value: 100},
                {numeral: 'D', value: 500},
                {numeral: 'M', value: 1000},
            ];
            for (var i = 0; i < characterNumeralMap.length; i++) {
                var characterNumeral = characterNumeralMap[i];
                it('should convert ' + characterNumeral.numeral + ' to ' + characterNumeral.value, function() {
                    expect(toDecimal(characterNumeral.numeral)).toBe(characterNumeral.value);
                });
            }
        });
    });

    describe("from decimal to numerals", function() {
        it("should convert 1 to I", function() {
            expect(toNumeral(1)).toBe("I");
        });
        it("should convert 2 to II", function() {
            expect(toNumeral(2)).toBe("II");
        });
        it("should convert 4 to IV", function() {
            expect(toNumeral(4)).toBe("IV");
        });
        it("should convert 5 to V", function() {
            expect(toNumeral(5)).toBe("V");
        })
        it("should convert 10 to X", function() {
            expect(toNumeral(10)).toBe("X");
        });
        it("should convert 499 to CDXCIX", function() {
            expect(toNumeral(499)).toBe("CDXCIX");
        });

        it("should convert 148 to CXLVIII", function () {
            expect(toNumeral(148)).toBe("CXLVIII");
        })
    });

    describe("round trip", function() {
        describe("decimal to numeral to decimal", function() {
            for(var i = 0; i <= 100; i +=3) {
                it("should let " + i + " remain " + i, function () {
                    expect(toDecimal(toNumeral(i))).toBe(i);
                });
            }
        });

        describe("numeral to decimal to numeral", function() {
            var numeralsList = ["I", "V", "X", "VI", "VII", "XII", "CXLVII"];
            it("should let I remain I", function() {
                expect(toNumeral(toDecimal("I"))).toBe("I");
            });
            it("should let V remain V", function() {
                expect(toNumeral(toDecimal("V"))).toBe("V");
            });
            it("should let IX remain IX", function() {
                expect(toNumeral(toDecimal("IX"))).toBe("IX");
            });
            it("should let VI remain VI", function() {
                expect(toNumeral(toDecimal("VI"))).toBe("VI");
            });
            it("should let VII remain VII", function() {
                expect(toNumeral(toDecimal("VII"))).toBe("VII");
            });
            it("should let XII remain XII", function() {
                expect(toNumeral(toDecimal("XII"))).toBe("XII");
            });
            it("should let CXLVII remain CXLVII", function() {
                expect(toNumeral(toDecimal("CXLVII"))).toBe("CXLVII");
            });
        })
    })
});
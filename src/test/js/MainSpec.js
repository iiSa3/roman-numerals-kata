describe("Roman numeral converter", function() {
    describe("from numerals to decimal", function() {
        it("should convert II to 2", function() {
            expect(toDecimal("II")).toBe(2);
        });
        it("should convert III to 3", function() {
            expect(toDecimal("III")).toBe(3);
        });
        describe("subtraction", function() {
            it("should convert IV to 4", function() {
                expect(toDecimal("IV")).toBe(4);
            });
        });

        describe("single character to value equivalent", function() {
            let characterNumeralMap = [
                {numeral: 'I', value: 1},
                {numeral: 'V', value: 5},
                {numeral: 'X', value: 10},
                {numeral: 'L', value: 50},
                {numeral: 'C', value: 100},
                {numeral: 'D', value: 500},
                {numeral: 'M', value: 1000},
            ];
            for (let i = 0; i < characterNumeralMap.length; i++) {
                let characterNumeral = characterNumeralMap[i];
                it('should convert ' + characterNumeral.numeral + ' to ' + characterNumeral.value, function() {
                    expect(toDecimal(characterNumeral.numeral)).toBe(characterNumeral.value);
                });
            }
        });
    });
});
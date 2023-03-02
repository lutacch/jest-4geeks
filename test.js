const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);

});

test("One euro should be 1.206 dollars", function(){
const { fromEuroToDollar } = require('./app.js')
expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 106 yen", function(){
const { fromDollarToYen } = require('./app.js')
expect(fromDollarToYen(1.2)).toBe(127.9);
})

test("135 yen should be 1 pound", function(){
const { fromYenToPound } = require('./app.js')
expect(fromYenToPound(127.9)).toBe(0.8);
})
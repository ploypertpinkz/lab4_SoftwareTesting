const fizzBuzz = require('./FizzBuzz');

test('A number is fizz if it is divisible by 3 number 3',() =>{
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('A number is fizz if it is divisible by 3 number 99',() =>{
    expect(fizzBuzz(99)).toBe("Fizz");
});

test('A number is fizz if it is divisible by 5 number 5',() =>{
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('A number is fizz if it is divisible by 5 number 95',() =>{
    expect(fizzBuzz(95)).toBe("Buzz");
});

test('A number 1 ruturn 1',() =>{
    expect(fizzBuzz(1)).toBe(1);
});

test('A number 97 return 97',() =>{
    expect(fizzBuzz(97)).toBe(97);
});

test('A number is fizz if it is divisible by 3, 5 number 15',() =>{
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test('A number is fizz if it is divisible by 3, 5 number 60',() =>{
    expect(fizzBuzz(60)).toBe("FizzBuzz");
});